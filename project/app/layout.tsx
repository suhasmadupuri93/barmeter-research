import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barmeter Clone — Steel Detailing & Engineering",
  description: "Marketing-site clone inspired by Barmeter Technologies. For learning purposes.",
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/career", label: "Career" },
  { href: "/course", label: "Course" },
  { href: "/contact", label: "Contact Us" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-brand">
              BARMETER<span className="text-brand-accent">.</span>
            </Link>
            <nav className="hidden gap-7 md:flex">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="text-sm font-medium text-slate-700 hover:text-brand">
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Social />
              <Link href="/contact" className="rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
                Request a Quote
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-brand-dark text-slate-200">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
            <div>
              <div className="text-xl font-extrabold text-white">
                BARMETER<span className="text-brand-accent">.</span>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Sequence-ready steel detailing, connection design, and BIM coordination.
              </p>
              <div className="mt-4"><Social /></div>
            </div>
            <div>
              <div className="font-semibold text-white">Explore</div>
              <ul className="mt-3 space-y-2 text-sm">
                {nav.map((n) => (
                  <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Contact</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>US: +1 (000) 000-0000</li>
                <li>India: +91 00000-00000</li>
                <li>services@example.com</li>
                <li>sales@example.com</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white">Get a quote</div>
              <p className="mt-3 text-sm text-slate-400">Tell us about tonnage, schedule, and scope.</p>
              <Link href="/contact" className="mt-4 inline-block rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-xs text-slate-400">
              <span>© {new Date().getFullYear()} Barmeter Clone. For learning. Not affiliated with Barmeter Technologies.</span>
              <span>Built with Next.js + Tailwind</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function Social() {
  return (
    <div className="flex items-center gap-2">
      <a aria-label="Instagram" href="#" className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-brand">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      </a>
      <a aria-label="LinkedIn" href="#" className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-brand">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.18c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.37 1.6-2.37 3.26V22H7.62V8z" />
        </svg>
      </a>
    </div>
  );
}
