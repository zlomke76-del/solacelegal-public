import type { Metadata } from "next";
import { Card, Hero, PageShell, Section } from "../solacelegal/_components";

export const metadata: Metadata = { title: "FAQ", description: "Frequently asked questions about SolaceLegal." };

const faqs = [
  ["Is SolaceLegal a legal advice chatbot?", "No. The public-facing system explains a governed decision boundary. It does not provide legal advice."],
  ["Does this public repo include the runtime?", "No. Runtime enforcement, integrations, model orchestration, state storage, and operational policy remain private and deployment-specific."],
  ["What does SolaceLegal control?", "It controls whether consequence-bearing legal action may proceed under the current state, authority, jurisdiction, and review posture."],
  ["What happens when support is insufficient?", "The correct posture is denial, state request, constraint, or escalation—not a confident best guess."],
];

export default function FaqPage() {
  return (
    <PageShell>
      <Hero eyebrow="FAQ" title="SolaceLegal governs legal consequence, not conversation." subtitle="The core question is not whether an answer sounds plausible. It is whether action is admissible right now." />
      <Section title="Common questions" muted>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map(([title, text]) => <Card key={title} title={title}>{text}</Card>)}
        </div>
      </Section>
    </PageShell>
  );
}
