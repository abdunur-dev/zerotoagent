import { ArrowUpRight, Calendar, ChevronDown, ChevronUp, Code2, Cpu, Globe2, MapPin, Play, ShieldCheck, Sparkles, Trophy, Workflow } from "lucide-react";
import { useMemo, useState } from "react";

const learningCards = [
  ["Learn", "Build AI Agents", "Master autonomous systems that think, decide, and act independently"],
  ["Create", "Production Ready", "Deploy real applications that handle tasks at scale, not just prototypes"],
  ["Compete", "Global Hackathon", "Compete with developers worldwide and win prizes for your innovations"],
];

const toolCards = [
  ["Generate", "UIs in Seconds", "Describe what you need and get production-ready React components"],
  ["Code", "AI Suggestions", "Get intelligent completions and refactoring powered by AI"],
  ["Design", "System Ready", "Use component systems and design tokens for consistency"],
  ["Deploy", "One Click", "Ship with auto-scaling and a global edge network"],
];

const buildSteps = [
  ["01", "Agent Logic", "Use AI SDK to create agents with tools, models, and reasoning"],
  ["02", "Build UI", "Generate interfaces with v0—describe and let AI build it"],
  ["03", "Add MCPs", "Integrate Model Context Protocol tools for extended capabilities"],
  ["04", "Deploy", "Push to Vercel for instant scaling and global availability"],
];

const tracks = [
  ["Track 1", "Workflows", "Build durable async agents for long-running tasks.", Workflow],
  ["Track 2", "v0 + MCPs", "Build polished UI and connect external tools fast.", Code2],
  ["Track 3", "ChatSDK Agents", "Ship agents across Slack, Discord, and Teams.", Cpu],
  ["All Tracks", "Open to All", "Choose what fits your vision and skills best.", Globe2],
];

const prizes = [
  ["01st Place", "$3,000", "Vercel credits + featured on all channels"],
  ["02nd Place", "$2,000", "Vercel credits + community recognition"],
  ["03rd Place", "$1,000", "Credits + Vercel Pro for 1 year"],
  ["All", "Portfolio", "Showcase your work to the tech community globally"],
];

const schedule = [
  ["08:00 AM", "Registration", "Check-in and breakfast. Meet the Vercel team and other builders."],
  ["09:00 AM", "Kickoff", "Introduction to challenges and themes. Building begins."],
  ["12:00 PM", "Lunch", "Refuel and network with other participants."],
  ["05:00 PM", "Demos & Awards", "Present your work. Winners announced. Celebration."],
];

const faqs = [
  ["Do I need experience?", "No. This is for all skill levels. Beginners welcome."],
  ["Can I work in teams?", "Yes. Solo or teams of up to 4 people allowed."],
  ["Is there a registration fee?", "No. Event is free to attend and participate in."],
  ["Can I attend remotely?", "Physical attendance in Addis Ababa is required."],
];

const SectionLabel = ({ kicker, title }: { kicker: string; title: string }) => (
  <div className="mb-12 flex flex-col gap-4 md:mb-16">
    <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">{kicker}</p>
    <h2 className="max-w-4xl font-display text-4xl font-semibold tracking-normal text-balance md:text-6xl">{title}</h2>
  </div>
);

const DataCard = ({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) => (
  <article className="group hairline-panel rounded-md border border-border p-6 transition duration-300 hover:-translate-y-1 hover:border-surface-line hover:bg-surface-elevated focus-within:border-primary">
    <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
    <h3 className="text-2xl font-semibold tracking-normal">{title}</h3>
    <p className="mt-4 leading-7 text-muted-foreground">{body}</p>
  </article>
);

const Index = () => {
  const [active, setActive] = useState(0);
  const sections = useMemo(() => ["hero", "intro", "learning", "tools", "build", "tracks", "prizes", "schedule", "join"], []);

  const goTo = (direction: number) => {
    const next = Math.max(0, Math.min(sections.length - 1, active + direction));
    setActive(next);
    document.getElementById(sections[next])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
        <a href="#hero" className="flex items-center gap-4 rounded-sm outline-none transition opacity-90 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring">
          <span className="triangle-mark scale-90" aria-hidden="true" />
          <span className="text-sm font-semibold">Zero to Agent</span>
        </a>
        <a href="#join" className="hidden items-center gap-2 border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-foreground md:flex">
          Register <ArrowUpRight className="h-4 w-4" />
        </a>
      </nav>

      <section id="hero" className="slide-shell vercel-grid relative flex items-center justify-center px-6 pt-24" onMouseMove={(e) => {
        const target = e.currentTarget;
        target.style.setProperty("--x", `${e.clientX}px`);
        target.style.setProperty("--y", `${e.clientY}px`);
      }}>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto flex max-w-5xl animate-fade-up flex-col items-center text-center">
          <span className="triangle-mark mb-14 animate-slow-pulse" aria-hidden="true" />
          <h1 className="font-display text-6xl font-bold tracking-normal text-balance md:text-8xl lg:text-9xl">Zero to Agent</h1>
          <p className="mt-8 font-mono text-sm uppercase tracking-[0.28em] text-muted-foreground md:text-base">O2A Global Build Week</p>
          <div className="mt-10 flex flex-col items-center divide-border text-lg md:flex-row md:divide-x">
            <span className="flex items-center gap-3 px-6 py-2"><Calendar className="h-5 w-5" /> May 2, 2026</span>
            <span className="flex items-center gap-3 px-6 py-2"><MapPin className="h-5 w-5" /> Addis Ababa, Ethiopia</span>
          </div>
          <p className="mt-14 max-w-3xl text-lg leading-8 text-muted-foreground text-balance">Build AI agents that solve real problems. Learn from the Vercel team and global builders. Ship something useful and compete for real prizes.</p>
        </div>
      </section>

      <section id="intro" className="slide-shell flex items-center border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel kicker="01 / Introduction" title="Welcome Message" />
            <p className="max-w-xl text-xl leading-8 text-muted-foreground">A special message from the Vercel team to kick off the event.</p>
          </div>
          <a href="https://www.youtube.com/watch?v=r9hB_CQQIMk" target="_blank" rel="noreferrer" className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-md border border-border bg-card outline-none transition hover:border-primary focus-visible:ring-2 focus-visible:ring-ring">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--surface-line)/0.65),transparent_52%)]" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground transition group-hover:scale-105">
              <Play className="ml-1 h-8 w-8 fill-current" />
            </div>
            <span className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Zero to Agent — by Vercel</span>
          </a>
        </div>
      </section>

      <section id="learning" className="slide-shell border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel kicker="02 / Learning" title="What is Zero to Agent?" />
          <div className="grid gap-4 md:grid-cols-3">{learningCards.map(([eyebrow, title, body]) => <DataCard key={title} eyebrow={eyebrow} title={title} body={body} />)}</div>
        </div>
      </section>

      <section id="tools" className="slide-shell border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel kicker="03 / Tools" title="How v0 Powers Your Agent" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{toolCards.map(([eyebrow, title, body]) => <DataCard key={title} eyebrow={eyebrow} title={title} body={body} />)}</div>
        </div>
      </section>

      <section id="build" className="slide-shell border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel kicker="04 / Development" title="How to Build Your Agent" />
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
            {buildSteps.map(([num, title, body]) => <div key={title} className="bg-background p-8 transition hover:bg-surface"><p className="font-mono text-5xl text-muted-foreground">{num}</p><h3 className="mt-10 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="tracks" className="slide-shell border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel kicker="10 / Event Info" title="Choose your track" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{tracks.map(([eyebrow, title, body, Icon]) => <article key={title as string} className="rounded-md border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"><Icon className="mb-10 h-6 w-6 text-foreground" /><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow as string}</p><h3 className="mt-4 text-2xl font-semibold">{title as string}</h3><p className="mt-4 leading-7 text-muted-foreground">{body as string}</p></article>)}</div>
        </div>
      </section>

      <section id="prizes" className="slide-shell border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel kicker="12 / Rewards" title="Prize Pool" />
          <div className="grid gap-4 md:grid-cols-4">{prizes.map(([place, amount, note]) => <article key={place} className="rounded-md border border-border p-6"><Trophy className="mb-8 h-5 w-5 text-warning" /><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{place}</p><h3 className="mt-4 text-4xl font-semibold">{amount}</h3><p className="mt-5 leading-7 text-muted-foreground">{note}</p></article>)}</div>
        </div>
      </section>

      <section id="schedule" className="slide-shell border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionLabel kicker="15 / Timeline" title="Event Day Schedule" />
          <div className="divide-y divide-border border-y border-border">{schedule.map(([time, title, body]) => <div key={time} className="grid gap-4 py-8 md:grid-cols-[10rem_1fr]"><p className="font-mono text-sm text-muted-foreground">{time}</p><div><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-2 text-muted-foreground">{body}</p></div></div>)}</div>
        </div>
      </section>

      <section id="join" className="slide-shell border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionLabel kicker="14 / Join" title="Get Started Now" />
            <a href="https://community.vercel.com/hackathons/zero-to-agent" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Register <ArrowUpRight className="h-5 w-5" /></a>
            <div className="mt-12 rounded-md border border-border bg-card p-6"><ShieldCheck className="mb-4 h-6 w-6 text-success" /><h3 className="text-xl font-semibold">Security Notice</h3><p className="mt-3 leading-7 text-muted-foreground">Follow official updates and best practices from Vercel channels. Events continue as planned — let’s build a better web.</p></div>
          </div>
          <div className="rounded-md border border-border bg-card p-6">
            <div className="mb-8 flex items-center gap-3"><Sparkles className="h-5 w-5" /><h3 className="text-2xl font-semibold">Why Agents Matter</h3></div>
            <div className="divide-y divide-border">{faqs.map(([q, a]) => <div key={q} className="py-5"><p className="font-semibold">{q}</p><p className="mt-2 text-muted-foreground">{a}</p></div>)}</div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex border border-border bg-background/80 backdrop-blur">
        <button aria-label="Previous section" onClick={() => goTo(-1)} className="border-r border-border p-3 text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ChevronUp className="h-4 w-4" /></button>
        <button aria-label="Next section" onClick={() => goTo(1)} className="p-3 text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ChevronDown className="h-4 w-4" /></button>
      </div>
    </main>
  );
};

export default Index;