import Nav from "./components/Nav";
import PipelineDiagram from "./components/PipelineDiagram";
import ProjectCard from "./components/ProjectCard";
import SectionHeader from "./components/SectionHeader";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowDownIcon,
  CheckIcon,
} from "./components/Icons";

// ─── Architecture diagram for E-Commerce (used in expandable section) ────────
function EcommerceArchDiagram() {
  const layers = [
    { label: "React Frontend", note: "MUI, Redux Toolkit" },
    { label: "Strapi CMS", note: "Content & product layer" },
    { label: "MySQL", note: "Orders, auth, inventory" },
    { label: "Stripe", note: "Checkout processing" },
  ];
  return (
    <div className="flex flex-col gap-0 items-start w-full max-w-sm">
      {layers.map((layer, i) => (
        <div key={layer.label} className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-current/40 shrink-0" />
            <div>
              <span className="font-body text-xs font-medium">{layer.label}</span>
              <span className="font-body text-xs opacity-60 ml-2">— {layer.note}</span>
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="ml-[3.5px] h-5 w-px border-l border-dashed border-current/25" />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Architecture diagram for 79 Nails & Hair (used in expandable section) ──
function SalonArchDiagram() {
  const layers = [
    { label: "Next.js 16 (App Router)", note: "Server Actions, RSC, Zod-validated input" },
    { label: "Postgres RLS + Rate Limiting", note: "Auth-scoped policies, SECURITY DEFINER functions" },
    { label: "Supabase (Postgres, Auth)", note: "EXCLUDE constraint prevents double-booking" },
    { label: "Sentry + GitHub Actions CI", note: "Error tracking, lint/typecheck/test/build gate" },
  ];
  return (
    <div className="flex flex-col gap-0 items-start w-full max-w-sm">
      {layers.map((layer, i) => (
        <div key={layer.label} className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-current/40 shrink-0" />
            <div>
              <span className="font-body text-xs font-medium">{layer.label}</span>
              <span className="font-body text-xs opacity-60 ml-2">— {layer.note}</span>
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="ml-[3.5px] h-5 w-px border-l border-dashed border-current/25" />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Architecture diagram for Turn Rotation (used in expandable section) ────
function TurnRotationArchDiagram() {
  const layers = [
    { label: "Next.js (App Router)", note: "Server Actions, instrumentation hooks" },
    { label: "Atomic Postgres functions", note: "Rotation fairness, optimistic concurrency" },
    { label: "Supabase (Postgres, RLS, Auth, Realtime)", note: "Partial unique indexes prevent double-booking staff" },
    { label: "AWS Amplify + Amazon Textract", note: "Manager-reviewed menu import" },
    { label: "Sentry + GitHub Actions CI", note: "Source-mapped error tracking, integration tests against real Postgres" },
  ];
  return (
    <div className="flex flex-col gap-0 items-start w-full max-w-sm">
      {layers.map((layer, i) => (
        <div key={layer.label} className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-current/40 shrink-0" />
            <div>
              <span className="font-body text-xs font-medium">{layer.label}</span>
              <span className="font-body text-xs opacity-60 ml-2">— {layer.note}</span>
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="ml-[3.5px] h-5 w-px border-l border-dashed border-current/25" />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Project data ─────────────────────────────────────────────────────────────
const projects = [
  {
    rank: 1,
    title: "79 Nails & Hair — Production Booking Platform",
    type: "Personal" as const,
    media: {
      type: "gif" as const,
      src: "/projects/79-nails-and-hair/demo.gif",
      alt: "Walkthrough of the live 79 Nails & Hair booking flow — selecting a service, choosing a stylist, and picking a real available time slot",
    },
    oneLiner:
      "A live booking platform for the salon I work at — real-time availability, a staff admin console, an AI-powered natural-language service search, and a full production-engineering pass most portfolio projects skip: database-enforced correctness, Row Level Security, CI, input validation, rate limiting, and error tracking, all verified against the real deployment.",
    bullets: [
      "No-double-booking guaranteed at the database level via a Postgres exclusion constraint — not an app-level check that a race condition could slip past",
      "Full hardening pass: RLS on every table, CI (lint/typecheck/test/build) on every push, Zod-validated Server Actions, rate limiting, and Sentry error tracking",
      "Schema fully version-controlled across 18 tracked migrations; found and fixed a real stored-HTML-injection bug in outbound emails along the way",
      "Added a Claude-powered natural-language service search — customers describe what they want in plain English, and every returned match is re-validated against the real catalog before it reaches a customer, so a hallucinated service can never be shown",
      "41 real services across 3 categories, 7 staff members, 26 automated tests, and a 100/100 Lighthouse score for accessibility, best practices, and SEO (81 performance) on the live deployment",
    ],
    problem:
      "The salon needed real online booking — not a mockup — with the non-negotiables any production booking system has: no double-booked stylists, no exposed customer data, and no silent failures once it's live.",
    contribution:
      "Entire project — schema design, the booking wizard and staff admin console (live rotation queue, walk-in check-in, review moderation), an AI-powered natural-language service search, and a full pass of production-hardening work: tracked database migrations, CI, input validation at the Server Action trust boundary, rate limiting, and error tracking, each verified against the real deployed app rather than assumed to work.",
    tech: [
      { label: "Next.js 16" },
      { label: "Supabase (Postgres, RLS, Auth)" },
      { label: "Anthropic Claude API" },
      { label: "Zod" },
      { label: "Vitest" },
      { label: "Sentry" },
      { label: "Tailwind CSS" },
      { label: "GitHub Actions" },
      { label: "Vercel" },
    ],
    challenges:
      "Most course/tutorial projects stop at 'it works on my machine.' The real work was guaranteeing no-double-booking under concurrent requests (solved at the database level, not in application code), designing an authorization model where every table's access rules are enforced by Postgres itself rather than scattered route-handler checks, catching a real stored-HTML-injection vulnerability in outbound confirmation emails before it shipped, and making an AI feature trustworthy rather than just impressive in a demo — the model routinely wrapped its JSON in a markdown fence despite instructions not to, and returned far more loosely-relevant matches than useful, both caught and fixed during testing.",
    solution:
      "Booking correctness is enforced by a Postgres EXCLUDE constraint on a computed time-range column, so a race condition cannot double-book a stylist. Every table has Row Level Security policies scoped to public vs. authenticated roles. Server Actions validate input with Zod before touching the database. A SECURITY DEFINER Postgres function rate-limits the two public write endpoints. Sentry is wired through error boundaries and Next.js instrumentation hooks for real production visibility. All 18 schema migrations are tracked in version control, and CI gates every push to main. The natural-language search sends the real service catalog to Claude and asks it to select from real ids only — the response is then re-validated in code against that same catalog, so any hallucinated or malformed id is silently dropped before a customer ever sees it, and the UI falls back to normal category browsing if the model call fails.",
    results:
      "Deployed and live at the production URL — 41 real services across 3 categories, 7 staff members, 26 automated tests, and a 100/100 Lighthouse score for accessibility, best practices, and SEO (81 performance). CI green across 18+ production deployments. Verified end-to-end in production, not just locally: deployed a forced error to a live preview and confirmed it landed in Sentry before calling the work done, mutation-tested the unit test suite — deliberately broke the underlying logic, confirmed the tests failed, then reverted — and tested the AI search against the real deployed API key, confirming both a correct multi-match result and a clean empty result for a nonsense query. The online booking flow itself is an estimated 1–2 minutes end-to-end versus roughly 3–5 minutes for the prior phone-based process of coordinating availability, based on my own experience working at the salon; the site is fully live and functional, with customer adoption still ramping up.",
    demonstrates:
      "The difference between a project that works and one that's actually production-ready: correctness enforced at the right layer, security modeled as data-access rules instead of scattered checks, and a habit of verifying claims against the real system rather than trusting that a local run or a passing test means the work is finished. The AI search extends that same discipline to LLM features — grounded in real data, defended against hallucination in code rather than trusted blindly, and designed to degrade gracefully rather than break the page when the model call fails.",
    githubUrl: "https://github.com/finnnguyen/79-nails-and-hair-website",
    demoUrl: "https://79nailsandhair.vercel.app",
    archDiagram: <SalonArchDiagram />,
  },
  {
    rank: 2,
    title: "Turn Rotation — Salon Staff Rotation & Fairness Engine",
    type: "Personal" as const,
    media: {
      type: "gif" as const,
      src: "/projects/turn-rotation/demo.gif",
      alt: "Walkthrough of the real Turn Rotation manager dashboard — live rotation queue, fairness corrections, and staff/service management",
    },
    tryItYourself: {
      url: "https://main.d1fp0wl4mlqx0q.amplifyapp.com/login",
      email: "recruiter-demo@turnrotation.dev",
      password: "TurnRotationDemo2026!",
    },
    oneLiner:
      "A concurrency-safe salon operations platform that manages a live employee rotation queue — atomic Postgres functions guarantee fairness under concurrent requests, Row Level Security enforces authorization, and AWS Textract turns an uploaded price list into manager-reviewed catalog drafts.",
    bullets: [
      "Rotation fairness enforced inside atomic Postgres functions with optimistic concurrency — not application-level checks a race condition could slip past",
      "Real behavioral integration tests exercise the actual RPC path against local Postgres, verified via mutation testing; CI spins up Supabase in Docker to run them on every push",
      "AWS Amplify deployment with Amazon Textract-assisted menu import — nothing publishes to the catalog without manager review",
      "53 automated tests (45 unit, 3 real-Postgres integration, 5 Playwright/axe-core browser and accessibility, 0 violations found) and a 100/100 Lighthouse accessibility score on the live deployment",
      "Manually validated ~350 real rotation assignments (~50/day over a week) against the fairness rules — 98% correct; traced the 2% gap to two real bugs (mixed haircut+nail visits skipping the haircut queue, and closing a day never releasing an in-progress reservation), reproduced each with a failing test, fixed both, and shipped to production",
    ],
    problem:
      "Salon managers needed to run a fair, auditable walk-in queue across two independent rotations (a shared dollar rotation and a shared haircut rotation) without losing arrival order, qualifications, or partial credit — and staff needed to actually understand why they were or weren't assigned a customer.",
    contribution:
      "Entire project — schema design, the transactional rotation/assignment engine, the manager and staff dashboards, AWS Textract-assisted menu import with a mandatory human-review gate, and a full production-hardening pass: Sentry error tracking through Next.js instrumentation hooks, CI-gated accessibility scans, and behavioral integration tests against real Postgres, each verified against the real deployed app.",
    tech: [
      { label: "Next.js" },
      { label: "Supabase (Postgres, RLS, Auth, Realtime)" },
      { label: "AWS Amplify" },
      { label: "Amazon Textract" },
      { label: "Sentry" },
      { label: "Vitest" },
      { label: "Playwright / axe-core" },
      { label: "GitHub Actions" },
    ],
    challenges:
      "Guaranteeing fairness under concurrency — two managers confirming assignments on different devices at the same moment can't be allowed to corrupt the shared queue. Solved with atomic Postgres functions, optimistic concurrency via state versions, and partial unique indexes that make double-booking an employee a database constraint violation rather than a bug to catch in review. Also caught and fixed a real deployment bug during a Sentry integration pass: Next.js resolves instrumentation.ts and middleware.ts relative to the app directory, not the repo root, so both files were silently never running in production until moved. Manually testing ~350 real assignments over a week surfaced two subtler bugs, both about 2% of tested assignments: a visit combining a haircut with a nail service was only treated as haircut-rotation-relevant if every service in it was a haircut, so mixed visits silently fell back to master-queue ordering and could skip the correct next-in-line haircut candidate; separately, closing a workday never released an employee's reservation on an unresolved visit — since reservations are scoped by location and employee, not by workday, an employee could stay silently flagged as 'still with a customer' on every future day.",
    solution:
      "Fairness rules — dollar/haircut balance tracking, master and haircut rotation position changes, $30 full-turn completion — all live inside atomic Postgres functions (lock_and_increment_rotation, start_visit_services) rather than application code. Every state-changing RPC takes an expected state version and rejects stale writes. Row Level Security policies, not route-handler checks, enforce manager vs. staff access. AWS Textract extracts services from an uploaded price list into review-only drafts; nothing publishes without manager confirmation. CI runs lint/typecheck/unit tests/build on every push, plus a dedicated job that spins up local Supabase in Docker to lint the schema and run real integration tests against Postgres, plus a Playwright/axe-core accessibility scan.",
    results:
      "Deployed and verified end-to-end on AWS Amplify across 7+ production deployments: the production smoke test covered manager auth, workday/rotation operations, and the full private menu-upload flow — Textract detected 51 lines from a sample price list and created 41 editable drafts, none auto-published. 53 automated tests span unit, real-Postgres integration, and Playwright/axe-core browser and accessibility suites (0 accessibility violations detected), backed by a 100/100 Lighthouse accessibility score on the live deployment. Verified the integration test suite catches real regressions via mutation testing (deliberately broke the rotation logic, confirmed the test failed, reverted), and verified Sentry reaches production by forcing a real error and confirming it landed in the dashboard with resolved source maps. Beyond automated testing, manually validated ~350 real rotation assignments over a week (~50/day) against the fairness rules by hand — 98% correct on the first pass. The remaining 2% traced to two real bugs (mixed haircut+nail visits bypassing the haircut queue, and closing a day never releasing an unresolved reservation); wrote a failing test that reproduced each one against real Postgres, confirmed it failed on the original logic, fixed the underlying function, confirmed the test passed, shipped both fixes to production, and retroactively cleaned up the dangling reservations and visits the bug had already left behind in the live database.",
    demonstrates:
      "The same production bar as 79 Nails & Hair, applied to a more concurrency-sensitive domain: correctness enforced at the database layer, an AI-assisted feature with a mandatory human gate rather than blind automation, and the habit of verifying claims against the real deployed system — which is exactly how a real bug (silently broken auth middleware) got caught before it mattered instead of after.",
    githubUrl: "https://github.com/finnnguyen/turn-rotation",
    demoUrl: "https://main.d1fp0wl4mlqx0q.amplifyapp.com",
    archDiagram: <TurnRotationArchDiagram />,
  },
  {
    rank: 3,
    title: "Spam Tool Kit",
    type: "Team" as const,
    media: {
      type: "image" as const,
      src: "/projects/spam-tool-kit/screenshot.jpg",
      alt: "Spam Tool Kit GitHub repository page",
    },
    oneLiner:
      "A 4-module web app covering email spam detection (97.2% accuracy), SMS spam detection (99.28% accuracy), text analysis, and plagiarism checking — all in one Flask app.",
    bullets: [
      "SMS model: 99.28% accuracy, 100% precision, 97.24% F1-score on held-out test set",
      "Email model: 97.20% accuracy — accepts .txt and .eml file uploads",
      "4 modules: Email Spam, SMS Spam, Text Analysis, Plagiarism Detection",
    ],
    problem:
      "Build a multi-feature spam detection toolkit that goes beyond a single classifier — a working web app with real file upload, live text input, and structured output (confidence score, probability bars, risk category).",
    contribution:
      "Owned all technical implementation — model training pipeline, CountVectorizer feature engineering, Flask backend, and the full HTML/CSS/JS web interface across all four modules. Group project for CPSC 483 at Cal State Fullerton.",
    tech: [
      { label: "Python" },
      { label: "scikit-learn" },
      { label: "Flask" },
      { label: "CountVectorizer" },
      { label: "Naive Bayes" },
      { label: "pandas" },
      { label: "HTML / CSS / JS" },
    ],
    challenges:
      "Building 4 distinct modules into a single coherent app. Feature engineering for two different text domains — email and SMS have very different language patterns. Making outputs actionable with confidence scores and risk levels rather than just spam/not spam.",
    solution:
      "Separate Multinomial Naive Bayes models trained on domain-specific Kaggle datasets (email_spam.csv, sms_spam.csv) with 80/20 splits. CountVectorizer bag-of-words feature extraction. Plagiarism module uses Jaccard similarity. All four modules served through a single Flask app with a tabbed HTML/CSS/JS interface.",
    results:
      "SMS model: 99.28% accuracy, 100% precision, 94.63% recall, 97.24% F1-score. Email model: 97.20% accuracy. Inference under 1–2ms per message. Training under 1 second.",
    demonstrates:
      "Taking a multi-feature ML system from training to a working, user-facing product — not just the model, but the full pipeline including file handling, live inference, and structured UI output across four different tools.",
    githubUrl: "https://github.com/finnnguyen/AI-Spam_Detect",
  },
  {
    rank: 4,
    title: "Supervised Learning — House Price & Disease Prediction",
    type: "Personal" as const,
    oneLiner:
      "Regression and classification models for house price prediction and heart disease diagnosis, tuned from ~78% to 85% accuracy.",
    bullets: [
      "Compared multiple model families across two distinct prediction tasks",
      "Improved classification accuracy from ~78% to 85% through tuning",
      "Full evaluation suite: accuracy, confusion matrix, MAE, RMSE, R²",
    ],
    problem:
      "Compare model families and evaluate which performs best on two different prediction tasks — one regression (house prices), one classification (disease diagnosis).",
    contribution: "Entire project: data preparation, modeling, evaluation, and hyperparameter tuning.",
    tech: [
      { label: "Python" },
      { label: "scikit-learn" },
      { label: "pandas" },
      { label: "NumPy" },
    ],
    challenges:
      "Choosing the right evaluation metric per task (regression vs. classification) and avoiding overfitting during tuning. Feature selection decisions that actually improve generalization rather than just training performance.",
    solution:
      "Built multiple model types (linear regression, decision tree, random forest, logistic regression), evaluated using the appropriate metrics for each task, then applied feature selection and hyperparameter tuning to the best-performing classifier.",
    results:
      "Improved classification accuracy from ~78% to 85%. Both models evaluated rigorously using held-out test sets and proper metrics — not just training accuracy.",
    demonstrates:
      "Rigorous, metrics-driven ML practice. Not just 'trained a model,' but evaluated it honestly, identified what was limiting performance, and improved it systematically.",
    githubUrl: "https://github.com/finnnguyen",
  },
  {
    rank: 5,
    title: "DataChat — Natural Language CSV Queries",
    type: "Personal" as const,
    media: {
      type: "image" as const,
      src: "/projects/datachat/screenshot.jpg",
      alt: "DataChat GitHub repository page",
    },
    oneLiner:
      "Upload any CSV and ask questions in plain English — GPT-4o-mini converts the question to SQL, runs it against SQLite, and explains the result. Prompt-engineered from 66.7% to 100% accuracy across 12 labeled test cases.",
    bullets: [
      "Iterated prompts across 3 versions: 66.7% → 83.3% → 100% on a labeled eval suite",
      "Two-LLM-call pipeline: SQL generation + result explanation — keeps answers grounded in real query output",
      "Self-correction retry loop feeds SQL errors back to the model for automatic fix",
    ],
    problem:
      "People with data but no SQL skills can't get quick answers from their own spreadsheets without asking a developer. Build a tool that accepts any CSV, takes a plain-English question, and returns an accurate, readable answer.",
    contribution: "Entire project — prompt engineering, backend pipeline, safety layer, eval framework, and Flask web interface. Personal project for CPSC 254 at Cal State Fullerton.",
    tech: [
      { label: "Python" },
      { label: "Flask" },
      { label: "OpenAI GPT-4o-mini" },
      { label: "SQLite" },
      { label: "pandas" },
      { label: "matplotlib" },
      { label: "HTML / CSS / JS" },
    ],
    challenges:
      "Every CSV has different column names the model has never seen — one character off and the SQL fails. Phrases like 'per sale' or 'more than 3 times' map to different SQL patterns (AVG vs COUNT) that the model had to learn from examples. SQLite-specific syntax (e.g. HAVING COUNT(*)) also needed to be taught explicitly. Prompt injection via malicious CSV column names was a real safety risk.",
    solution:
      "Two-stage LLM pipeline: call 1 generates SQL from schema + question using few-shot examples; call 2 explains the real query results in plain English. Self-correction loop retries on SQL failure by feeding the error back to the model. Safety layer sanitizes column names before they enter the prompt and blocks any non-SELECT output. Prompt iterated across 3 versions using a 12-case eval suite to track accuracy.",
    results:
      "100% accuracy on all 12 labeled eval cases (filters, aggregations, GROUP BY, HAVING, date filters, safety prompts, out-of-scope questions). Prompt iterations documented: V1 66.7% → V2 83.3% → V3 100%. Inference under 1–2 seconds end-to-end.",
    demonstrates:
      "Real prompt engineering with measurable iteration — not just calling an API, but systematically improving it with an eval suite. Also shows full-stack AI app development: CSV processing, LLM orchestration, safety design, chart generation, and a working web interface.",
    githubUrl: "https://github.com/finnnguyen/datachat",
  },
  {
    rank: 6,
    title: "E-Commerce Platform (Zara-style)",
    type: "Team" as const,
    media: {
      type: "image" as const,
      src: "/projects/ecommerce/screenshot.jpg",
      alt: "Tied & True e-commerce storefront homepage",
    },
    oneLiner:
      "A full-stack e-commerce platform with Stripe checkout, CMS-managed product catalog, and order management — built and shipped by a 3-person team.",
    bullets: [
      "End-to-end system: React (Redux Toolkit, Material UI) frontend, Strapi headless CMS, MySQL database",
      "Covers authentication, Stripe checkout, and inventory/order management, with Jest + Supertest backend tests",
      "Deployed to production; currently resolving a post-deployment data-sync issue (documented openly in the repo)",
    ],
    problem:
      "Build a working online storefront with authentication, payments, and inventory management — not a mockup, a functioning system.",
    contribution:
      "Implemented secure user authentication, Stripe payment integration, and inventory/order management, with Jest + Supertest coverage on the order-management API. Configured and integrated Strapi CMS as the content/data layer connecting to MySQL, enabling structured content management independent of the codebase. Deployed to Vercel, performed performance optimization to improve load times and scalability, and am currently debugging a post-deployment data-sync issue between the CMS and database layer.",
    tech: [
      { label: "React" },
      { label: "Redux Toolkit" },
      { label: "Material UI" },
      { label: "Strapi" },
      { label: "MySQL" },
      { label: "Stripe" },
      { label: "Jest" },
      { label: "Vercel" },
    ],
    challenges:
      "Integrating a headless CMS with a relational database while keeping content editable independently of the codebase. Post-deployment, a data-sync issue emerged between the CMS and the database layer — currently being resolved.",
    solution:
      "React frontend (Redux Toolkit for state, Material UI for components) consuming a Strapi-managed content and product layer, backed by MySQL, with a dedicated auth and order-management flow. Architecture separates content concerns (Strapi) from transactional data (MySQL).",
    results:
      "Deployed to production on Vercel. A data-sync issue between the CMS and database emerged post-deployment and is actively being debugged — the live demo is currently unreliable, so the architecture diagram is the best way to see the design.",
    demonstrates:
      "Full-stack ownership across the entire layer cake, cross-functional teamwork, and the ability to debug real production issues — not just classroom code. Also demonstrates transparency: the known issue is documented in the README rather than hidden.",
    githubUrl: "https://github.com/br-zee/362-final-project",
    demoNote: "Live demo temporarily offline — data-sync issue in progress (see GitHub README).",
    archDiagram: <EcommerceArchDiagram />,
  },
  {
    rank: 7,
    title: "Deep Learning Image Classification",
    type: "Personal" as const,
    oneLiner:
      "CNN and transfer-learning models for image classification, reaching ~90% test accuracy by comparing architectures and regularization strategies.",
    bullets: [
      "~90% test accuracy with best-performing CNN architecture",
      "Compared MLP, CNN, and MobileNetV2 transfer learning head-to-head",
      "Applied multiple regularization strategies to prevent overfitting on a small dataset",
    ],
    problem:
      "Compare training from scratch vs. transfer learning on a small image dataset — not just which performs better, but understanding why.",
    contribution: "Entire project.",
    tech: [
      { label: "Python" },
      { label: "TensorFlow" },
      { label: "Keras" },
      { label: "MobileNetV2" },
      { label: "OpenCV" },
    ],
    challenges:
      "Preventing overfitting on a small dataset. Comparing architectures systematically rather than just trying things — controlling for variables like learning rate and augmentation to isolate the effect of architecture choice.",
    solution:
      "Built and compared MLP, CNN, and transfer-learning (MobileNetV2) models with multiple regularization strategies (dropout, data augmentation, early stopping). Tracked accuracy and loss curves across all runs to make the comparison meaningful.",
    results:
      "~90% test accuracy with the best-performing CNN. Transfer learning outperformed training from scratch, with the comparison documented clearly.",
    demonstrates:
      "Genuine deep learning fundamentals — not just calling a pretrained model, but understanding why transfer learning outperforms training from scratch on limited data, and being able to articulate that comparison.",
    githubUrl: "https://github.com/finnnguyen",
  },
];

// ─── Skills data ──────────────────────────────────────────────────────────────
// Card fills rotate through the fixed 5-color accent deck — one entry per
// Simple, uniform cards — no color-coding by category.
const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "C++", "C#"],
  },
  {
    category: "ML & Data",
    skills: [
      "scikit-learn",
      "TensorFlow / Keras",
      "pandas",
      "NumPy",
      "Matplotlib",
      "OpenCV",
      "CountVectorizer / NLP",
      "Anthropic Claude API",
      "OpenAI GPT-4o-mini",
    ],
  },
  {
    category: "Web & Backend",
    skills: [
      "React",
      "Redux Toolkit",
      "Material UI",
      "Flask",
      "FastAPI",
      "Strapi",
      "Next.js",
      "Supabase",
      "Zod",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "MySQL",
      "Git / GitHub",
      "GitHub Actions",
      "Docker",
      "Vercel",
      "AWS Amplify",
      "Amazon Textract",
      "Vitest",
      "Playwright",
      "Jest",
      "Sentry",
      "Stripe",
      "ffmpeg",
      "Jupyter Notebook",
    ],
  },
  {
    category: "Process",
    skills: [
      "Agile Unified Process (UP)",
      "Iterative Development (Inception–Transition)",
      "Team-Based Software Process",
    ],
  },
];

const coursework = [
  "Data Structures",
  "Algorithms Engineering",
  "Software Engineering",
  "System Design",
  "Operating Concepts",
];

const experienceTags = ["Operations", "Staff Management", "Customer Service", "Process Ownership"];

const resumeDownloads = [
  { label: "Software Engineer", file: "Finn-Nguyen-Resume-Software-Engineer.pdf" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="top"
        className="min-h-screen flex flex-col justify-center px-4 pt-24 pb-16 max-w-[1200px] mx-auto"
        aria-label="Introduction"
      >
        <div className="grid lg:grid-cols-[1fr_auto] gap-14 items-center">
          <div className="max-w-2xl">
            {/* Pills */}
            <div
              className="flex flex-wrap gap-2 mb-6 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
            >
              <span className="font-body text-xs px-3 py-1 rounded-full border border-border text-muted">
                Software Engineer
              </span>
              <span className="font-body text-xs px-3 py-1 rounded-full border border-border text-muted">
                Garden Grove, CA
              </span>
            </div>

            <p
              className="font-body text-[11px] tracking-[0.15em] text-muted uppercase mb-3 opacity-0 animate-[fadeUp_0.6s_ease-out_0.1s_forwards]"
            >
              Hello, I&apos;m
            </p>

            <h1
              className="font-heading font-semibold text-5xl sm:text-6xl lg:text-[58px] text-ink leading-[1.05] tracking-[-0.02em] mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_0.2s_forwards]"
            >
              Finn Nguyen.
            </h1>

            <p
              className="font-body font-medium text-lg sm:text-xl text-ink mb-4 leading-snug opacity-0 animate-[fadeUp_0.6s_ease-out_0.3s_forwards]"
            >
              Building full-stack and AI-powered applications
            </p>

            <p
              className="font-body text-base text-muted mb-8 leading-relaxed max-w-xl opacity-0 animate-[fadeUp_0.6s_ease-out_0.4s_forwards]"
            >
              Focused on end-to-end delivery — from data pipelines and model evaluation to
              shipped, deployed products.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-6 opacity-0 animate-[fadeUp_0.6s_ease-out_0.5s_forwards]"
            >
              <a
                href="/resumes/Finn-Nguyen-Resume-Software-Engineer.pdf"
                download
                className="font-body text-sm font-medium px-5 py-[7px] rounded-3xl bg-accent text-on-accent hover:bg-accent-hover transition-colors"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="font-body text-sm font-medium px-5 py-[7px] rounded-3xl border border-border text-ink hover:border-ink transition-colors"
              >
                Explore Projects
              </a>
            </div>

            {/* Social row */}
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-2 opacity-0 animate-[fadeUp_0.6s_ease-out_0.6s_forwards]"
            >
              <a
                href="https://www.linkedin.com/in/finn-nguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-sm text-muted hover:text-ink transition-colors"
              >
                <LinkedinIcon /> LinkedIn
              </a>
              <span className="text-border" aria-hidden>&middot;</span>
              <a
                href="https://github.com/finnnguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-sm text-muted hover:text-ink transition-colors"
              >
                <GithubIcon /> GitHub
              </a>
              <span className="text-border" aria-hidden>&middot;</span>
              <a
                href="mailto:Finnnguyen93@gmail.com"
                className="flex items-center gap-1.5 font-body text-sm text-muted hover:text-ink transition-colors"
              >
                <MailIcon className="w-4 h-4" /> Email
              </a>
            </div>
          </div>

          {/* Trending-topic-style card */}
          <div
            className="hidden lg:block opacity-0 animate-[fadeUp_0.6s_ease-out_0.35s_forwards]"
            aria-hidden
          >
            <div className="w-72 rounded-[4px] border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-accent" />
                </span>
                <span className="font-body text-xs text-muted">
                  Open to full-time roles
                </span>
              </div>

              <PipelineDiagram />

              <div className="mt-6 pt-5 border-t border-border space-y-2.5">
                <div className="flex justify-between font-body text-xs">
                  <span className="text-muted">Lighthouse a11y score</span>
                  <span className="text-ink font-medium">100/100</span>
                </div>
                <div className="flex justify-between font-body text-xs">
                  <span className="text-muted">Automated tests written</span>
                  <span className="text-ink font-medium">79+</span>
                </div>
                <div className="flex justify-between font-body text-xs">
                  <span className="text-muted">Production apps shipped</span>
                  <span className="text-ink font-medium">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex flex-col items-center gap-2 mt-16 mx-auto text-muted opacity-0 animate-[fadeUp_0.6s_ease-out_0.7s_forwards]">
          <span className="font-body text-xs uppercase tracking-wider">Scroll to explore</span>
          <span className="animate-[bounceSlow_2.2s_ease-in-out_infinite]">
            <ArrowDownIcon />
          </span>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-16 px-4 max-w-[1200px] mx-auto border-t border-border"
        aria-label="About"
      >
        <SectionHeader title="About" />
        <div className="max-w-2xl bg-card border border-border rounded-[4px] p-5 space-y-4">
          <p className="font-body text-ink leading-relaxed">
            I&apos;m a Computer Science graduate (Cal State Fullerton, May 2026) who likes finishing what I
            start — I&apos;ve taken two production systems (a salon booking platform and a staff rotation
            engine) all the way from schema design to a live deployment with database-enforced
            correctness, CI, and real monitoring, and I bring that same finish-it-properly habit to
            machine learning projects that go beyond training a model to actually improving and
            evaluating it.
          </p>
          <p className="font-body text-ink leading-relaxed">
            Before this, I spent two-plus years managing daily operations and customer service for a
            busy local business, which is where I actually learned to prioritize under pressure and
            communicate clearly — skills that show up in how I work now. This fall, I&apos;ll be joining
            a faculty-sponsored AI project, building a real system for a commercial real estate firm.
          </p>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────────────────── */}
      <section
        id="projects"
        className="py-16 px-4 max-w-[1200px] mx-auto border-t border-border"
        aria-label="Featured projects"
      >
        <SectionHeader
          title="Featured Projects"
          subtitle="Ranked by hiring value. Expand any card for the full technical breakdown."
        />

        <div className="grid gap-5 max-w-3xl">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="font-body text-xs text-muted uppercase tracking-wider mb-4">
            Also on GitHub
          </h3>
          <div className="bg-card border border-border rounded-[4px] p-5">
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <a
                href="https://github.com/finnnguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium text-ink underline underline-offset-2 hover:text-graphite"
              >
                GitHub Repository Data Analysis
              </a>
              <span className="font-body text-xs text-muted">Personal · Python, pandas, Matplotlib · 2026</span>
            </div>
            <p className="font-body text-sm text-muted">
              EDA across 215,000+ repositories — language trends, star/fork patterns, and AI-repo growth over time.
            </p>
          </div>
        </div>
      </section>

      {/* ── FACULTY PROJECT (UPCOMING) ───────────────────────────────────── */}
      <section
        id="faculty-project"
        className="py-16 px-4 max-w-[1200px] mx-auto border-t border-border"
        aria-label="Upcoming faculty-sponsored project"
      >
        <SectionHeader title="Upcoming" />

        <article
          className="border border-dashed border-border rounded-[4px] p-5 bg-card-alt max-w-2xl"
          aria-label="Faculty-Sponsored Applied AI Project — Starting Fall 2026"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h3 className="font-body font-semibold text-ink text-base">
              Faculty-Sponsored Applied AI Project
            </h3>
            <span className="font-body text-xs px-2.5 py-0.5 rounded-full border border-border text-muted bg-card">
              Fall 2026 &middot; Client Confirmed
            </span>
          </div>

          <p className="font-body text-ink text-sm leading-relaxed mb-3">
            Selected by a professor from my AI coursework to join a small team delivering a
            production AI system, pro bono, for a client the faculty sponsor sourced: a Senior VP
            at Colliers, one of the world&apos;s largest commercial real estate firms, who specializes
            in strategic real estate solutions for corporations and business owners and is looking
            to bring AI into that practice.
          </p>

          <p className="font-body text-ink text-sm leading-relaxed mb-4">
            Unlike a class project, this will be a real system scoped directly with the client,
            with recurring check-ins on Zoom and in person over the course of the semester.
          </p>

          <p className="font-body text-xs text-muted italic">
            Kickoff and scoping meetings are being scheduled for late September 2026 — details
            below will be updated once the project scope is finalized.
          </p>
        </article>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section
        id="skills"
        className="py-16 px-4 max-w-[1200px] mx-auto border-t border-border"
        aria-label="Technical skills"
      >
        <SectionHeader
          title="Technical Skills"
          subtitle="Tools I've used to build the projects above — not a wishlist."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-[4px] border border-border bg-card p-4"
            >
              <h3 className="font-body text-xs uppercase tracking-[0.08em] font-medium mb-3 text-muted">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-[11px] px-2.5 py-1 rounded-full bg-card-alt text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section
        id="experience"
        className="py-16 px-4 max-w-[1200px] mx-auto border-t border-border"
        aria-label="Work experience"
      >
        <SectionHeader title="Experience" />

        <div className="max-w-2xl bg-card border border-border rounded-[4px] p-5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <h3 className="font-body font-semibold text-ink">
              Manager
            </h3>
            <span className="font-body text-xs text-muted">Aug 2026 – Present</span>
          </div>
          <p className="font-body text-sm text-muted mb-4">
            79 Nails and Hair &middot; Promoted from Assistant Manager (2023 – Aug 2026)
          </p>
          <ul className="space-y-1.5 mb-5">
            <li className="font-body text-sm text-muted flex gap-2">
              <span className="text-ink"><CheckIcon /></span>
              <span>
                Run daily operations for a 7-person salon — staff rotation, scheduling, and cash
                reconciliation — reporting to the owner only 2–3x/week
              </span>
            </li>
            <li className="font-body text-sm text-muted flex gap-2">
              <span className="text-ink"><CheckIcon /></span>
              <span>
                Identified real scheduling and turn-fairness problems on the floor and built the
                booking platform and rotation engine featured above
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {experienceTags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[11px] px-2.5 py-1 rounded-full bg-card-alt text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────────────────── */}
      <section
        id="education"
        className="py-16 px-4 max-w-[1200px] mx-auto border-t border-border"
        aria-label="Education"
      >
        <SectionHeader title="Education" />

        <div className="max-w-2xl bg-card border border-border rounded-[4px] p-5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <h3 className="font-body font-semibold text-ink">
              B.S. Computer Science
            </h3>
            <span className="font-body text-xs text-muted">May 2026</span>
          </div>
          <p className="font-body text-sm text-muted mb-4">
            California State University, Fullerton
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="font-body text-xs px-2.5 py-1 rounded-full bg-card-alt text-ink">
              Dean&apos;s List — Fall 2025
            </span>
            <span className="font-body text-xs px-2.5 py-1 rounded-full bg-card-alt text-ink">
              Dean&apos;s List — Spring 2026
            </span>
          </div>
          <h4 className="font-body text-[11px] text-muted uppercase tracking-wider mb-2">
            Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="font-body text-[11px] px-2.5 py-1 rounded-full border border-border text-muted"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / FOOTER ─────────────────────────────────────────────── */}
      <footer
        id="contact"
        className="py-16 px-4 max-w-[1200px] mx-auto border-t border-border"
        aria-label="Contact and footer"
      >
        <SectionHeader
          title="Get in Touch"
          subtitle="Open to full-time roles in Software Engineering, Data, and AI/ML. Best reached by email."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="bg-card border border-border rounded-[4px] p-5">
            <h3 className="font-body font-semibold text-ink mb-1">
              Let&apos;s work together
            </h3>
            <p className="font-body text-sm text-muted mb-5">
              Best reached by email — I usually respond within a day.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Full-time Software Engineering roles",
                "Data / AI & ML roles",
                "Referrals and introductions",
              ].map((item) => (
                <li key={item} className="font-body text-sm text-ink flex gap-2">
                  <span className="text-muted" aria-hidden>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:Finnnguyen93@gmail.com"
                className="font-body text-sm font-medium px-5 py-[7px] rounded-3xl bg-accent text-on-accent hover:bg-accent-hover transition-colors"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/finn-nguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-sm font-medium px-5 py-[7px] rounded-3xl border border-border text-ink hover:border-ink transition-colors"
              >
                <LinkedinIcon /> LinkedIn
              </a>
              <a
                href="https://github.com/finnnguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-sm font-medium px-5 py-[7px] rounded-3xl border border-border text-ink hover:border-ink transition-colors"
              >
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-[4px] p-5">
            <h3 className="font-body font-semibold text-ink mb-1">
              Download Resume
            </h3>
            <p className="font-body text-sm text-muted mb-5">
              Tailored by role — pick the one closest to what you&apos;re hiring for.
            </p>
            <div className="flex flex-wrap gap-2">
              {resumeDownloads.map(({ label, file }) => (
                <a
                  key={file}
                  href={`/resumes/${file}`}
                  download
                  className="flex items-center gap-1.5 font-body text-sm px-4 py-2 rounded-full border border-border text-ink hover:border-ink transition-colors"
                >
                  <ArrowDownIcon className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-body text-xs text-muted">
            © {new Date().getFullYear()} Finn Nguyen
          </p>
          <p className="font-body text-xs text-muted">
            Built with Next.js + Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}
