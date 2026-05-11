import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(3, "1 d"),
  prefix: "contact",
});

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return new Response("Too many messages. Please try again tomorrow.", {
      status: 429,
    });
  }

  const data = await request.formData();
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const message = String(data.get("message") ?? "");
  const website = String(data.get("website") ?? "");
  const loadedAt = Number(data.get("loadedAt") ?? 0);

  // Honeypot — bots will fill this hidden field
  if (website) {
    return new Response("OK", { status: 200 });
  }

  // Reject submits faster than 3 seconds (bots fill instantly)
  if (!loadedAt || Date.now() - loadedAt < 3000) {
    return new Response("OK", { status: 200 });
  }

  if (!name || !email || !message) {
    return new Response("Missing required fields", { status: 400 });
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
