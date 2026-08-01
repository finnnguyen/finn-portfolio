import Nav from "./components/Nav";
import PipelineDiagram from "./components/PipelineDiagram";
import ProjectCard from "./components/ProjectCard";

// ─── Architecture diagram for E-Commerce (used in expandable section) ────────
function EcommerceArchDiagram() {
  const layers = [
    { label: "React Frontend", note: "UI, routing, state" },
    { label: "Strapi CMS", note: "Content & product layer" },
    { label: "SQL Server", note: "Orders, auth, inventory" },
    { label: "Payment Gateway API", note: "Checkout processing" },
  ];
  return (
    <div className="flex flex-col gap-0 items-start w-full max-w-sm">
      {layers.map((layer, i) => (
        <div key={layer.label} className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#1F3864]/50 shrink-0" />
            <div>
              <span className="font-mono text-xs text-[#1F3864] font-medium">{layer.label}</span>
              <span className="font-mono text-xs text-[#6b6560] ml-2">— {layer.note}</span>
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="ml-[3.5px] h-5 w-px border-l border-dashed border-[#1F3864]/30" />
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
            <div className="w-2 h-2 rounded-full bg-[#1F3864]/50 shrink-0" />
            <div>
              <span className="font-mono text-xs text-[#1F3864] font-medium">{layer.label}</span>
              <span className="font-mono text-xs text-[#6b6560] ml-2">— {layer.note}</span>
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="ml-[3.5px] h-5 w-px border-l border-dashed border-[#1F3864]/30" />
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
    oneLiner:
      "A live booking platform for the salon I work at — real-time availability, a staff admin console, and a full production-engineering pass most portfolio projects skip: database-enforced correctness, Row Level Security, CI, input validation, rate limiting, and error tracking, all verified against the real deployment.",
    bullets: [
      "No-double-booking guaranteed at the database level via a Postgres exclusion constraint — not an app-level check that a race condition could slip past",
      "Full hardening pass: RLS on every table, CI (lint/typecheck/test/build) on every push, Zod-validated Server Actions, rate limiting, and Sentry error tracking",
      "Schema fully version-controlled across 18 tracked migrations; found and fixed a real stored-HTML-injection bug in outbound emails along the way",
    ],
    problem:
      "The salon needed real online booking — not a mockup — with the non-negotiables any production booking system has: no double-booked stylists, no exposed customer data, and no silent failures once it's live.",
    contribution:
      "Entire project — schema design, the booking wizard and staff admin console (live rotation queue, walk-in check-in, review moderation), and a full pass of production-hardening work: tracked database migrations, CI, input validation at the Server Action trust boundary, rate limiting, and error tracking, each verified against the real deployed app rather than assumed to work.",
    tech: [
      { label: "Next.js 16" },
      { label: "Supabase (Postgres, RLS, Auth)" },
      { label: "Zod" },
      { label: "Vitest" },
      { label: "Sentry" },
      { label: "Tailwind CSS" },
      { label: "GitHub Actions" },
      { label: "Vercel" },
    ],
    challenges:
      "Most course/tutorial projects stop at 'it works on my machine.' The real work was guaranteeing no-double-booking under concurrent requests (solved at the database level, not in application code), designing an authorization model where every table's access rules are enforced by Postgres itself rather than scattered route-handler checks, and catching a real stored-HTML-injection vulnerability in outbound confirmation emails before it shipped.",
    solution:
      "Booking correctness is enforced by a Postgres EXCLUDE constraint on a computed time-range column, so a race condition cannot double-book a stylist. Every table has Row Level Security policies scoped to public vs. authenticated roles. Server Actions validate input with Zod before touching the database. A SECURITY DEFINER Postgres function rate-limits the two public write endpoints. Sentry is wired through error boundaries and Next.js instrumentation hooks for real production visibility. All 18 schema migrations are tracked in version control, and CI gates every push to main.",
    results:
      "Live and used for real bookings at the salon. CI green on every push. Verified end-to-end in production, not just locally: deployed a forced error to a live preview and confirmed it landed in Sentry before calling the work done, and mutation-tested the unit test suite — deliberately broke the underlying logic, confirmed the tests failed, then reverted — rather than shipping tests that just pass trivially.",
    demonstrates:
      "The difference between a project that works and one that's actually production-ready: correctness enforced at the right layer, security modeled as data-access rules instead of scattered checks, and a habit of verifying claims against the real system rather than trusting that a local run or a passing test means the work is finished.",
    githubUrl: "https://github.com/finnnguyen/79-nails-and-hair-website",
    demoUrl: "https://79nailsandhair.vercel.app",
    archDiagram: <SalonArchDiagram />,
  },
  {
    rank: 2,
    title: "Spam Tool Kit",
    type: "Team" as const,
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
    rank: 3,
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
    rank: 4,
    title: "DataChat — Natural Language CSV Queries",
    type: "Personal" as const,
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
    rank: 5,
    title: "E-Commerce Platform (Zara-style)",
    type: "Team" as const,
    oneLiner:
      "A full-stack e-commerce platform with secure checkout, CMS-managed product catalog, and order management — built and shipped by a 3-person team.",
    bullets: [
      "End-to-end system: React frontend, Strapi headless CMS, SQL Server database",
      "Covers authentication, payment flow, and inventory management",
      "Deployed to production; currently resolving a post-deployment data-sync issue (documented openly in the repo)",
    ],
    problem:
      "Build a working online storefront with authentication, payments, and inventory management — not a mockup, a functioning system.",
    contribution:
      "Implemented secure user authentication, third-party payment gateway integration, and inventory/order management. Configured and integrated Strapi CMS as the content/data layer connecting to SQL Server, enabling structured content management independent of the codebase. Deployed to Vercel, performed performance optimization to improve load times and scalability, and am currently debugging a post-deployment data-sync issue between the CMS and database layer.",
    tech: [
      { label: "React" },
      { label: "Strapi" },
      { label: "SQL Server" },
      { label: "Payment Gateway API" },
      { label: "Vercel" },
    ],
    challenges:
      "Integrating a headless CMS with a relational database while keeping content editable independently of the codebase. Post-deployment, a data-sync issue emerged between the CMS and the database layer — currently being resolved.",
    solution:
      "React frontend consuming a Strapi-managed content and product layer, backed by SQL Server, with a dedicated auth and order-management flow. Architecture separates content concerns (Strapi) from transactional data (SQL Server).",
    results:
      "Deployed to production on Vercel. A data-sync issue between the CMS and database emerged post-deployment and is actively being debugged — the live demo is currently unreliable, so the architecture diagram is the best way to see the design.",
    demonstrates:
      "Full-stack ownership across the entire layer cake, cross-functional teamwork, and the ability to debug real production issues — not just classroom code. Also demonstrates transparency: the known issue is documented in the README rather than hidden.",
    githubUrl: "https://github.com/finnnguyen",
    demoNote: "Live demo temporarily offline — data-sync issue in progress (see GitHub README).",
    archDiagram: <EcommerceArchDiagram />,
  },
  {
    rank: 6,
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
    ],
  },
  {
    category: "Web & Backend",
    skills: [
      "React",
      "Flask",
      "FastAPI",
      "Strapi",
      "Firebase",
      "Next.js",
      "Supabase",
      "Zod",
      "Tailwind CSS",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "SQL Server",
      "Git / GitHub",
      "GitHub Actions",
      "Vercel",
      "Vitest",
      "Sentry",
      "ffmpeg",
      "Jupyter Notebook",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#15181F]">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="top"
        className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 max-w-5xl mx-auto"
        aria-label="Introduction"
      >
        <div className="max-w-2xl">
          {/* Pipeline diagram */}
          <div
            className="mb-10 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
            style={{ animationDelay: "0ms" }}
          >
            <PipelineDiagram />
          </div>

          <h1
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-[#15181F] leading-tight tracking-tight mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_0.15s_forwards]"
          >
            Finn Nguyen
          </h1>

          <p
            className="font-heading font-medium text-xl sm:text-2xl text-[#1F3864] mb-4 leading-snug opacity-0 animate-[fadeUp_0.6s_ease-out_0.3s_forwards]"
          >
            Software Engineer building full-stack and AI-powered applications
          </p>

          <p
            className="font-body text-base sm:text-lg text-[#6b6560] mb-8 leading-relaxed max-w-xl opacity-0 animate-[fadeUp_0.6s_ease-out_0.45s_forwards]"
          >
            Focused on end-to-end delivery — from data pipelines and model evaluation to
            shipped, deployed products.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 opacity-0 animate-[fadeUp_0.6s_ease-out_0.6s_forwards]"
          >
            <a
              href="#projects"
              className="font-body text-sm font-medium px-5 py-2.5 bg-[#1F3864] text-white rounded hover:bg-[#162a4d] transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resumes/Finn-Nguyen-Resume-Software-Engineer.docx"
              download
              className="font-body text-sm font-medium px-5 py-2.5 border border-[#1F3864] text-[#1F3864] rounded hover:bg-[#1F3864] hover:text-white transition-colors"
            >
              Resume
            </a>
            <a
              href="https://github.com/finnnguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium px-5 py-2.5 border border-[#e2ddd6] text-[#15181F] rounded hover:border-[#15181F] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/finn-nguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-medium px-5 py-2.5 border border-[#e2ddd6] text-[#15181F] rounded hover:border-[#15181F] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-[#e2ddd6]"
        aria-label="About"
      >
        <h2 className="font-heading font-semibold text-2xl text-[#15181F] mb-6">
          About
        </h2>
        <div className="max-w-2xl space-y-4">
          <p className="font-body text-[#15181F] leading-relaxed">
            I&apos;m a Computer Science graduate (Cal State Fullerton, May 2026) who likes finishing what I
            start — from a team-built e-commerce platform with real checkout and CMS integration, to
            machine learning projects that go beyond training a model to actually improving and
            evaluating it.
          </p>
          <p className="font-body text-[#15181F] leading-relaxed">
            Before this, I spent two-plus years managing daily operations and customer service for a
            busy local business, which is where I actually learned to prioritize under pressure and
            communicate clearly — skills that show up in how I work now. This fall, I&apos;ll be joining
            a faculty-sponsored AI project building a real system for a local organization.
          </p>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────────────────── */}
      <section
        id="projects"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-[#e2ddd6]"
        aria-label="Featured projects"
      >
        <div className="mb-10">
          <h2 className="font-heading font-semibold text-2xl text-[#15181F] mb-2">
            Featured Projects
          </h2>
          <p className="font-body text-sm text-[#6b6560]">
            Ranked by hiring value. Expand any card for the full technical breakdown.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-8 pt-6 border-t border-[#e2ddd6]">
          <h3 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-4">
            Also on GitHub
          </h3>
          <ul className="space-y-4">
            <li>
              <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                <a
                  href="https://github.com/finnnguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-medium text-[#1F3864] underline underline-offset-2 hover:text-[#162a4d]"
                >
                  Music Mixer Platform
                </a>
                <span className="font-mono text-xs text-[#6b6560]">Team · React, FastAPI, Firebase, Demucs · 2025</span>
              </div>
              <p className="font-body text-sm text-[#6b6560]">
                Full-stack music-remixing app with AI-powered vocal/instrument separation (Demucs),
                Deezer API catalog search, and Firebase authentication — three external services integrated into one working product.
              </p>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                <a
                  href="https://github.com/finnnguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-medium text-[#1F3864] underline underline-offset-2 hover:text-[#162a4d]"
                >
                  GitHub Repository Data Analysis
                </a>
                <span className="font-mono text-xs text-[#6b6560]">Personal · Python, pandas, Matplotlib · 2026</span>
              </div>
              <p className="font-body text-sm text-[#6b6560]">
                EDA across 215,000+ repositories — language trends, star/fork patterns, and AI-repo growth over time.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ── FACULTY PROJECT (UPCOMING) ───────────────────────────────────── */}
      <section
        id="faculty-project"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-[#e2ddd6]"
        aria-label="Upcoming faculty-sponsored project"
      >
        <h2 className="font-heading font-semibold text-2xl text-[#15181F] mb-6">
          Upcoming
        </h2>

        <article
          className="border-2 border-dashed border-[#1F3864]/30 rounded-lg p-6 bg-[#1F3864]/3 max-w-2xl"
          aria-label="Faculty-Sponsored Applied AI Project — Starting Fall 2026"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h3 className="font-heading font-semibold text-[#15181F] text-lg">
              Faculty-Sponsored Applied AI Project
            </h3>
            <span className="font-mono text-xs px-2 py-0.5 rounded-full border border-[#1F3864]/30 text-[#1F3864] bg-[#1F3864]/5">
              Starting Fall 2026
            </span>
          </div>

          <p className="font-body text-[#15181F] text-sm leading-relaxed mb-3">
            Selected by a professor from my AI coursework to join a small team delivering a
            production AI system, pro bono, for a local organization (city government, university
            department, or local business — TBD). Over a 10-week build, I&apos;ll take ownership of
            ingestion pipelines, evaluation tooling, UI, and documentation, working under a senior
            engineer&apos;s review before anything ships.
          </p>

          <p className="font-body text-[#15181F] text-sm leading-relaxed mb-4">
            Unlike a class project, this will be a real system used by a real client, with recurring
            check-ins and a milestone demo.
          </p>

          <p className="font-body text-xs text-[#6b6560] italic">
            This engagement begins in September 2026 — details below reflect the current plan and
            will be updated once the project is underway.
          </p>
        </article>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section
        id="skills"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-[#e2ddd6]"
        aria-label="Technical skills"
      >
        <h2 className="font-heading font-semibold text-2xl text-[#15181F] mb-2">
          Technical Skills
        </h2>
        <p className="font-body text-sm text-[#6b6560] mb-8">
          Tools I&apos;ve used to build the projects above — not a wishlist.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-body text-sm text-[#15181F]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section
        id="experience"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-[#e2ddd6]"
        aria-label="Work experience"
      >
        <h2 className="font-heading font-semibold text-2xl text-[#15181F] mb-8">
          Experience
        </h2>

        <div className="max-w-2xl">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
            <h3 className="font-heading font-semibold text-[#15181F]">
              Assistant Manager
            </h3>
            <span className="font-mono text-xs text-[#6b6560]">2023 – Present</span>
          </div>
          <p className="font-body text-sm text-[#6b6560] mb-2">79 Nails and Hair</p>
          <p className="font-body text-sm text-[#15181F] leading-relaxed">
            Manage daily operations, staff scheduling, and customer service for a high-traffic
            business — the same prioritization and communication skills that carry into how I scope
            and ship technical work.
          </p>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────────────────────── */}
      <section
        id="education"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-[#e2ddd6]"
        aria-label="Education"
      >
        <h2 className="font-heading font-semibold text-2xl text-[#15181F] mb-8">
          Education
        </h2>

        <div className="max-w-2xl">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
            <h3 className="font-heading font-semibold text-[#15181F]">
              B.S. Computer Science
            </h3>
            <span className="font-mono text-xs text-[#6b6560]">May 2026</span>
          </div>
          <p className="font-body text-sm text-[#6b6560] mb-2">
            California State University, Fullerton
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#eaf3f1] text-[#2F6F62] border border-[#2F6F62]/20">
              Dean&apos;s List — Fall 2025
            </span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#eaf3f1] text-[#2F6F62] border border-[#2F6F62]/20">
              Dean&apos;s List — Spring 2026
            </span>
          </div>
          <p className="font-body text-sm text-[#6b6560] leading-relaxed">
            <span className="font-mono text-xs uppercase tracking-wider">Coursework</span>
            {" "}— Data Structures, Algorithms Engineering, Software Engineering, Machine Learning, Applied AI, Artificial Intelligence, System Design, Operating Concepts
          </p>
        </div>
      </section>

      {/* ── CONTACT / FOOTER ─────────────────────────────────────────────── */}
      <footer
        id="contact"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-[#e2ddd6]"
        aria-label="Contact and footer"
      >
        <h2 className="font-heading font-semibold text-2xl text-[#15181F] mb-3">
          Get in Touch
        </h2>
        <p className="font-body text-sm text-[#6b6560] mb-8 max-w-md">
          Open to full-time roles in Software Engineering, Data, and AI/ML. Best reached by email.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="mailto:Finnnguyen93@gmail.com"
            className="font-body text-sm font-medium px-5 py-2.5 bg-[#1F3864] text-white rounded hover:bg-[#162a4d] transition-colors"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/finn-nguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium px-5 py-2.5 border border-[#e2ddd6] text-[#15181F] rounded hover:border-[#15181F] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/finnnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium px-5 py-2.5 border border-[#e2ddd6] text-[#15181F] rounded hover:border-[#15181F] transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="mb-12">
          <h3 className="font-mono text-xs text-[#6b6560] uppercase tracking-wider mb-4">
            Download Resume
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Software Engineer", file: "Finn-Nguyen-Resume-Software-Engineer.docx" },
              { label: "Application Engineer", file: "Finn-Nguyen-Resume-Application-Engineer.docx" },
              { label: "AI / ML Engineer", file: "Finn-Nguyen-Resume-AI-ML-Engineer.docx" },
              { label: "Data Analyst", file: "Finn-Nguyen-Resume-Data-Analyst.docx" },
              { label: "Support Engineer", file: "Finn-Nguyen-Resume-Support-Engineer.docx" },
              { label: "Technical Support", file: "Finn-Nguyen-Resume-Technical-Support.docx" },
            ].map(({ label, file }) => (
              <a
                key={file}
                href={`/resumes/${file}`}
                download
                className="font-body text-sm px-4 py-2 border border-[#e2ddd6] text-[#15181F] rounded hover:border-[#1F3864] hover:text-[#1F3864] transition-colors"
              >
                {label} ↓
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#e2ddd6] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-mono text-xs text-[#6b6560]">
            © {new Date().getFullYear()} Finn Nguyen
          </p>
          <p className="font-mono text-xs text-[#6b6560]">
            Built with Next.js + Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}
