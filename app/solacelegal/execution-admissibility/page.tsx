import type { Metadata } from "next";
import { Card, Hero, PageShell, Section } from "../_components";

export const metadata: Metadata = { title: "Execution Admissibility", description: "Execution admissibility asks whether a legal action can be justified at the exact moment it becomes real." };

export default function Page() {
  return (
    <PageShell>
      <Hero eyebrow="Execution Admissibility" title="A legal answer can be coherent and still be inadmissible." subtitle="SolaceLegal evaluates whether a legal action may become real under the current state, authority, jurisdiction, and consequence boundary." />
      <Section title="Correctness is not enough." muted>
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="The state may be incomplete">Missing facts can change the legal posture.</Card>
          <Card title="Authority may be stale">A source may be real but no longer applicable.</Card>
          <Card title="Jurisdiction may be wrong">The legal frame must match the actual matter.</Card>
          <Card title="The user may lack authority">Even a valid action may not be valid for this actor.</Card>
        </div>
      </Section>
      <Section title="The admissibility question is live.">
        <Card title="Can this action become real under the current legal state?" tone="dark">If no, the system blocks, requests more state, or escalates. It does not produce a best-guess legal consequence.</Card>
      </Section>
    </PageShell>
  );
}
