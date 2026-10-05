import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Shared across serverless instances via Upstash Redis.
// Accepts either UPSTASH_REDIS_REST_* or the KV_REST_API_* vars the Vercel integration sets.
const redisConfigured =
  (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) ||
  (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

const ratelimit = redisConfigured
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(3, "1 h"), // 3 messages per IP per hour
      prefix: "contact",
    })
  : null;

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const data = await request.formData();
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const website = String(data.get("website") ?? "");

  // Honeypot — bots will fill this hidden field
  if (website) {
    return new Response("OK", { status: 200 });
  }

  if (!name || !email || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Mirror the client-side checks so direct POSTs can't bypass them
  if (
    name.length > 100 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 50 ||
    message.length > 5000
  ) {
    return new Response("Invalid input", { status: 400 });
  }

  if (ratelimit) {
    const { success } = await ratelimit.limit(getClientIp(request));
    if (!success) {
      return new Response("Too many messages — please try again later.", { status: 429 });
    }
  } else if (process.env.NODE_ENV === "production") {
    console.warn("Contact form rate limiting is disabled: Upstash Redis env vars are not set");
  }

  try {
    await resend.emails.send({
      from: "contact@keerandev.com",
      to: process.env.MAIL_TO!,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (err) {
    console.error("Failed to send contact email", err);
    return new Response("Failed to send message", { status: 500 });
  }

  return new Response("OK", { status: 200 });
}
