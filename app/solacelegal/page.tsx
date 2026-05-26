import type { Metadata } from "next";
import { Card, CtaRow, Hero, LinkGrid, PageShell, Section } from "./_components";

export const metadata: Metadata = {
  title: "AI Legal Decision Control",
  description: "SolaceLegal enforces execution admissibility in legal systems.",
  alternates: { canonical: "/solacelegal" },
};

export default function SolaceLegalPage() {
  return (
    <PageShell>
      <Hero eyebrow="AI Legal Decision Control" title="If a legal action can’t be justified, it doesn’t happen." subtitle="Legal execution only occurs when the current state can support it.">
        <CtaRow />
      </Hero>
      <Section title="SolaceLegal is not a legal assistant." muted>
        <div className="max-w-3xl text-base leading-8 text-slate-700">
          <p>It is a governed execution boundary. Traditional legal AI can analyze, summarize, and recommend. SolaceLegal determines whether anything is allowed to become operationally real.</p>
          <p className="mt-5">If the system cannot justify the action at the moment consequence forms, it blocks, requests more state, or routes to licensed review.</p>
        </div>
      </Section>
      <Section eyebrow="What this system does" title="It controls consequence-bearing legal action.">
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Prevents unsupported legal actions">Actions are held when facts, documents, authority, or procedural posture do not support execution.</Card>
          <Card title="Blocks execution under incomplete state">The system does not proceed with warnings, assumptions, or degraded confidence.</Card>
          <Card title="Requires authority before consequence">Execution-level legal actions require authority-bearing state before release.</Card>
          <Card title="Enforces escalation when required">When licensed review or human authority is required, the system resolves to escalation rather than action.</Card>
        </div>
      </Section>
      <Section eyebrow="System states" title="The decision posture is explicit." muted>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {[["READY", "Action is admissible."], ["CONDITIONAL", "Action is constrained and requires validation."], ["MORE STATE NEEDED", "The record is insufficient."], ["LICENSED REVIEW REQUIRED", "Human legal authority is required."], ["EXECUTION DENIED", "The action cannot occur."]].map(([title, text]) => <Card key={title} title={title}>{text}</Card>)}
        </div>
      </Section>
      <Section eyebrow="Legal authority surface" title="Go deeper into the SolaceLegal model.">
        <LinkGrid />
      </Section>
    </PageShell>
  );
}
