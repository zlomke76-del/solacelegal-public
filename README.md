# SolaceLegal Public

**AI Legal Decision Control**  
If a legal action cannot be justified, it does not happen.

SolaceLegal is a public-facing site and documentation surface for a governed legal decision-control layer. It explains the boundary where legal outputs become consequence-bearing actions.

## What this public version is

This repository is a sanitized public presentation layer for SolaceLegal:

- marketing and positioning pages
- public architecture language
- execution-admissibility framing
- refusal/escalation model documentation
- enterprise deployment posture

## What this public version is not

This repository intentionally does **not** include:

- runtime enforcement logic
- model orchestration
- API keys or secrets
- Supabase integrations
- customer data handling
- document upload/parsing routes
- private studio execution routes
- legal advice delivery

## Core position

Most legal AI systems optimize for better answers. SolaceLegal governs whether a legal action is allowed to become real.

The system is built around a single boundary:

> Legal consequence only proceeds when the current state can justify it.

If facts, authority, jurisdiction, role, or review posture are insufficient, the correct system behavior is denial, state request, constraint, or escalation.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deployment

This project is designed for Vercel or any compatible Next.js host.

## License

Apache License 2.0. See `LICENSE`.
