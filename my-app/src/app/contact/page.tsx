
const contacts = [
  { label: "GitHub", href: "https://github.com/KeeranNaidu12", icon: "/icons/GitHub.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/keeran-naidu-a28012260/", icon: "/icons/LinkedIn.svg" },
  { label: "Email", href: "mailto:keerannaidu08@gmail.com", icon: "/icons/Mail.svg" },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20">
      <section className="mx-auto max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-400/80 text-center">
          Contact
        </p>
        <h1 className="mb-10 text-center text-3xl font-semibold tracking-tight bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
          Get in touch
        </h1>

        <ul className="flex flex-col gap-4">
          {contacts.map(({ label, href, icon }) => {
            const external = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500/60 hover:bg-slate-900"
                >
                  <img
                    src={icon}
                    alt={label}
                    className="h-10 w-10 rounded-full bg-white p-2"
                  />
                  <span className="text-lg font-medium text-slate-100 group-hover:text-sky-400">
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
      </section>
    </main>
  );
}
