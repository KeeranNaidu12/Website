import Technology from "./components/Technology";

const technologies = [
  { name: "Python", icon: "/icons/Python.svg" },
  { name: "Java", icon: "/icons/Java.svg" },
  { name: "JavaScript", icon: "/icons/JavaScript.svg" },
  { name: "TypeScript", icon: "/icons/TypeScript.svg" },
  { name: "PHP", icon: "/icons/PHP.svg" },
  { name: "HTML", icon: "/icons/HTML.svg" },
  { name: "CSS", icon: "/icons/CSS.svg" },
  { name: "React", icon: "/icons/React.svg" },
  { name: "Next.js", icon: "/icons/Next.js.svg" },
  { name: "Node.js", icon: "/icons/Node.js.svg" },
  { name: "Express.js", icon: "/icons/Express.js.svg" },
  { name: "Django", icon: "/icons/Django.svg" },
  { name: "FastAPI", icon: "/icons/FastAPI.svg" },
  { name: "Spring Boot", icon: "/icons/Spring Boot.svg" },
];

export default function Home() {
  return (
    <div>
      <main>
        <section
          id="about"
          className="bg-slate-950 text-slate-100 min-h-[40vh]"
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
          className="bg-slate-800 text-slate-100 min-h-[80vh]"
        >
          <h1 className="p-10 text-4xl font-bold text-center text-sky-400">Technologies I have worked with</h1>
          <div className="max-w-6xl mx-auto flex items-center gap-10 px-10 py-20">
        
            <div className="flex flex-wrap justify-center itmes-center gap-4">
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
