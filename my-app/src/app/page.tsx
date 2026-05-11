import Technology from "./components/Technology";

const technologies = [
  { name: "Python", icon: "/icons/Python.svg" },
  { name: "Java", icon: "/icons/Java.svg" },
  { name: "JavaScript", icon: "/icons/JavaScript.svg" },
  { name: "TypeScript", icon: "/icons/TypeScript.svg" },
  { name: "PHP", icon: "/icons/PHP.svg" },
  { name: "HTML", icon: "/icons/HTML.svg" },
  { name: "CSS", icon: "/icons/CSS.svg" },
  { name: "SQL", icon: "/icons/SQL.svg" },
  { name: "React", icon: "/icons/React.svg" },
  { name: "Next.js", icon: "/icons/Next.js.svg" },
  { name: "Node.js", icon: "/icons/Node.js.svg" },
  { name: "Express.js", icon: "/icons/Express.js.svg" },
  { name: "Django", icon: "/icons/Django.svg" },
  { name: "FastAPI", icon: "/icons/FastAPI.svg" },
  { name: "Spring Boot", icon: "/icons/Spring Boot.svg" },
  { name: "MySQL", icon: "/icons/MySQL.svg" },
  { name: "PostgreSQL", icon: "/icons/PostgreSQL.svg" },
  { name: "Firebase", icon: "/icons/Firebase.svg" },
  { name: "Supabase", icon: "/icons/Supabase.svg" },
  { name: "Docker", icon: "/icons/Docker.svg" },
  { name: "GitHub", icon: "/icons/GitHub.svg" },
  { name: "Excel", icon: "/icons/Excel.svg" },
  { name: "Tableau", icon: "/icons/Tableau.svg" },
  { name: "Power BI", icon: "/icons/Power BI.svg" }
];

export default function Home() {
  return (
    <div>
      <main className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[60%] -right-32 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <section
          id="about"
          className="relative bg-transparent text-slate-100 min-h-[40vh]"
        >
          <div className="max-w-6xl mx-auto flex items-center gap-10 px-10 py-20">
            <div className="max-w-2xl">
              <p className="text-lg text-sky-400 font-bold">Hi there, I'm</p>
              <h1 className="text-6xl font-bold mt-2">Keeran Naidu.</h1>
              <p className="text-2xl text-slate-300 mt-4">
                UBC Computer Science graduate.
              </p>
              <p className="text-lg text-slate-400 mt-6 leading-relaxed">
                Interested in software development and data analysis by creating
                systems that make an impact.
              </p>
            </div>

            <img
              src="/KeeranNaidu.png"
              alt="Keeran Naidu"
              className="w-72 h-72 rounded-full object-cover object-bottom ring-4 ring-sky-500/30"
            />
          </div>
        </section>

        <section
          id="skills"
          className="relative bg-transparent text-slate-100 min-h-[80vh]"
        >
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-400/80 text-center">Tech Stack</p>
            <h2 className="mt-3 mb-6 pb-2 text-3xl sm:text-5xl font-semibold tracking-tight text-center bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              Technologies I have worked with
            </h2>

            <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6">
              {technologies.map((t) => (
                <Technology key={t.name} name={t.name} icon={t.icon} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
