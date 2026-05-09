const projects = [
  { name: "ClearSky Rehabilitation Hospital", location: "Texas", sector: "Healthcare" },
  { name: "Texas A&M Commerce Building", location: "Texas", sector: "Education" },
  { name: "PepsiCo Facility", location: "Plano, TX", sector: "Industrial" },
  { name: "Tribal Center Project", location: "Oklahoma", sector: "Civic" },
  { name: "Mixed-Use Development", location: "California", sector: "Commercial" },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Projects</h1>
      <p className="mt-3 text-slate-600">A selection of work across healthcare, education, industrial, and civic sectors.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.name} className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-brand">{p.name}</h2>
            <div className="mt-1 text-sm text-slate-500">{p.location} · {p.sector}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
