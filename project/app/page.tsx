import Link from "next/link";

const services = [
  { title: "Structural Steel Detailing", body: "Shop drawings, erection drawings, CNC/KISS exports — sequence-ready." },
  { title: "Connection Design", body: "AISC-compliant, P.E. stamped connections for frames, lateral systems, stairs, trusses." },
  { title: "3D Modeling & BIM", body: "Clash-free models with erection-sequence visualization." },
  { title: "Estimating Support", body: "Takeoffs, tonnage, value engineering for competitive bids." },
  { title: "Erection Planning", body: "Sequence plans, temporary bracing, on-site support." },
  { title: "SDS/2 Training", body: "Hands-on workshops with real-world project simulations." },
];

export default function Home() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Sequence-ready steel detailing that eliminates rework.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            We bridge the gap between design intent and fabrication reality — shop drawings,
            connection design, and BIM coordination that ship on time.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className="rounded-md bg-brand-accent px-6 py-3 font-semibold hover:opacity-90">
              Request a Quote
            </Link>
            <Link href="/services" className="rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900">What we do</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          End-to-end steel detailing and connection engineering for fabricators, GCs, and architects.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border border-slate-200 p-6 hover:border-brand">
              <h3 className="text-lg font-semibold text-brand">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          <Stat label="U.S. states with licensed P.E.s" value="39+" />
          <Stat label="Years of leadership experience" value="20+" />
          <Stat label="Software platforms supported" value="7" />
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-4xl font-bold text-brand">{value}</div>
      <div className="mt-1 text-sm uppercase tracking-wide text-slate-600">{label}</div>
    </div>
  );
}
