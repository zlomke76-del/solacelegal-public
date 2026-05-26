import type { Metadata } from "next";
import { Card, Hero, PageShell, Section } from "../_components";

export const metadata: Metadata = { title: "Refusal System", description: "SolaceLegal refuses to release unsupported legal action when state, authority, or review conditions are insufficient." };

export default function Page() {
  return (
    <PageShell>
      <Hero eyebrow="Refusal System" title="Refusal is not failure. It is boundary preservation." subtitle="When legal state is insufficient, the correct behavior is not confidence. It is denial, state request, or escalation." />
      <Section title="The system refuses under insufficient support." muted>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Incomplete facts" tone="warning">The record cannot support the attempted legal consequence.</Card>
          <Card title="Invalid authority" tone="warning">The cited or relied-upon authority is absent, stale, or misapplied.</Card>
          <Card title="Jurisdiction mismatch" tone="warning">The legal frame does not match the matter.</Card>
          <Card title="Review required" tone="warning">Licensed human authority is required before release.</Card>
        </div>
      </Section>
      <Section title="What happens instead?">
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Request state">Ask for missing facts, documents, or posture.</Card>
          <Card title="Constrain output">Release only non-actionable, clearly bounded information.</Card>
          <Card title="Escalate">Route to human legal review when required.</Card>
        </div>
      </Section>
    </PageShell>
  );
}
