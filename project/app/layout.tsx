import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barmeter Clone — Steel Detailing & Engineering",
  description:
    "Marketing-site clone inspired by Barmeter Technologies. For learning purposes.",
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/career", label: "Career" },
  { href: "/course", label: "Course" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold text-brand">
              BARMETER<span className="text-brand-accent">.clone</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="text-sm font-medium text-slate-700 hover:text-brand">
                  {n.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Request a Quote
            </Link>
          </div>
        </header>
        <main className="min-h-[70vh]">{children}</main>
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600">
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <div className="font-semibold text-slate-800">Barmeter Clone</div>
                <div>Marketing-site clone for learning. Not affiliated with Barmeter Technologies.</div>
              </div>
              <div className="text-right">
                <div>services@example.com</div>
                <div>+1 (000) 000-0000</div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
