
const contacts = [
  { label: "GitHub", href: "https://github.com/KeeranNaidu12", icon: "/icons/GitHub.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/keeran-naidu-a28012260/", icon: "/icons/LinkedIn.svg" },
];

import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-400/80 text-center">
          Contact
        </p>
        <h1 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
          Get in touch
        </h1>

        <div className="grid gap-6 sm:gap-10 lg:grid-cols-5">
          <ContactForm />

          <aside className="lg:col-span-2">
            <h2 className="mb-4 text-sm sm:text-base uppercase tracking-[0.2em] text-slate-400">
              Or reach me on
            </h2>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {contacts.map(({ label, href, icon }) => {
                const external = href.startsWith("http");
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 sm:gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-3 sm:p-5 transition hover:border-sky-500/60 hover:bg-slate-900"
                    >
                      <img
                        src={icon}
                        alt={label}
                        className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-white p-2 sm:p-3 object-contain"
                      />
                      <span className="text-base sm:text-xl font-medium text-slate-100 group-hover:text-sky-400">
                        {label}
                      </span>
                      <span className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-sky-400">
                        →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
