import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solacelegal/execution-admissibility", label: "Admissibility" },
  { href: "/solacelegal/how-it-works", label: "How it works" },
  { href: "/solacelegal/enterprise", label: "Enterprise" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#f7f7f5]/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center border border-slate-300 bg-white text-sm font-bold tracking-[0.12em] text-slate-800 shadow-sm">S</div>
          <div>
            <div className="text-sm font-semibold tracking-[0.08em] text-slate-900">SolaceLegal</div>
            <div className="text-[11px] text-slate-500">Governed Legal Decision Layer</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition duration-200 hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <SiteHeader />
      {children}
      <Footer />
    </main>
  );
}

export function Hero({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f7f5]">
      <div className="pointer-events-none absolute inset-0">
        <img src="/image/image_library_01.png" alt="" className="absolute inset-0 h-full w-full scale-[1.04] object-cover grayscale opacity-[0.12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.66),transparent_36%),linear-gradient(180deg,rgba(247,247,245,0.70)_0%,rgba(247,247,245,0.88)_58%,rgba(247,247,245,0.96)_100%)]" />
        <div className="solace-orb absolute left-[6%] top-[14%] h-56 w-56 rounded-full bg-gradient-to-br from-slate-200/80 to-white/10 blur-3xl" />
        <div className="solace-orb absolute bottom-[12%] right-[8%] h-72 w-72 rounded-full bg-gradient-to-br from-slate-200/80 to-white/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="solace-reveal max-w-5xl">
          <div className="mb-5 inline-flex items-center gap-3 border border-slate-300 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur-sm">{eyebrow}</div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">{subtitle}</p>
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, children, muted = false }: { eyebrow?: string; title: string; children: ReactNode; muted?: boolean }) {
  return (
    <section className={["border-b border-slate-200 py-20 sm:py-24", muted ? "bg-white" : "bg-[#f7f7f5]"].join(" ")}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="solace-reveal max-w-3xl">
          {eyebrow ? <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{eyebrow}</div> : null}
          <h2 className="text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">{title}</h2>
        </div>
        <div className="solace-reveal-delay mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Card({ title, children, tone = "neutral" }: { title: string; children: ReactNode; tone?: "neutral" | "dark" | "good" | "warning" }) {
  const classes = {
    neutral: "border-slate-300 bg-white text-slate-700",
    dark: "border-slate-900 bg-slate-950 text-slate-200",
    good: "border-emerald-200 bg-emerald-50 text-slate-800",
    warning: "border-amber-300 bg-amber-50 text-slate-800",
  };
  return (
    <div className={["border p-6 shadow-sm", classes[tone]].join(" ")}>
      <h3 className={["text-lg font-semibold", tone === "dark" ? "text-white" : "text-slate-950"].join(" ")}>{title}</h3>
      <div className="mt-4 text-sm leading-7">{children}</div>
    </div>
  );
}

export function CtaRow() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href="/contact" className="inline-flex items-center justify-center border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-semibold tracking-[0.04em] text-white transition hover:-translate-y-0.5 hover:bg-slate-800">Request access</a>
      <a href="/solacelegal/how-it-works" className="inline-flex items-center justify-center border border-slate-400 bg-white/90 px-5 py-3 text-sm font-semibold tracking-[0.04em] text-slate-900 transition hover:-translate-y-0.5 hover:bg-white">How it works</a>
    </div>
  );
}

export function LinkGrid() {
  const links = [
    { href: "/solacelegal/execution-admissibility", title: "Execution Admissibility", text: "Why legal correctness is not enough." },
    { href: "/solacelegal/how-it-works", title: "How It Works", text: "State, authority, and execution gating." },
    { href: "/solacelegal/why-legal-ai-fails", title: "Why Legal AI Fails", text: "The failure is execution, not intelligence." },
    { href: "/solacelegal/refusal-system", title: "Refusal System", text: "When the state is insufficient, nothing happens." },
    { href: "/solacelegal/enterprise", title: "Enterprise", text: "Built for regulated legal environments." },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {links.map((item) => (
        <a key={item.href} href={item.href} className="group border border-slate-300 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md">
          <div className="text-lg font-semibold text-slate-950">{item.title}</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          <div className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 group-hover:text-slate-900">Read more</div>
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-sm text-slate-500">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="font-medium text-slate-800">SolaceLegal by Moral Clarity AI</div>
          <div className="mt-1">Governance infrastructure for consequence-bearing legal workflows.</div>
        </div>
        <div className="flex gap-5">
          <a href="/faq" className="hover:text-slate-950">FAQ</a>
          <a href="/contact" className="hover:text-slate-950">Contact</a>
        </div>
      </div>
    </footer>
  );
}
