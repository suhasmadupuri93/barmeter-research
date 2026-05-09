const roles = [
  { title: "Senior Modeler SDS/2", exp: "5–7 yrs", loc: "Hyderabad / Bangalore" },
  { title: "Modeler SDS/2", exp: "4–5 yrs", loc: "Hyderabad / Bangalore" },
  { title: "Senior Checker SDS/2", exp: "5–7 yrs", loc: "Hyderabad / Bangalore" },
  { title: "Checker SDS/2", exp: "4–5 yrs", loc: "Hyderabad / Bangalore" },
];

export default function CareerPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Careers</h1>
      <p className="mt-3 text-slate-600">Join a team working on U.S. projects with modern tooling and clear growth paths.</p>
      <div className="mt-10 divide-y divide-slate-200 rounded-lg border border-slate-200">
        {roles.map((r) => (
          <div key={r.title} className="flex items-center justify-between p-5">
            <div>
              <div className="font-semibold text-brand">{r.title}</div>
              <div className="text-sm text-slate-500">{r.loc} · {r.exp}</div>
            </div>
            <button className="rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}
