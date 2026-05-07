
export default function Home() {
  return (
    <div>
      <main>
        <section className="flex items-center gap-6 p-6 bg-blue-900">
          <div className="bg-amber-600 font-bold rounded-2xl p-5">
            <p className="text-4xl">Hi there!</p>
            <p className="text-4xl">My name is Keeran Naidu.</p>
            <p className="text-4xl">UBC Computer Science graduate</p>
            <p className="text-4xl">Interested in software development and data analysis</p>
            <p className="text-4xl">Buidling systems that make an impact</p>
          </div>

          <img
            src="/KeeranNaidu.png"
            alt="Keeran Naidu"
            className="w-100 h-100 rounded-full object-cover object-bottom"
          />
        </section>
      </main>
    </div>
  );
}
