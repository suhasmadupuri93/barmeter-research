export default function CoursePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">SDS/2 Training</h1>
      <p className="mt-3 text-slate-600">
        Authorized Nemetschek training center. Hands-on workshops covering modeling, connections, drawings, and QA/QC,
        with real-world project simulations.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[
          { title: "Modeling Fundamentals", body: "Project setup, members, sheets, basic detailing." },
          { title: "Connection Design", body: "AISC connections in SDS/2; standard and custom." },
          { title: "Drawings & QA", body: "Erection drawings, gather sheets, checking workflow." },
          { title: "Capstone Project", body: "End-to-end simulation modeled on a real U.S. job." },
        ].map((m) => (
          <div key={m.title} className="rounded-lg border border-slate-200 p-6">
            <h2 className="font-semibold text-brand">{m.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
