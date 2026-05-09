import Link from "next/link";

const services = [
  {
    title: "Structural Steel Detailing",
    bullets: [
      "Shop & erection drawings",
      "CNC / KISS exports",
      "ABM, bolt summaries, gather sheets",
      "IFC / RFI issue tracking",
      "Clash detection",
    ],
  },
  {
    title: "Connection Design & Engineering",
    bullets: [
      "P.E. licensed across 39+ U.S. states",
      "AISC-compliant per Steel Construction Manual",
      "Complex frames, lateral systems",
      "Seismic & wind connection solutions",
      "Structured RFI process",
    ],
  },
  {
    title: "Estimating Support",
    bullets: [
      "Material takeoffs",
      "Bid models",
      "Steel tonnage calculations",
      "Value-engineering recommendations",
      "Fast turnaround for competitive bidding",
    ],
  },
  {
    title: "3D Modeling & BIM Coordination",
    bullets: [
      "Connection-ready models",
      "Clash detection",
      "Erection sequencing visualization",
      "Advanced geometry — stairs, ladders, rails",
    ],
  },
  {
    title: "Connection Design Optimization",
    bullets: [
      "Shear, axial, moment, bracing, truss",
      "Standardized connection libraries",
      "Stair & rail design with RISA 3D",
      "AISC-compliant calculations",
    ],
  },
  {
    title: "Erection Planning Support",
    bullets: [
      "Sequence-ready erection plans",
      "Temporary bracing & stability guidance",
      "Piece-mark mapping, field bolt summaries",
      "On-site support during erection",
    ],
  },
  {
    title: "Authorized SDS/2 Training Partner",
    bullets: [
      "Certified hands-on workshops",
      "Industry-aligned curriculum",
      "Real-world project simulations",
      "Completion certificates",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-accent">What we do</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Services built around fabrication and field reality.</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">
            Helping fabricators, GCs, architects, and engineers compress timelines through accurate drawings,
            sound connections, and tight coordination.
          </p>
        </div>
      </section>

      {/* ALTERNATING SERVICE BLOCKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 space-y-16">
          {services.map((s, i) => (
            <div key={s.title} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
                  Service {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">{s.title}</h2>
                <ul className="mt-5 space-y-2 text-slate-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-block rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white">
                  Talk to Us
                </Link>
              </div>
              <div className={`flex h-72 items-center justify-center rounded-xl bg-gradient-to-br ${i % 2 === 0 ? "from-brand to-brand-dark" : "from-slate-200 to-slate-300"} text-sm font-medium ${i % 2 === 0 ? "text-white/70" : "text-slate-500"} ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                [ {s.title} ]
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-center text-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-3xl font-bold">Have a project ready?</h2>
          <p className="mt-3 text-slate-300">Send us scope, schedule, and tonnage — we'll come back with a proposal fast.</p>
          <Link href="/contact" className="mt-6 inline-block rounded-md bg-brand-accent px-6 py-3 font-semibold">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
