import type { Metadata } from "next";
import { Card, CtaRow, Hero, PageShell, Section } from "../_components";

export const metadata: Metadata = { title: "Enterprise", description: "SolaceLegal is built for organizations that cannot afford unsupported legal action." };

export default function Page() {
  return (
    <PageShell>
      <Hero eyebrow="Enterprise" title="Built for organizations that cannot allow unsupported legal action." subtitle="SolaceLegal is designed for legal, compliance, HR, procurement, insurance, healthcare, finance, and regulated operational environments.">
        <CtaRow />
      </Hero>
      <Section title="Designed for high-consequence workflows." muted>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Legal teams">Preserve licensed authority and escalation boundaries.</Card>
          <Card title="Compliance teams">Prevent unsupported action before it enters operational workflow.</Card>
          <Card title="Enterprise AI">Add deterministic governance to probabilistic systems.</Card>
          <Card title="Regulated operations">Align action release with live state and authority.</Card>
        </div>
      </Section>
      <Section title="Deployment posture.">
        <div className="max-w-3xl text-base leading-8 text-slate-700">Public materials describe the boundary. Enterprise deployments require scoped jurisdiction, authority policy, review posture, integration mapping, logging, and governance controls.</div>
      </Section>
    </PageShell>
  );
}
