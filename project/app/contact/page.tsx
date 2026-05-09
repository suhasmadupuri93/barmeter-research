export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">Request a Quote</h1>
      <p className="mt-3 text-slate-600">Tell us about your project — tonnage, schedule, and scope.</p>
      <form className="mt-8 space-y-4">
        <Input label="Name" />
        <Input label="Email" type="email" />
        <Input label="Company" />
        <div>
          <label className="block text-sm font-medium text-slate-700">Project details</label>
          <textarea rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
        </div>
        <button type="submit" className="rounded-md bg-brand-accent px-6 py-3 font-semibold text-white">
          Send
        </button>
      </form>
    </div>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <input type={type} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
    </div>
  );
}
