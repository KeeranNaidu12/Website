import Project from "../components/Project";

export default function Projects() {
  return (
    <div>
      <main className="relative overflow-hidden bg-slate-950">
        <section>
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-400/80 text-center">
              Projects
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-center bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              This is what I have worked on
            </h1>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Project
                name="NuTeach"
                image="/project_icons/Plataboom.png"
                description="A local co-op 2D shooter built in Unity and C#, inspired by Pong but with characters that fire projectiles instead of paddles. Across 4 rounds, players race to destroy each other's target on stages packed with gimmicks like moving platforms and spikes, backed by expressive 2D art and chaotic sound design."
                date="Janaury 2026 - Present"
              />
              <Project
                name="Personal Website"
                image="/project_icons/Plataboom.png"
                description="My personal portfolio site that you're currently viewing to showcase my projects and skills. Designed with a modern layout and reusable components, it's continuously updated as I take on new projects"
                date="May 2025 - Present"
                github="https://github.com/KeeranNaidu12/Website"
                link="https://keerandev.com"
              />
              <Project
                name="Examinator"
                image="/project_icons/Plataboom.png"
                description="Built a dynamic exam generation and analysis platform that creates unique exam variants by randomizing question types, difficulty levels, topic distribution and mandatory content requirements. Integrated real-time analysis to detect collusion and cheating patterns through statistical modeling, improving academic integrity while maintaining assessment validity across all generated variants."
                date="May 2025 - August 2025"
              />
              <Project
                name="Plata-Boom"
                image="/project_icons/Plataboom.png"
                description="A local co-op 2D shooter built in Unity and C#, inspired by Pong but with characters that fire projectiles instead of paddles. Across 4 rounds, players race to destroy each other's target on stages packed with gimmicks like moving platforms and spikes, backed by expressive 2D art and chaotic sound design."
                date="March 2025 - April 2025"
                github="https://github.com/Battlebee12/416-Game-Jam"
                link="https://battlebee12.itch.io/plata-boom"
              />
              <Project
                name="Jurassic Care"
                image="/project_icons/JurassicCare.png"
                description="Jurassic-Care is a dynamic web application simulating an online dinosaur adoption store. Users can register, log in, browse products (dinosaurs), add them to a cart, leave reviews, and complete checkouts. An admin portal supports product management and user moderation."
                date="January 2025 - April 2025"
                github="https://github.com/ThunderIW/COSC360_final-Project"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
