import Link from "next/link";

const pillars = [
  { title: "Quality", body: "Convert engineering intent into fabrication-ready solutions, every time." },
  { title: "Zero Rework", body: "Rigorous QC and structured RFI workflows so it's right the first time." },
  { title: "Tech-Driven Efficiency", body: "Automation and modern tooling baked into the detailing workflow." },
];

const techStack = ["SDS/2", "Tekla Structures", "Revit", "Descon", "AutoCAD", "RISA", "Bluebeam", "Mathcad"];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-accent">Who we are</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Bridging design intent and fabrication reality.</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">
            Founded in 2021, Greysliver exists to close the gap between what gets designed and what gets built.
            We deliver detailing and engineering that is shop-ready and field-ready from day one.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900">A unified platform for steel construction</h2>
          <p className="mt-4 text-slate-700">
            Our long-term goal is a single, integrated workflow across detailing, engineering, shop, and field —
            with zero rework and complete traceability from concept to erection.
          </p>
          <p className="mt-4 text-slate-700">
            Backed by leadership with 20+ years in structural steel and licensed engineering partners covering 80% of
            the U.S., we serve fabricators, GCs, architects, and engineers across the country.
          </p>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <div className="text-sm font-semibold uppercase tracking-wider text-brand-accent">Mission</div>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Accuracy at scale</h2>
            <p className="mt-3 text-slate-700">
              Eliminate the disconnect between design and construction by transforming complex engineering and
              architectural intent into perfectly buildable solutions.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <div className="text-sm font-semibold uppercase tracking-wider text-brand-accent">Vision</div>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">One seamless organism</h2>
            <p className="mt-3 text-slate-700">
              A unified intelligence platform where detailing, engineering, shop, and field coordination operate as
              one — with traceability end to end.
            </p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Our DNA</h2>
            <p className="mt-3 text-slate-600">Three principles guide every project we touch.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title} className="rounded-xl border border-slate-200 bg-slate-50 p-8">
                <div className="text-4xl font-extrabold text-brand-accent">0{i + 1}</div>
                <h3 className="mt-2 text-xl font-semibold text-brand">{p.title}</h3>
                <p className="mt-3 text-slate-700">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Integrated tooling</h2>
          <p className="mt-3 text-slate-600">The platforms we use to model, detail, and check your project.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {techStack.map((t) => (
              <div key={t} className="flex h-14 min-w-[140px] items-center justify-center rounded-md border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING CTA */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="flex h-72 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white/70 lg:h-auto">
            [ SDS/2 training image ]
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-accent">Education</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Authorized SDS/2 Training Center</h2>
            <p className="mt-4 text-slate-700">
              We run hands-on workshops via our Nemetschek partnership — modeling, connections, drawings, and QA/QC
              built around real-world project simulations.
            </p>
            <Link href="/course" className="mt-6 inline-block w-fit rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white">
              Explore the Program
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="bg-brand-dark text-center text-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-3xl font-bold">Let's build something together.</h2>
          <p className="mt-3 text-slate-300">From feasibility to erection, we're a partner that ships on schedule.</p>
          <Link href="/contact" className="mt-6 inline-block rounded-md bg-brand-accent px-6 py-3 font-semibold">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
