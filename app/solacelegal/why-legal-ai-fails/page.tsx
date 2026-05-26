import type { Metadata } from "next";
import { Card, Hero, PageShell, Section } from "../_components";

export const metadata: Metadata = { title: "Why Legal AI Fails", description: "Most legal AI operates upstream. SolaceLegal governs the execution boundary where legal action becomes real." };

export default function Page() {
  return (
    <PageShell>
      <Hero eyebrow="Why Legal AI Fails" title="The failure is not always intelligence. The failure is release." subtitle="A system can generate a plausible legal answer and still allow the wrong action to happen." />
      <Section title="Most systems optimize upstream." muted>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Better answers">Useful, but insufficient for legal consequence.</Card>
          <Card title="Better citations">Important, but not proof that action is currently justified.</Card>
          <Card title="Better drafting">Helpful, but dangerous when the underlying state is wrong.</Card>
        </div>
      </Section>
      <Section title="SolaceLegal governs downstream.">
        <Card title="Traditional AI suggests. SolaceLegal governs." tone="good">The system evaluates admissibility, blocks unsupported execution, and preserves escalation when human legal authority is required.</Card>
      </Section>
    </PageShell>
  );
}
