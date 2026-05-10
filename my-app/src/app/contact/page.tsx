
export default function Contact() {
  return (
    <div>
      <main className="relative overflow-hidden bg-slate-950">
        <section>
          <h1 className="text-center text-blue-400 text-2xl">
            {" "}
            Want to contact me?{" "}
          </h1>
          <h2 className="text-center text-blue-400 text-xl">
            These are the best ways of reaching out to me, in this order.
          </h2>

          <div>
            <ul className="flex flex-col gap-2">
              <li>
                <a>
                  <div className="">
                    <img
                      src="/icons/GitHub.svg"
                      alt="GitHub"
                      className="w-10 h-10 rounded-full object-cover object-bottom ring-4 bg-white ring-sky-500/30"
                    />
                    GitHub
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="/icons/LinkedIn.svg"
                    alt="LinkedIn"
                    className="w-10 h-10 rounded-full object-cover object-bottom  bg-white ring-4 ring-sky-500/30"
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="/icons/Mail.svg"
                    alt="GitHub"
                    className="w-10 h-10 rounded-full object-cover object-bottom ring-4 ring-sky-500/30"
                  />
                  Email
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="/icons/Office Hours.svg"
                    alt="Office Hours"
                    className="w-10 h-10 rounded-full object-cover object-bottom ring-4 ring-sky-500/30"
                  />
                  Office Hours
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
