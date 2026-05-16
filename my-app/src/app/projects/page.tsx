import Project from "../components/Project";

export default function Projects() {
  return (
    <div>
      <main className="relative overflow-hidden bg-slate-950">
        <section>
          <div className="w-full mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-400/80 text-center">
              Projects
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-center bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              This is what I have worked on
            </h1>

            <div className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <Project
                name="Personal Website"
                image="/project_icons/website.png"
                description="My personal portfolio site that you're currently viewing to showcase my projects and skills. Designed with a modern layout and reusable components, it's continuously updated as I take on new projects"
                date="May 2026 - Present"
                github="https://github.com/KeeranNaidu12/Website"
                link="https://keerandev.com"
                tech={["TypeScript", "React", "Next.js", "Vercel"]}
              />
              <Project
                name="NuTeach"
                image="/project_icons/NuTeach.png"
                description="As part of my Directed Studies course, I worked on gamification software under the supervision of Dr Abdallah Mohamed. My contributions included building UI dashboards, implementing purchase approval functionality, weight-shift rewards, a refunding policy, and user guides."
                date="Janaury 2026 - Present"
                tech={["TypeScript", "React", "Node.js", "SQL", "MariaDB"]}
              />
              <Project
                name="Toronto Crime Analysis"
                image=""
                description="Analyzed the crime for Toronto neighbours. Created safety scores to rank neighbourhoods and understand which kinds of crime occur in specific neighbourhoods. Additionally, created LightGBM models to predict assault, auto theft, break and enter and traffic incidents. "
                date="March 2026 - April 2026"
                github="https://github.com/KeeranNaidu12/CrimeAnalysis.git"
                tech={["Python","PostgreSQL", "Power BI"]}
              />
              <Project
                name="Examinator"
                image="/project_icons/Examinator.png"
                description="As part of my capstone course, I built a dynamic exam generation and analysis platform that creates unique exam variants by randomizing question types, difficulty levels, topic distribution and mandatory content requirements. Integrated real-time analysis to detect collusion and cheating patterns through statistical modeling, improving academic integrity while maintaining assessment validity across all generated variants."
                date="May 2025 - August 2025"
                tech={["Java", "JavaScript", "React", "SpringBoot", "MySQL"]}
              />
              <Project
                name="Plata-Boom"
                image="/project_icons/Plataboom.png"
                description="A local co-op 2D shooter built in Unity and C#, inspired by Pong but with characters that fire projectiles instead of paddles. Across 4 rounds, players race to destroy each other's target on stages packed with gimmicks like moving platforms and spikes, backed by expressive 2D art and chaotic sound design."
                date="March 2025 - April 2025"
                github="https://github.com/Battlebee12/416-Game-Jam"
                link="https://battlebee12.itch.io/plata-boom"
                tech={["C#", "Unity"]}
              />
              <Project
                name="Jurassic Care"
                image="/project_icons/JurassicCare.png"
                description="Jurassic-Care is a dynamic web application simulating an online dinosaur adoption store. Users can register, log in, browse products (dinosaurs), add them to a cart, leave reviews, and complete checkouts. An admin portal supports product management and user moderation."
                date="January 2025 - April 2025"
                github="https://github.com/ThunderIW/COSC360_final-Project"
                tech={["PHP", "JavaScript", "HTML", "CSS", "SQL"]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
