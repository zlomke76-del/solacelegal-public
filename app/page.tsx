import { Card, CtaRow, Hero, LinkGrid, PageShell, Section } from "./solacelegal/_components";

export default function HomePage() {
  return (
    <PageShell>
      <Hero
        eyebrow="AI Legal Decision Control"
        title="If a legal action can’t be justified, it doesn’t happen."
        subtitle="SolaceLegal is a governed decision-control layer for legal and compliance workflows where unsupported consequence is not an acceptable failure mode."
      >
        <div className="space-y-8">
          <div className="grid max-w-4xl gap-3 text-sm leading-7 text-slate-700 sm:grid-cols-3">
            <div className="border border-slate-300 bg-white/80 p-4">Stops unsupported legal actions.</div>
            <div className="border border-slate-300 bg-white/80 p-4">Requires current state and authority.</div>
            <div className="border border-slate-300 bg-white/80 p-4">Escalates when licensed review is required.</div>
          </div>
          <CtaRow />
        </div>
      </Hero>

      <Section title="SolaceLegal is not a legal assistant." muted>
        <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-700">
          <p>Traditional legal AI can analyze, summarize, draft, and recommend. Those capabilities are useful, but they do not solve the execution problem.</p>
          <p>SolaceLegal governs the boundary where legal outputs become consequence-bearing actions. If the record, authority, jurisdiction, or review posture cannot justify the action, the action is held.</p>
        </div>
      </Section>

      <Section eyebrow="The boundary" title="Legal consequence only when the current state can support it.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card title="State sufficiency">The factual record must be complete enough to support the attempted action.</Card>
          <Card title="Jurisdictional validity">The applicable legal framework must be scoped before release.</Card>
          <Card title="Authority integrity">Sources and permissions must be real, applicable, and current.</Card>
          <Card title="Consequence alignment">The output must match the user’s role, authority, and operational constraints.</Card>
        </div>
      </Section>

      <Section eyebrow="Public posture" title="This public repo is the surface, not the runtime." muted>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="No runtime secrets">No API keys, private data, Supabase logic, or model orchestration are included.</Card>
          <Card title="No legal advice">The public site explains the governed boundary and does not provide legal counsel.</Card>
          <Card title="No exposed execution layer">Operational decisioning remains private and deployment-specific.</Card>
        </div>
      </Section>

      <Section eyebrow="Explore" title="Go deeper into the SolaceLegal model.">
        <LinkGrid />
      </Section>
    </PageShell>
  );
}
