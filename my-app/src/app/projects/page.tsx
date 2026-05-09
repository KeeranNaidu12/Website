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
                date="March-April 2025"
                link="https://battlebee12.itch.io/plata-boom"
              />
              <Project
                name="Personal Website"
                image="/project_icons/Plataboom.png"
                description="A local co-op 2D shooter built in Unity and C#, inspired by Pong but with characters that fire projectiles instead of paddles. Across 4 rounds, players race to destroy each other's target on stages packed with gimmicks like moving platforms and spikes, backed by expressive 2D art and chaotic sound design."
                date="March-April 2025"
                link="https://battlebee12.itch.io/plata-boom"
              />
              <Project
                name=""
                image="/project_icons/Plataboom.png"
                description="A local co-op 2D shooter built in Unity and C#, inspired by Pong but with characters that fire projectiles instead of paddles. Across 4 rounds, players race to destroy each other's target on stages packed with gimmicks like moving platforms and spikes, backed by expressive 2D art and chaotic sound design."
                date="March-April 2025"
                link="https://battlebee12.itch.io/plata-boom"
              />
              <Project
                name="Plata-Boom"
                image="/project_icons/Plataboom.png"
                description="A local co-op 2D shooter built in Unity and C#, inspired by Pong but with characters that fire projectiles instead of paddles. Across 4 rounds, players race to destroy each other's target on stages packed with gimmicks like moving platforms and spikes, backed by expressive 2D art and chaotic sound design."
                date="March-April 2025"
                link="https://battlebee12.itch.io/plata-boom"
              />
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
