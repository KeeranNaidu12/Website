import { Resend } from "resend";

const lastSent = new Map<string, string>();

function today() {
  return new Date().toISOString().slice(0, 10);
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (lastSent.get(ip) === today()) {
    return new Response(
      "You've already sent a message today. Please try again tomorrow.",
      { status: 429 },
    );
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

  lastSent.set(ip, today());
  return new Response("OK", { status: 200 });
}
