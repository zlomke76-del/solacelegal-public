import type { Metadata } from "next";
import { Card, Hero, PageShell, Section } from "../solacelegal/_components";

export const metadata: Metadata = { title: "Contact", description: "Request access or discuss SolaceLegal deployment." };

export default function ContactPage() {
  return (
    <PageShell>
      <Hero eyebrow="Contact" title="Request access to SolaceLegal." subtitle="For enterprise deployment, legal workflow governance, or implementation discussions, contact Moral Clarity AI." />
      <Section title="Deployment conversations start with the boundary." muted>
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Workflow">What legal or compliance action is being controlled?</Card>
          <Card title="Authority">Who is allowed to approve, release, or escalate?</Card>
          <Card title="State">What facts, records, and documents must exist before consequence?</Card>
        </div>
        <div className="mt-10 border border-slate-300 bg-white p-6 text-sm leading-7 text-slate-700">
          <p className="font-semibold text-slate-950">Public repo note</p>
          <p className="mt-2">This public version intentionally does not include form submission APIs, private runtime routes, Supabase integration, model orchestration, or customer data handling.</p>
          <p className="mt-4">Replace this section with your preferred contact form, CRM embed, or mail link when deploying publicly.</p>
        </div>
      </Section>
    </PageShell>
  );
}
