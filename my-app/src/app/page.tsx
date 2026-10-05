import Technology from "./components/Technology";

const techCategories = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "/icons/Python.svg" },
      { name: "Java", icon: "/icons/Java.png" },
      { name: "JavaScript", icon: "/icons/JavaScript.png" },
      { name: "TypeScript", icon: "/icons/TypeScript.svg" },
      { name: "PHP", icon: "/icons/PHP.svg" },
      { name: "SQL", icon: "/icons/SQL.svg" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "/icons/React.svg" },
      { name: "Next.js", icon: "/icons/Next.js.svg" },
      { name: "HTML", icon: "/icons/HTML.svg" },
      { name: "CSS", icon: "/icons/CSS.svg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/Node.js.svg" },
      { name: "Express.js", icon: "/icons/Express.js.svg" },
      { name: "Django", icon: "/icons/Django.svg" },
      { name: "FastAPI", icon: "/icons/Fastapi.png" },
      { name: "Spring Boot", icon: "/icons/Spring Boot.svg" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: "/icons/MySQL.svg" },
      { name: "PostgreSQL", icon: "/icons/PostgreSQL.svg" },
      { name: "Firebase", icon: "/icons/Firebase.svg" },
      { name: "Supabase", icon: "/icons/Supabase.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "/icons/Docker.svg" },
      { name: "GitHub", icon: "/icons/GitHub.svg" },
      { name: "Vercel", icon: "/icons/Vercel.png" },
      { name: "Excel", icon: "/icons/Excel.svg" },
      { name: "Tableau", icon: "/icons/Tableau.png" },
      { name: "Power BI", icon: "/icons/Power BI.svg" },
    ],
  },
];

const interests = [
  "Software Engineering",
  "Data Analysis",
  "Machine Learning",
  "Artificial Intelligence",
  "Game Development",
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
          <div className="max-w-6xl mx-auto flex items-center gap-4 sm:gap-6 md:gap-10 px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-20">
            <div className="max-w-2xl">
              <p className="text-sm sm:text-base md:text-lg text-sky-400 font-bold">Hi there, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2">Keeran Naidu.</h1>
              <p className="text-base sm:text-lg md:text-2xl text-slate-300 mt-4">
                UBCO Computer Science graduate.
              </p>
              <div className="mt-4 sm:mt-6 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 sm:px-5 py-3 sm:py-4">
                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                  I'm looking to grow my career in tech and I enjoy understanding and building systems that solve problems or make things easier. Areas I'm interested in:
                </p>
                <ul className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">
                  {interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full bg-sky-500 px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base font-bold text-white"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <img
              src="/KeeranNaidu.png"
              alt="Keeran Naidu"
              className="w-28 h-28 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 shrink-0 rounded-full object-cover object-bottom ring-4 ring-sky-500/30"
            />
          </div>
        </section>

        <section
          id="skills"
          className="relative bg-transparent text-slate-100 min-h-[80vh]"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-400/80 text-center">Tech Stack</p>
            <h2 className="mt-3 mb-6 pb-2 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-center bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              Technologies I have worked with
            </h2>

            <div className="mt-8 sm:mt-14 max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
              {techCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl font-semibold text-slate-200">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                    {category.items.map((t) => (
                      <Technology key={t.name} name={t.name} icon={t.icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
