# Canada Helicopter Pilot Exam — Practice Quiz

A client-side Next.js web application for practising the **Transport Canada Private and Commercial Pilot Licence (Helicopter)** sample examination.

All questions, answer options, and explanations are extracted verbatim from official Transport Canada publications:

- **Questions & Answers:** TP 13728E — *Sample Examination — Private and Commercial Pilot Licences (Helicopter)* (First Edition, October 2002)
- **Explanations:** TP 14371E — *TC Aeronautical Information Manual (AIM) 2025-2* (effective October 2, 2025)

No generated or paraphrased text is used. All wording comes directly from the source PDFs.

---

## Features

- 100 exam questions covering four sections:
  - Air Law
  - Navigation
  - Meteorology
  - Aeronautics — General Knowledge
- Three practice modes:
  - **Full Exam** — all questions in exam order
  - **Random Order** — all questions shuffled
  - **By Section** — practice one topic at a time
- Instant feedback: select an answer, click *Check Answer* to reveal the correct option and the official explanation
- Results screen with score summary and answer review
- Fully client-side — no backend, no database, no account required

---

## Project Structure

```
/
├── apps/
│   └── quiz/                    # Next.js quiz application
│       └── src/
│           ├── app/
│           │   ├── page.tsx     # Home / mode selection
│           │   └── quiz/
│           │       └── page.tsx # Quiz route (wraps QuizClient)
│           ├── components/
│           │   └── QuizClient.tsx   # Main interactive quiz component
│           └── data/
│               └── questions.ts     # Full question bank (100 questions)
├── packages/                    # Shared packages (for future backend/db)
├── package.json                 # Turborepo root
├── turbo.json                   # Turborepo pipeline config
└── pnpm-workspace.yaml          # pnpm workspace config
```

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 18 |
| pnpm | ≥ 9 |

Install pnpm globally if you don't have it:

```bash
npm install -g pnpm@9
```

---

## Local Development

```bash
# 1. Clone the repository
git clone <repo-url>
cd CanadaExams

# 2. Install all workspace dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

The app will be available at **http://localhost:3000**.

To run only the quiz app:

```bash
cd apps/quiz
pnpm dev
```

---

## Build for Production

```bash
# From the repo root (builds all apps via Turborepo)
pnpm build

# Or build only the quiz app
cd apps/quiz
pnpm build
pnpm start
```

---

## Deployment

### Vercel (recommended)

1. Push the repository to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Set the **Root Directory** to `apps/quiz`.
4. Vercel auto-detects Next.js — leave all other settings as defaults.
5. Click **Deploy**.

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
cd apps/quiz
vercel --prod
```

### Other platforms (static export or Node server)

The app is a standard Next.js app and can be deployed anywhere that supports Node.js 18+:

- **Railway / Render / Fly.io** — point to `apps/quiz`, set build command `pnpm build` and start command `pnpm start`.
- **Static export** — add `output: 'export'` to `apps/quiz/next.config.ts`, run `pnpm build`, then serve the generated `out/` directory with any static host (GitHub Pages, Netlify, Cloudflare Pages).

---

## Data Sources

| Document | Reference |
|----------|-----------|
| Sample Examination — Helicopter | Transport Canada TP 13728E, First Edition, October 2002 |
| Aeronautical Information Manual | Transport Canada TP 14371E, AIM 2025-2, effective October 2, 2025 |

Questions and answers are taken verbatim from TP 13728E. Explanations quote or paraphrase sections of the TC AIM. Section references (e.g. *RAC 2.7.3*) are included in each answer for further reading.

---

## Disclaimer

This application is an unofficial study aid. It is not affiliated with Transport Canada. Information may become obsolete. Always consult the current official Transport Canada publications before any actual flight examination or flight operation.
