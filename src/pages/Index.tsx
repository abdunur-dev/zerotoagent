import { ArrowUpRight, Calendar, ChevronDown, ChevronUp, Code2, Cpu, ExternalLink, Globe2, MapPin, MonitorUp, QrCode, ShieldCheck, Sparkles, Trophy, Workflow } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import v0CreditQr from "@/assets/v0-credit-qr.svg";

type Card = { eyebrow: string; title: string; body: string };

const fundamentals: Card[] = [
  { eyebrow: "Goal", title: "From Prompt to Worker", body: "An agent is not just a chatbot. It receives a goal, reasons about the task, uses tools, and returns finished work." },
  { eyebrow: "Input", title: "Context First", body: "Good agents start with documents, user intent, product data, rules, constraints, and success criteria." },
  { eyebrow: "Output", title: "Useful Action", body: "The best result is not a long answer. It is a completed workflow, a decision, a file, an update, or a deployed change." },
  { eyebrow: "Mindset", title: "Small Autonomy", body: "Start with one repeatable task, make it reliable, then expand its permissions and tool access." },
];

const anatomy: Card[] = [
  { eyebrow: "01", title: "Model", body: "The reasoning layer that interprets goals, plans steps, and decides when to call tools." },
  { eyebrow: "02", title: "Tools", body: "Functions, APIs, databases, calendars, files, search, code, and MCP servers the agent can operate." },
  { eyebrow: "03", title: "Memory", body: "Durable context such as preferences, project facts, previous runs, and long-term task state." },
  { eyebrow: "04", title: "Guardrails", body: "Rules that limit risky behavior, validate outputs, and require human approval when needed." },
];

const buildPlan: Card[] = [
  { eyebrow: "Step 1", title: "Pick One Job", body: "Choose a painful workflow: triage support, research leads, summarize docs, schedule tasks, or generate reports." },
  { eyebrow: "Step 2", title: "Define Done", body: "Write the exact output format, required evidence, failure cases, and what the agent must never do." },
  { eyebrow: "Step 3", title: "Wire Tools", body: "Give the agent only the tools it needs. Every tool should have clear inputs, outputs, and permissions." },
  { eyebrow: "Step 4", title: "Test Runs", body: "Run real scenarios, inspect traces, fix prompts and schemas, then repeat until the behavior is predictable." },
];

const agentLoop: Card[] = [
  { eyebrow: "01", title: "Perceive", body: "Understand user goals, constraints, documents, data, and current state." },
  { eyebrow: "02", title: "Decide", body: "Choose a path, plan actions, call tools, and resolve uncertainty." },
  { eyebrow: "03", title: "Act", body: "Execute useful work through APIs, interfaces, workflows, and messages." },
  { eyebrow: "04", title: "Learn", body: "Adapt from feedback, logs, tests, and real-world outcomes." },
];

const agentSkills: Card[] = [
  { eyebrow: "Plan", title: "Break Down Work", body: "Turn a vague request into ordered steps with checkpoints and stopping conditions." },
  { eyebrow: "Retrieve", title: "Use Knowledge", body: "Search project docs, product data, files, policies, and previous decisions before acting." },
  { eyebrow: "Act", title: "Call Tools", body: "Create tickets, update records, write code, send messages, run checks, and produce artifacts." },
  { eyebrow: "Reflect", title: "Verify Results", body: "Compare output against the goal, catch errors, ask for help, and retry safely." },
];

const stack: Card[] = [
  { eyebrow: "AI SDK", title: "Reasoning + Tools", body: "Model calls, streaming responses, structured output, and type-safe tool calling." },
  { eyebrow: "MCP", title: "Tool Connectors", body: "A standard way for agents to reach files, services, databases, search, and internal systems." },
  { eyebrow: "Workflows", title: "Reliable Runs", body: "Durable background execution for tasks that take time, fail, retry, or need state." },
  { eyebrow: "UI", title: "Human Control", body: "Review screens, approvals, logs, settings, and visibility into what the agent is doing." },
];

const guardrails: Card[] = [
  { eyebrow: "Scope", title: "Least Privilege", body: "Give the agent narrow permissions. It should only access what the task requires." },
  { eyebrow: "Approval", title: "Human in the Loop", body: "Require confirmation for payments, deletes, public posts, emails, and irreversible actions." },
  { eyebrow: "Validation", title: "Structured Checks", body: "Use schemas, tests, required citations, and output validation before accepting results." },
  { eyebrow: "Logs", title: "Trace Everything", body: "Record prompts, tool calls, decisions, failures, and final outputs so behavior can be reviewed." },
];

const evaluation: Card[] = [
  { eyebrow: "Quality", title: "Task Success", body: "Did it complete the job accurately without hidden manual work?" },
  { eyebrow: "Speed", title: "Time Saved", body: "Does the agent reduce minutes, clicks, meetings, or handoffs?" },
  { eyebrow: "Trust", title: "Explainability", body: "Can a user understand why the agent made each important decision?" },
  { eyebrow: "Reliability", title: "Failure Handling", body: "Does it stop safely, recover cleanly, and ask for help when uncertain?" },
];

const details: Card[] = [
  { eyebrow: "When", title: "May 2, 2026", body: "Single day, global impact." },
  { eyebrow: "Where", title: "Addis Ababa", body: "Join builders in person in Ethiopia." },
  { eyebrow: "Who", title: "Builders Worldwide", body: "10+ cities competing together." },
  { eyebrow: "Part Of", title: "O2A Build Week", body: "A global movement from idea to shipped agents." },
];

const tracks = [
  { eyebrow: "Track 1", title: "Personal Agent", body: "An assistant that manages an individual workflow end-to-end.", Icon: Workflow },
  { eyebrow: "Track 2", title: "Business Agent", body: "A reliable operator for support, sales, finance, hiring, or operations.", Icon: Code2 },
  { eyebrow: "Track 3", title: "Developer Agent", body: "A coding or DevOps helper that reads context, edits, tests, and reports.", Icon: Cpu },
  { eyebrow: "Track 4", title: "Research Agent", body: "A system that gathers evidence, compares sources, and produces decisions.", Icon: Globe2 },
];

const demo: Card[] = [
  { eyebrow: "Show", title: "The Problem", body: "Explain the painful workflow and who experiences it." },
  { eyebrow: "Prove", title: "Agent Autonomy", body: "Show the agent planning, using tools, and completing real actions." },
  { eyebrow: "Trust", title: "Safety Layer", body: "Show approvals, logs, constraints, and how failures are handled." },
  { eyebrow: "Impact", title: "Before / After", body: "Quantify time saved, quality improved, or work unlocked." },
];

const prep: Card[] = [
  { eyebrow: "Laptop", title: "Bring Your Machine", body: "Have Node.js installed and ready before kickoff." },
  { eyebrow: "Internet", title: "Stable WiFi", body: "You will deploy, test, and collaborate throughout the day." },
  { eyebrow: "GitHub", title: "Account Ready", body: "Use it for code submission and collaboration." },
  { eyebrow: "Creativity", title: "Start With a Problem", body: "Your idea matters more than years of experience." },
];

const resources: Card[] = [
  { eyebrow: "01", title: "Create Accounts", body: "Set up Vercel and v0 first so you can build, iterate, and deploy without losing time." },
  { eyebrow: "02", title: "Read Just Enough", body: "Skim AI SDK and Vercel docs to understand models, tools, streaming, and deployment paths." },
  { eyebrow: "03", title: "Pick One Problem", body: "Choose a narrow workflow for real people. Functional beats flashy." },
  { eyebrow: "04", title: "Ship Publicly", body: "Demo at the event, deploy a live URL, and share the build with #ZerotoAgent." },
];

const resourceLinks = ["Vercel", "v0", "AI SDK", "#ZerotoAgent"];

const schedule: Card[] = [
  { eyebrow: "08:00 AM", title: "Registration", body: "Check-in, breakfast, and meet other builders." },
  { eyebrow: "09:00 AM", title: "Kickoff", body: "Challenges, rules, themes, and building begins." },
  { eyebrow: "12:00 PM", title: "Lunch", body: "Refuel, ask questions, and trade ideas." },
  { eyebrow: "05:00 PM", title: "Demos & Awards", body: "Present your agent and celebrate winners." },
];

const faq: Card[] = [
  { eyebrow: "Q", title: "Do I need experience?", body: "No. This is for all skill levels. Beginners welcome." },
  { eyebrow: "Q", title: "Can I work in teams?", body: "Yes. Solo or teams of up to 4 people allowed." },
  { eyebrow: "Q", title: "Is there a fee?", body: "No. The event is free to attend and participate in." },
  { eyebrow: "Q", title: "Can I attend remotely?", body: "Physical attendance in Addis Ababa is required." },
];

const participantCreditUrl = "https://zerotoagent.dev/event/p9k8Y4A3E7dKFCEe";

const Label = ({ step, title }: { step: string; title: string }) => (
  <header className="mb-7 md:mb-12">
    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground md:text-xs md:tracking-[0.18em]">{step}</p>
    <h2 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-[0.96] tracking-normal text-balance sm:text-5xl md:mt-5 md:text-7xl">{title}</h2>
  </header>
);

const CardGrid = ({ items, compact = false }: { items: Card[]; compact?: boolean }) => (
  <div className={`grid ${compact ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
    {items.map((item) => (
      <article key={`${item.eyebrow}-${item.title}`} className="content-row p-5 transition duration-300 hover:bg-secondary sm:border-r sm:border-border md:p-6">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground md:text-xs md:tracking-[0.16em]">{item.eyebrow}</p>
        <h3 className="mt-5 text-2xl font-medium leading-tight tracking-normal md:mt-8 md:text-3xl">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground md:mt-4 md:text-base md:leading-7">{item.body}</p>
      </article>
    ))}
  </div>
);

const Slide = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`slide-shell flex items-start border-t border-border px-4 py-16 sm:px-6 md:items-center md:px-10 md:py-24 ${className}`}>
    <div className="mx-auto w-full max-w-7xl animate-fade-up">{children}</div>
  </section>
);

const Index = () => {
  const [active, setActive] = useState(0);
  const sectionIds = useMemo(() => ["hero", "video", "fundamentals", "anatomy", "build", "agent", "skills", "stack", "guardrails", "evaluation", "tracks", "demo", "resources", "prepare", "credit", "submit", "closing"], []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(sectionIds.indexOf(visible.target.id));
    }, { threshold: 0.62 });

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const goTo = (direction: number) => {
    const next = Math.max(0, Math.min(sectionIds.length - 1, active + direction));
    setActive(next);
    document.getElementById(sectionIds[next])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="deck-scroll bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
        <a href="#hero" className="flex items-center gap-4 rounded-sm outline-none transition opacity-90 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring">
          <span className="triangle-mark scale-90" aria-hidden="true" />
          <span className="text-sm font-semibold">Zero to Agent</span>
        </a>
        <div className="hidden items-center gap-4 md:flex">
          <span className="font-mono text-xs text-muted-foreground">{String(active + 1).padStart(2, "0")} / {sectionIds.length}</span>
          <a href="#submit" className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-foreground">Submit <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </nav>

      <section id="hero" className="slide-shell vercel-grid relative flex items-center justify-center px-6 pt-24" onMouseMove={(e) => {
        e.currentTarget.style.setProperty("--x", `${e.clientX}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY}px`);
      }}>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto flex max-w-6xl animate-fade-up flex-col items-center text-center">
          <span className="triangle-mark mb-12 animate-slow-pulse" aria-hidden="true" />
          <h1 className="font-display text-6xl font-semibold leading-none tracking-normal text-balance md:text-9xl">Zero to <span className="hero-pixel-word">Agent</span></h1>
          <p className="mt-8 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground md:text-base">Vercel Team Message · O2A Global Build Week</p>
          <div className="mt-10 flex flex-col items-center divide-border text-lg md:flex-row md:divide-x">
            <span className="flex items-center gap-3 px-6 py-2"><Calendar className="h-5 w-5" /> May 2, 2026</span>
            <span className="flex items-center gap-3 px-6 py-2"><MapPin className="h-5 w-5" /> Addis Ababa, Ethiopia</span>
          </div>
          <p className="mt-12 max-w-3xl text-xl leading-8 text-muted-foreground text-balance">A focused journey from basic prompt to reliable AI agent: context, tools, memory, safety, evaluation, and shipping.</p>
        </div>
      </section>

      <Slide id="video">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><Label step="01 / Vercel Message" title="Zero to Agent Starts Here" /><p className="max-w-xl text-xl leading-8 text-muted-foreground">Begin with the Vercel team message for the event. The focus is clear: move from simple prompts to agents that can plan, use tools, act safely, and ship real work.</p></div>
          <div className="overflow-hidden border-y border-border bg-card">
            <iframe className="aspect-video w-full" src="https://www.youtube-nocookie.com/embed/r9hB_CQQIMk?rel=0&modestbranding=1" title="Vercel team message for Zero to Agent" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </Slide>

      <Slide id="fundamentals"><Label step="02 / Foundation" title="What Makes an Agent?" /><CardGrid items={fundamentals} compact /></Slide>
      <Slide id="anatomy"><Label step="03 / Anatomy" title="The Parts of an Agent" /><CardGrid items={anatomy} compact /></Slide>
      <Slide id="build"><Label step="04 / Build Plan" title="Zero to Working Agent" /><CardGrid items={buildPlan} compact /></Slide>
      <Slide id="agent"><Label step="05 / What Is" title="The Agent Loop" /><CardGrid items={agentLoop} compact /></Slide>
      <Slide id="skills"><Label step="06 / Core Skills" title="What the Agent Must Do" /><CardGrid items={agentSkills} compact /></Slide>
      <Slide id="stack"><Label step="07 / Tools" title="Agent Infrastructure" /><CardGrid items={stack} compact /></Slide>
      <Slide id="guardrails"><Label step="08 / Safety" title="Make It Trustworthy" /><CardGrid items={guardrails} compact /></Slide>
      <Slide id="evaluation"><Label step="09 / Evaluation" title="How to Judge the Agent" /><CardGrid items={evaluation} compact /></Slide>

      <Slide id="tracks">
        <Label step="10 / Project Direction" title="Choose an Agent Type" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4">{tracks.map(({ eyebrow, title, body, Icon }) => <article key={title} className="content-row p-6 transition hover:bg-secondary md:border-r md:border-border"><Icon className="mb-10 h-6 w-6" /><p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p><h3 className="mt-4 text-3xl font-medium">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{body}</p></article>)}</div>
      </Slide>

      <Slide id="demo"><Label step="11 / Demo" title="What to Present" /><CardGrid items={demo} compact /></Slide>
      <Slide id="resources">
        <Label step="12 / Resources" title="Path From Zero to Shipped" />
        <div className="grid border-y border-border md:grid-cols-4">
          {resources.map((item, index) => (
            <article key={item.title} className="content-row flex min-h-[22rem] flex-col p-6 transition duration-300 hover:bg-secondary md:border-r md:border-border">
              <div className="flex items-center justify-between gap-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.eyebrow}</p>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mt-12 text-3xl font-medium leading-tight tracking-normal">{item.title}</h3>
              <p className="mt-5 leading-7 text-muted-foreground">{item.body}</p>
              <p className="mt-auto pt-10 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{resourceLinks[index]}</p>
            </article>
          ))}
        </div>
      </Slide>
      <Slide id="prepare"><Label step="13 / Prepare" title="Before You Build" /><CardGrid items={prep} compact /></Slide>

      <Slide id="credit">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div><Label step="14 / Participant Credit" title="Scan for v0 Credits" /><p className="max-w-2xl text-xl leading-8 text-muted-foreground">Participants should scan this code to open the Zero to Agent event page and claim their v0 credit from the Vercel team.</p><a href={participantCreditUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-border pb-2 font-mono text-sm text-muted-foreground transition hover:text-foreground"><QrCode className="h-4 w-4" /> Open credit page <ArrowUpRight className="h-4 w-4" /></a></div>
          <div className="flex justify-center border-y border-border py-8"><img src={v0CreditQr} alt="QR code for participants to claim v0 credits" className="aspect-square w-full max-w-md bg-foreground p-5" /></div>
        </div>
      </Slide>

      <Slide id="submit">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div><Label step="15 / Ship" title="Finalize the Agent" /><p className="max-w-2xl text-xl leading-8 text-muted-foreground">Make the agent narrow, reliable, visible, and safe. A simple agent that completes one real job is stronger than a broad demo that cannot be trusted.</p><a href="https://community.vercel.com/hackathons/zero-to-agent" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Go to Submission <ArrowUpRight className="h-5 w-5" /></a></div>
           <div className="border-y border-border py-8"><MonitorUp className="mb-8 h-8 w-8" /><h3 className="text-3xl font-medium">Resources You Need</h3><div className="mt-8 grid gap-3">{["AI SDK", "v0 Builder", "Next.js", "Vercel Docs"].map((r) => <div key={r} className="flex items-center justify-between border-b border-border py-4 text-muted-foreground"><span>{r}</span><ArrowUpRight className="h-4 w-4" /></div>)}</div></div>
        </div>
      </Slide>

      <Slide id="closing"><Label step="16 / Closing" title="Start Small. Make It Act." /><CardGrid items={faq} compact /></Slide>

      <div className="fixed bottom-6 right-6 z-50 flex border border-border bg-background/80 backdrop-blur">
        <button aria-label="Previous slide" onClick={() => goTo(-1)} className="border-r border-border p-3 text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ChevronUp className="h-4 w-4" /></button>
        <button aria-label="Next slide" onClick={() => goTo(1)} className="p-3 text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ChevronDown className="h-4 w-4" /></button>
      </div>
    </main>
  );
};

export default Index;