import Link from "next/link";

const services = [
  { title: "Structural Steel Detailing", body: "Shop & erection drawings, CNC/KISS exports, ABM, bolt summaries — sequence-ready for the floor." },
  { title: "Connection Design & Engineering", body: "AISC-compliant, P.E. stamped. Frames, lateral systems, stairs, trusses, seismic & wind." },
  { title: "3D Modelling & BIM Co-ordination", body: "Clash-free models with erection-sequence visualization and complex geometry." },
  { title: "Estimating Support", body: "Material takeoffs, tonnage, value engineering for fast, competitive bids." },
  { title: "Erection Planning Support", body: "Sequence plans, temporary bracing guidance, piece-mark mapping, on-site support." },
  { title: "Authorized SDS/2 Training Institute", body: "Hands-on workshops via Nemetschek partnership with real-world project simulations." },
];

const projects = [
  "ClearSky Rehab Hospital — TX",
  "Texas A&M Commerce Building — TX",
  "PepsiCo Facility — Plano, TX",
  "Tribal Center — OK",
  "Mixed-Use Development — CA",
  "Industrial Plant Expansion — TX",
  "K-12 School Campus — TX",
  "Healthcare Tower — TX",
  "Retail Distribution Center — OK",
  "Civic Auditorium — CA",
  "Higher-Ed Lab Building — TX",
  "Logistics Hub — OK",
];

const testimonials = [
  {
    quote: "Their drawings cut our shop questions in half. The sequence really shows up on the floor.",
    by: "Steel Fabricator — Texas",
  },
  {
    quote: "Responsive, accurate, and never missed a deadline. Easy team to work with on tight schedules.",
    by: "General Contractor — Oklahoma",
  },
  {
    quote: "Quality stays consistent project after project. They feel like an extension of our team.",
    by: "Fabricator — California",
  },
];

const techLogos = ["SDS/2", "Tekla", "Revit", "AutoCAD", "RISA", "Bluebeam", "AISC", "AWS", "OSHA"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(135deg, #0b3d91 0%, #0a1f44 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <span className="inline-block rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
            Steel Detailing · Engineering · Coordination
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Fabrication-first steel detailing for U.S. fabricators.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Reducing shop confusion, RFIs, and rework through practical, sequence-ready detailing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-md bg-brand-accent px-6 py-3 font-semibold hover:opacity-90">
              Talk to Us About Your Next Project
            </Link>
            <Link href="/services" className="rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            General Contractors & Architects we've worked with
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="flex h-12 items-center justify-center rounded-md bg-slate-100 text-xs font-medium text-slate-400">
                LOGO
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What we do</h2>
            <p className="mt-3 text-slate-600">
              End-to-end steel detailing and connection engineering for fabricators, GCs, architects, and engineers.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h2M9 13h2M9 17h2M13 9h2M13 13h2M13 17h2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-brand">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="rounded-md border border-brand px-6 py-3 font-semibold text-brand hover:bg-brand hover:text-white">
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS SHOWCASE */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Selected projects</h2>
            <p className="mt-3 text-slate-600">A snapshot of work across healthcare, education, industrial, and civic sectors.</p>
            <ul className="mt-8 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {projects.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 inline-block rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white">
              GET IN TOUCH
            </Link>
          </div>
          <div className="flex h-80 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-sm font-medium text-white/70 lg:h-auto">
            [ Featured project image ]
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-brand-dark text-center text-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to build your vision?</h2>
          <p className="mt-3 text-slate-300">More than a detailer & engineer — we're your project partner.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact" className="rounded-md bg-brand-accent px-6 py-3 font-semibold">GET IN TOUCH</Link>
            <Link href="/services" className="rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* CAREERS BAND */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="flex h-72 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-400 lg:h-auto">
            [ Team photo ]
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Work with Barmeter</h2>
            <p className="mt-4 text-lg italic text-slate-700">
              "Positivity fuels productivity. When people feel valued, they bring their best — and that's what drives real success."
            </p>
            <Link href="/career" className="mt-6 inline-block rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white w-fit">
              View Current Openings
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What clients say</h2>
            <p className="mt-3 text-slate-600">Feedback from fabricators and general contractors we serve.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.by} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="text-3xl text-brand-accent">"</div>
                <p className="mt-2 text-slate-700">{t.quote}</p>
                <div className="mt-4 text-sm font-semibold text-slate-500">— {t.by}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH / CERTIFICATIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Software & Standards</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {techLogos.map((t) => (
              <div key={t} className="flex h-14 min-w-[110px] items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-600">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
