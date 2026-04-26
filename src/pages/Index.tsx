import { ArrowUpRight, Calendar, ChevronDown, ChevronUp, Code2, Cpu, ExternalLink, Globe2, MapPin, MonitorUp, ShieldCheck, Sparkles, Trophy, Workflow } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Card = { eyebrow: string; title: string; body: string };

const learn: Card[] = [
  { eyebrow: "Learn", title: "Build AI Agents", body: "Master autonomous systems that perceive context, decide next steps, and act through tools." },
  { eyebrow: "Create", title: "Production Ready", body: "Move beyond demos into applications that handle real tasks at useful scale." },
  { eyebrow: "Compete", title: "Global Hackathon", body: "Build with developers across 10+ cities and submit for recognition and prizes." },
];

const v0Tools: Card[] = [
  { eyebrow: "Generate", title: "UIs in Seconds", body: "Describe the interface you need and get production-ready React components." },
  { eyebrow: "Code", title: "AI Suggestions", body: "Use intelligent completions and refactoring while your agent takes shape." },
  { eyebrow: "Design", title: "System Ready", body: "Work with component libraries, variants, and design tokens from the start." },
  { eyebrow: "Deploy", title: "One Click", body: "Ship the finished app to a global edge network when the build is ready." },
];

const steps: Card[] = [
  { eyebrow: "01", title: "Agent Logic", body: "Use AI SDK to wire models, tools, structured output, and reasoning loops." },
  { eyebrow: "02", title: "Build UI", body: "Generate dashboards, chat screens, controls, and review flows with v0." },
  { eyebrow: "03", title: "Add MCPs", body: "Connect tools, APIs, files, calendars, CRMs, or databases through MCP servers." },
  { eyebrow: "04", title: "Deploy", body: "Publish, test live behavior, demo the product, and submit it for judging." },
];

const agentLoop: Card[] = [
  { eyebrow: "01", title: "Perceive", body: "Understand user goals, constraints, documents, data, and current state." },
  { eyebrow: "02", title: "Decide", body: "Choose a path, plan actions, call tools, and resolve uncertainty." },
  { eyebrow: "03", title: "Act", body: "Execute useful work through APIs, interfaces, workflows, and messages." },
  { eyebrow: "04", title: "Learn", body: "Adapt from feedback, logs, tests, and real-world outcomes." },
];

const why: Card[] = [
  { eyebrow: "Why", title: "Automate Work", body: "Build systems that operate 24/7 without waiting for manual handoffs." },
  { eyebrow: "Why", title: "Scale Impact", body: "Solve painful problems for millions instead of a small internal team." },
  { eyebrow: "Why", title: "Real Products", body: "Turn a prototype into a durable, deployed, user-facing application." },
  { eyebrow: "Why", title: "Compete Global", body: "Earn visibility from builders, teams, and the Vercel community." },
];

const stack: Card[] = [
  { eyebrow: "AI SDK", title: "Models + Tools", body: "Streaming, tool calling, structured outputs, and agent patterns." },
  { eyebrow: "MCP", title: "External Context", body: "Connect agents to tools, APIs, and business systems." },
  { eyebrow: "Workflows", title: "Durable Runs", body: "Long-running background agents with retries and reliability." },
  { eyebrow: "v0", title: "Instant UI", body: "Natural-language interface generation for the product layer." },
];

const details: Card[] = [
  { eyebrow: "When", title: "May 2, 2026", body: "Single day, global impact." },
  { eyebrow: "Where", title: "Addis Ababa", body: "Join builders in person in Ethiopia." },
  { eyebrow: "Who", title: "Builders Worldwide", body: "10+ cities competing together." },
  { eyebrow: "Part Of", title: "O2A Build Week", body: "A global movement from idea to shipped agents." },
];

const tracks = [
  { eyebrow: "Track 1", title: "Workflows", body: "Durable async agents for long-running tasks.", Icon: Workflow },
  { eyebrow: "Track 2", title: "v0 + MCPs", body: "UI-first agents connected to useful tools.", Icon: Code2 },
  { eyebrow: "Track 3", title: "ChatSDK Agents", body: "Slack, Discord, Teams, and real-time chat products.", Icon: Cpu },
  { eyebrow: "All Tracks", title: "Open to All", body: "Pick the path that fits your skill and idea.", Icon: Globe2 },
];

const prizes: Card[] = [
  { eyebrow: "01st Place", title: "$3,000", body: "Vercel credits + featured on all channels." },
  { eyebrow: "02nd Place", title: "$2,000", body: "Vercel credits + community recognition." },
  { eyebrow: "03rd Place", title: "$1,000", body: "Credits + Vercel Pro for one year." },
  { eyebrow: "All", title: "Portfolio", body: "Showcase your work globally." },
];

const prep: Card[] = [
  { eyebrow: "Laptop", title: "Bring Your Machine", body: "Have Node.js installed and ready before kickoff." },
  { eyebrow: "Internet", title: "Stable WiFi", body: "You will deploy, test, and collaborate throughout the day." },
  { eyebrow: "GitHub", title: "Account Ready", body: "Use it for code submission and collaboration." },
  { eyebrow: "Creativity", title: "Start With a Problem", body: "Your idea matters more than years of experience." },
];

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

const Label = ({ step, title }: { step: string; title: string }) => (
  <header className="mb-8 md:mb-12">
    <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">{step}</p>
    <h2 className="mt-5 max-w-5xl font-display text-5xl font-bold leading-none tracking-normal text-balance md:text-7xl">{title}</h2>
  </header>
);

const CardGrid = ({ items, compact = false }: { items: Card[]; compact?: boolean }) => (
  <div className={`grid gap-4 ${compact ? "md:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-4"}`}>
    {items.map((item) => (
      <article key={`${item.eyebrow}-${item.title}`} className="group hairline-panel rounded-md border border-border p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-surface-elevated">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.eyebrow}</p>
        <h3 className="mt-8 text-2xl font-semibold tracking-normal md:text-3xl">{item.title}</h3>
        <p className="mt-4 leading-7 text-muted-foreground">{item.body}</p>
      </article>
    ))}
  </div>
);

const Slide = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`slide-shell flex items-center border-t border-border px-6 py-24 md:px-10 ${className}`}>
    <div className="mx-auto w-full max-w-7xl animate-fade-up">{children}</div>
  </section>
);

const Index = () => {
  const [active, setActive] = useState(0);
  const sectionIds = useMemo(() => ["hero", "video", "learn", "v0", "build", "agent", "why", "stack", "event", "security", "tracks", "prizes", "prepare", "schedule", "submit", "faq"], []);

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
    <main className="deck-scroll bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
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
          <h1 className="font-display text-6xl font-bold leading-none tracking-normal text-balance md:text-9xl">Zero to Agent</h1>
          <p className="mt-8 font-mono text-sm uppercase tracking-[0.28em] text-muted-foreground md:text-base">O2A Global Build Week</p>
          <div className="mt-10 flex flex-col items-center divide-border text-lg md:flex-row md:divide-x">
            <span className="flex items-center gap-3 px-6 py-2"><Calendar className="h-5 w-5" /> May 2, 2026</span>
            <span className="flex items-center gap-3 px-6 py-2"><MapPin className="h-5 w-5" /> Addis Ababa, Ethiopia</span>
          </div>
          <p className="mt-12 max-w-3xl text-xl leading-8 text-muted-foreground text-balance">Build AI agents that solve real problems. Learn from the Vercel team and global builders. Ship something useful and compete for real prizes.</p>
        </div>
      </section>

      <Slide id="video">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><Label step="01 / Introduction" title="Welcome Message" /><p className="max-w-xl text-xl leading-8 text-muted-foreground">Watch the kickoff directly inside the deck, then move slide-by-slide through the build plan.</p></div>
          <div className="overflow-hidden rounded-md border border-border bg-card shadow-2xl">
            <iframe className="aspect-video w-full" src="https://www.youtube-nocookie.com/embed/r9hB_CQQIMk?rel=0&modestbranding=1" title="Zero to Agent welcome video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </Slide>

      <Slide id="learn"><Label step="02 / Learning" title="What is Zero to Agent?" /><CardGrid items={learn} /></Slide>
      <Slide id="v0"><Label step="03 / Tools" title="How v0 Powers Your Agent" /><CardGrid items={v0Tools} /></Slide>
      <Slide id="build"><Label step="04 / Development" title="How to Build Your Agent" /><CardGrid items={steps} compact /></Slide>
      <Slide id="agent"><Label step="05 / What Is" title="The Agent Loop" /><CardGrid items={agentLoop} compact /></Slide>
      <Slide id="why"><Label step="06 / Why Agents" title="The Future is Autonomous" /><CardGrid items={why} compact /></Slide>
      <Slide id="stack"><Label step="08 / Tools" title="Your Tech Stack" /><CardGrid items={stack} compact /></Slide>
      <Slide id="event"><Label step="09 / Event" title="Event Details" /><CardGrid items={details} compact /></Slide>

      <Slide id="security">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <Label step="08 / Important" title="Security Notice" />
          <div className="rounded-md border border-border bg-card p-8">
            <ShieldCheck className="mb-8 h-8 w-8 text-success" />
            <p className="text-2xl leading-10 text-foreground">A security incident involving unauthorized access to certain internal Vercel systems is being investigated. Follow official Vercel channels for the security bulletin and best-practice updates.</p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              <a className="flex items-center justify-between rounded-sm border border-border p-4 text-muted-foreground transition hover:border-primary hover:text-foreground" href="https://x.com/vercel" target="_blank" rel="noreferrer">Vercel Security Bulletin <ExternalLink className="h-4 w-4" /></a>
              <a className="flex items-center justify-between rounded-sm border border-border p-4 text-muted-foreground transition hover:border-primary hover:text-foreground" href="https://x.com/rauchg" target="_blank" rel="noreferrer">CEO Statement <ExternalLink className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </Slide>

      <Slide id="tracks">
        <Label step="10 / Event Info" title="Choose a Build Track" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{tracks.map(({ eyebrow, title, body, Icon }) => <article key={title} className="rounded-md border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"><Icon className="mb-10 h-6 w-6" /><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p><h3 className="mt-4 text-3xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{body}</p></article>)}</div>
      </Slide>

      <Slide id="prizes"><Label step="12 / Rewards" title="Prize Pool" /><CardGrid items={prizes} compact /></Slide>
      <Slide id="prepare"><Label step="13 / Prepare" title="The Journey" /><CardGrid items={prep} compact /></Slide>
      <Slide id="schedule"><Label step="15 / Timeline" title="Event Day Schedule" /><div className="divide-y divide-border border-y border-border">{schedule.map((item) => <div key={item.eyebrow} className="grid gap-4 py-7 md:grid-cols-[12rem_1fr]"><p className="font-mono text-sm text-muted-foreground">{item.eyebrow}</p><div><h3 className="text-3xl font-semibold">{item.title}</h3><p className="mt-2 text-muted-foreground">{item.body}</p></div></div>)}</div></Slide>

      <Slide id="submit">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div><Label step="16 / Submission" title="Finalize, Submit, Ship" /><p className="max-w-2xl text-xl leading-8 text-muted-foreground">Test the agent, document what it does, prepare a short demo, and submit it through the community page before judging.</p><a href="https://community.vercel.com/hackathons/zero-to-agent" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Go to Submission <ArrowUpRight className="h-5 w-5" /></a></div>
          <div className="rounded-md border border-border bg-card p-8"><MonitorUp className="mb-8 h-8 w-8" /><h3 className="text-3xl font-semibold">Resources You Need</h3><div className="mt-8 grid gap-3">{["AI SDK", "v0 Builder", "Next.js", "Vercel Docs"].map((r) => <div key={r} className="flex items-center justify-between border-b border-border py-4 text-muted-foreground"><span>{r}</span><ArrowUpRight className="h-4 w-4" /></div>)}</div></div>
        </div>
      </Slide>

      <Slide id="faq"><Label step="17 / Questions" title="Why Agents Matter" /><CardGrid items={faq} compact /></Slide>

      <div className="fixed bottom-6 right-6 z-50 flex border border-border bg-background/80 backdrop-blur">
        <button aria-label="Previous slide" onClick={() => goTo(-1)} className="border-r border-border p-3 text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ChevronUp className="h-4 w-4" /></button>
        <button aria-label="Next slide" onClick={() => goTo(1)} className="p-3 text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ChevronDown className="h-4 w-4" /></button>
      </div>
    </main>
  );
};

export default Index;