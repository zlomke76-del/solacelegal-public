import type { Metadata } from "next";
import { Card, Hero, PageShell, Section } from "../_components";

export const metadata: Metadata = { title: "How SolaceLegal Works", description: "SolaceLegal assembles state, evaluates admissibility, and blocks legal execution when support is insufficient." };

export default function Page() {
  return (
    <PageShell>
      <Hero eyebrow="How It Works" title="State first. Authority second. Execution last." subtitle="SolaceLegal keeps legal action behind a governed boundary until the record can justify release." />
      <Section title="The public model." muted>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card title="1. Declare the action">The attempted legal action is structured before it is evaluated.</Card>
          <Card title="2. Assemble state">Facts, documents, jurisdiction, role, and procedural posture are identified.</Card>
          <Card title="3. Evaluate authority">Authority, permissions, source validity, and review requirements are checked.</Card>
          <Card title="4. Govern release">The system permits, constrains, blocks, or escalates.</Card>
        </div>
      </Section>
      <Section title="No degraded legal output.">
        <div className="max-w-3xl text-base leading-8 text-slate-700">When required support is absent, the system preserves the boundary. It does not hide uncertainty inside polished legal language.</div>
      </Section>
    </PageShell>
  );
}
