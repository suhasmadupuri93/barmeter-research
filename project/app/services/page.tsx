const services = [
  { title: "Structural Steel Detailing", body: "Shop drawings, erection drawings, CNC/KISS exports, ABM, bolt summaries. IFC/RFI tracking." },
  { title: "Connection Design & Engineering", body: "P.E.-stamped in 39+ U.S. states. AISC-compliant. Frames, lateral systems, seismic/wind." },
  { title: "Estimating Support", body: "Takeoffs, bid models, tonnage, value engineering." },
  { title: "3D Modeling & BIM Coordination", body: "Clash-free models, erection-sequence visualization, complex geometry." },
  { title: "Connection Design Optimization", body: "Shear, axial, moment, bracing, truss connections; stair & rail design with RISA 3D." },
  { title: "Erection Planning Support", body: "Sequence-ready plans, temporary bracing, on-site support." },
  { title: "SDS/2 Training", body: "Hands-on workshops via Nemetschek partnership; modeling, connections, drawings, QA/QC." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Services</h1>
      <p className="mt-3 text-slate-600">End-to-end steel detailing, engineering, coordination, and training.</p>
      <div className="mt-10 space-y-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-brand">{s.title}</h2>
            <p className="mt-2 text-slate-700">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
