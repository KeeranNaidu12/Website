"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [sent, setSent] = useState(false);
  const loadedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let hasError = false;

    if (name.trim() === "") {
      setNameError("Please enter your name");
      hasError = true;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Please enter your email");
      hasError = true;
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (message.trim().length < 50) {
      setMessageError("Message must be at least 50 characters");
      hasError = true;
    } else if (message.trim().length > 5000) {
      setMessageError("Message must be no longer than 5000 characters");
      hasError = true;
    } else {
      setMessageError("");
    }

    if (hasError) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("website", "");
    formData.append("loadedAt", String(loadedAt.current));

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } else if (res.status === 429) {
      setMessageError(await res.text());
    } else {
      setMessageError("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-10 lg:col-span-3"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xl text-slate-200">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-slate-800 rounded-md px-4 py-4 text-lg text-white"
        />
        {nameError && <p className="text-sm text-red-400">{nameError}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xl text-slate-200">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-slate-800 rounded-md px-4 py-4 text-lg text-white"
        />
        {emailError && <p className="text-sm text-red-400">{emailError}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xl text-slate-200">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-slate-800 rounded-md px-4 py-4 text-lg text-white resize-none"
        />
        {messageError && <p className="text-sm text-red-400">{messageError}</p>}
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        className="self-start rounded-md bg-sky-500 px-7 py-3 text-lg font-medium text-white hover:bg-sky-400"
      >
        Send message
      </button>

      {sent && <p className="text-sm text-emerald-400">Thanks! Your message has been sent.</p>}
    </form>
  );
}
