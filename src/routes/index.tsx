import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo, type MouseEventHandler } from "react";
import {
  ArrowUpRight, ArrowRight, ExternalLink, Sparkles, X,
  Globe, ShoppingCart, LayoutDashboard, Workflow, Plug, Bot, BarChart3,
  MapPin, Users, Database, Search, Zap, MessageSquare, Bell, CheckCircle2,
  Mail, GraduationCap, Briefcase, Wrench, Award, Map, Hammer, Sliders, ClipboardCheck,
  Sun, Moon,
} from "lucide-react";

import lamicareUrl from "@/assets/projects/lamicare.jpg";
import dermikelpUkUrl from "@/assets/projects/dermikelp-uk.jpg";
import dermikelpZaUrl from "@/assets/projects/dermikelp-za.jpg";
import vetlomarUrl from "@/assets/projects/vetlomar.jpg";
import dealdockUrl from "@/assets/projects/dealdock.jpg";
import cabinetBedsUrl from "@/assets/projects/cabinet-beds.jpg";
import simplebruUrl from "@/assets/projects/simplebru.jpg";
import lineageLoginUrl from "@/assets/projects/lineage-login.jpg";
import lineageDashboardUrl from "@/assets/projects/lineage-dashboard.jpg";
import lineageCheckinsUrl from "@/assets/projects/lineage-checkins.jpg";
import lineageProspectsUrl from "@/assets/projects/lineage-prospects.jpg";
import lineageTradeshowUrl from "@/assets/projects/lineage-tradeshow.jpg";
import makeMondayDatastoreUrl from "@/assets/workflows/make-monday-datastore.jpg";
import makeScenariosListUrl from "@/assets/workflows/make-scenarios-list.jpg";
import zapierMondayWebhookUrl from "@/assets/workflows/zapier-monday-webhook.jpg";
import zapierZapsListUrl from "@/assets/workflows/zapier-zaps-list.jpg";
import ghlWorkflowBuilderUrl from "@/assets/workflows/ghl-workflow-builder.jpg";
import ghlWorkflowsListUrl from "@/assets/workflows/ghl-workflows-list.jpg";

const CONTACT_EMAIL = "mailto:";

const WORKFLOW_SCREENSHOTS: { src: string; alt: string; platform: string; title: string }[] = [
  { src: makeScenariosListUrl, alt: "Make.com scenarios list", platform: "Make.com", title: "Scenarios overview — monday.com & SQL Server integrations" },
  { src: makeMondayDatastoreUrl, alt: "Make.com monday.com to Data store scenario", platform: "Make.com", title: "monday.com → Iterator → Data store scenario" },
  { src: zapierZapsListUrl, alt: "Zapier zaps list", platform: "Zapier", title: "Active Zaps — Badger check-ins, rep inactivity alerts" },
  { src: zapierMondayWebhookUrl, alt: "Zapier monday.com webhook workflow", platform: "Zapier", title: "monday.com trigger → Filter → Formatter → Webhook POST" },
  { src: ghlWorkflowsListUrl, alt: "GoHighLevel Proposal Follow-up Sequence workflow", platform: "GoHighLevel", title: "Proposal Follow-up Sequence — SMS, email & call task cadence" },
  { src: ghlWorkflowBuilderUrl, alt: "GoHighLevel No-Show Reschedule SMS workflow", platform: "GoHighLevel", title: "No-Show Reschedule SMS — wait, contact reply, timeout & tag" },
];

const lamicare = { url: lamicareUrl };
const dermikelpUk = { url: dermikelpUkUrl };
const dermikelpZa = { url: dermikelpZaUrl };
const vetlomar = { url: vetlomarUrl };
const dealdock = { url: dealdockUrl };
const cabinetBeds = { url: cabinetBedsUrl };
const simplebru = { url: simplebruUrl };
const lineageLogin = { url: lineageLoginUrl };
const lineageDashboard = { url: lineageDashboardUrl };
const lineageCheckins = { url: lineageCheckinsUrl };
const lineageProspects = { url: lineageProspectsUrl };
const lineageTradeshow = { url: lineageTradeshowUrl };

export const Route = createFileRoute("/")({
  component: Portfolio,
});

type Category = "All" | "Websites" | "eCommerce" | "Custom Portals" | "CRM & Automation";

type Project = {
  name: string;
  url?: string;
  category: string;
  filter: Exclude<Category, "All">[];
  type: string;
  image: string;
  fallbackImage: string;
  description: string;
  skills: string[];
  role: string;
  value: string;
};

const screenshotPath = (filename: string) => `/project-screenshots/${filename}`;

const PROJECTS: Project[] = [
  {
    name: "Lineage Collections Portal",
    url: "https://lineage-portal.com/",
    category: "Custom Portal / CRM / Reporting / Operations",
    type: "Custom Portal",
    filter: ["Custom Portals", "CRM & Automation"],
    image: lineageTradeshow.url,
    fallbackImage: screenshotPath("lineage-tradeshow.jpg"),
    description:
      "Custom internal portal centralising dealer accounts, sales activity, CRM-style workflows, field check-ins, trade show leads and reporting.",
    skills: ["Custom build", "CRM logic", "Field check-ins", "Trade show capture", "Analytics", "Permissions", "AI-assisted dev"],
    role: "Custom portal build, CRM-style workflows, dealer management, reporting and operations.",
    value: "Centralised dealer accounts, sales activity, prospect tracking, field check-ins, trade show leads, reporting and internal workflows.",
  },
  {
    name: "Lamicare",
    url: "https://lamicare.com/",
    category: "Corporate Website / Healthcare",
    type: "Corporate Website",
    filter: ["Websites"],
    image: lamicare.url,
    fallbackImage: screenshotPath("lamicare.jpg"),
    description: "Ongoing website management, content updates, product information, SEO support and digital platform maintenance.",
    skills: ["Website management", "Content", "SEO support", "Maintenance"],
    role: "Website management, digital platform support, content updates, SEO support, technical fixes.",
    value: "Improved website reliability, product visibility, content accuracy and digital platform maintenance.",
  },
  {
    name: "Dermikelp UK",
    url: "https://dermikelp.co.uk/",
    category: "WordPress / WooCommerce / eCommerce",
    type: "eCommerce",
    filter: ["eCommerce", "Websites"],
    image: dermikelpUk.url,
    fallbackImage: screenshotPath("dermikelp-uk.jpg"),
    description: "WooCommerce support, product updates, eCommerce maintenance and SEO support for the UK market.",
    skills: ["WordPress", "WooCommerce", "SEO", "Technical fixes"],
    role: "WordPress / WooCommerce support, product updates, eCommerce maintenance, SEO support.",
    value: "Supported product visibility, website updates, technical maintenance and eCommerce functionality for the UK market.",
  },
  {
    name: "Dermikelp South Africa",
    url: "https://www.dermikelp.co.za/",
    category: "WordPress / WooCommerce / SEO",
    type: "eCommerce",
    filter: ["eCommerce", "Websites"],
    image: dermikelpZa.url,
    fallbackImage: screenshotPath("dermikelp-za.jpg"),
    description: "Website management, product content, SEO structure, GSC checks, metadata and internal linking.",
    skills: ["WordPress", "WooCommerce", "SEO", "GSC", "Metadata"],
    role: "Website management, SEO support, Google Search Console checks, metadata, product content, internal linking.",
    value: "Improved website structure, search visibility support and product content accuracy.",
  },
  {
    name: "Vetlomar",
    url: "https://vetlomar.co.za/",
    category: "WordPress / Product Website / SEO",
    type: "Product Website",
    filter: ["Websites"],
    image: vetlomar.url,
    fallbackImage: screenshotPath("vetlomar.jpg"),
    description: "Product website support, content updates, SEO support and technical maintenance.",
    skills: ["WordPress", "SEO", "Content", "Maintenance"],
    role: "Product website support, content updates, SEO support, technical maintenance.",
    value: "Supported product visibility, website performance and ongoing brand presence.",
  },
  {
    name: "DealDock",
    url: "https://dealdock.co.za/",
    category: "Lead Generation / Business Website",
    type: "Lead Generation",
    filter: ["Websites", "CRM & Automation"],
    image: dealdock.url,
    fallbackImage: screenshotPath("dealdock.jpg"),
    description: "Lead generation and business website focused on online visibility and conversion.",
    skills: ["Lead gen", "Website build", "Conversion", "Management"],
    role: "Lead generation / business website build and management.",
    value: "Built and managed a platform focused on online visibility, lead capture and business positioning.",
  },
  {
    name: "Cabinet Beds Microsite",
    url: "https://cabinet-beds.gabriella-524.workers.dev/",
    category: "Custom Microsite / Product Experience",
    type: "Custom Microsite",
    filter: ["Websites", "Custom Portals"],
    image: cabinetBeds.url,
    fallbackImage: screenshotPath("cabinet-beds.jpg"),
    description: "Focused product microsite supporting product discovery and a dealer quote journey.",
    skills: ["Custom build", "Quote flow", "Product UX", "Edge deploy"],
    role: "Custom microsite build, product discovery flow, dealer quote journey.",
    value: "Created a focused product experience to support product education, quote requests and dealer-driven sales flow.",
  },
  {
    name: "Simple Bru Coffee Co",
    url: "https://simplebrucoffee.co.za/",
    category: "eCommerce Website",
    type: "eCommerce",
    filter: ["eCommerce", "Websites"],
    image: simplebru.url,
    fallbackImage: screenshotPath("simplebru.jpg"),
    description: "eCommerce website development, product pages, navigation, checkout flow and content updates.",
    skills: ["eCommerce", "Checkout", "Content", "Campaigns"],
    role: "eCommerce website development, product pages, navigation, checkout flow, content updates.",
    value: "Built an online store structure that supported product browsing, online ordering, stock visibility and campaign updates.",
  },
];

const PROOF_CARDS = [
  { icon: Briefcase, stat: "8+", label: "Years digital systems experience" },
  { icon: Globe, stat: "50+", label: "Website & eCommerce projects" },
  { icon: LayoutDashboard, stat: "2+", label: "Custom portals built from scratch" },
  { icon: Workflow, stat: "CRM", label: "SEO & automation experience" },
  { icon: GraduationCap, stat: "BSc", label: "Computer Science (in progress)" },
];

const SYSTEMS = [
  { icon: Globe, title: "Websites & eCommerce", text: "WordPress, WooCommerce, Shopify, product pages, landing pages, checkout flows, content updates and technical fixes." },
  { icon: LayoutDashboard, title: "Custom Portals", text: "Internal tools, dealer portals, CRM views, dashboards, role-based access and operational workflows." },
  { icon: Users, title: "CRM Systems", text: "GoHighLevel, HubSpot — pipelines, lead stages, tags, forms, follow-up workflows and reporting." },
  { icon: Workflow, title: "Automation Workflows", text: "Make.com, Zapier, Slack alerts, lead routing, CRM updates, email workflows and reporting flows." },
  { icon: Zap, title: "Lead Generation Systems", text: "RB2B, Leadrox, lead intent tracking, website visitor identification and CRM follow-up workflows." },
  { icon: Search, title: "SEO Support", text: "Google Search Console, Semrush, metadata, internal linking, content updates, service and product pages, technical SEO checks." },
  { icon: Bot, title: "AI-Assisted Systems", text: "Claude, ChatGPT and Claude Code for workflow planning, content support, documentation and faster development." },
  { icon: BarChart3, title: "Reporting & Visibility", text: "Dashboards, operational reporting, lead tracking, campaign reporting and business process visibility." },
];

const TOOL_GROUPS = [
  { title: "AI", icon: Bot, items: ["Claude", "ChatGPT", "Claude Code"] },
  { title: "CRM", icon: Users, items: ["GoHighLevel", "HubSpot", "Salesforce"] },
  { title: "Automation", icon: Workflow, items: ["Make.com", "Zapier"] },
  { title: "Lead Generation", icon: Zap, items: ["RB2B", "Leadrox", "Apollo.io"] },
  { title: "Web & eCommerce", icon: Globe, items: ["WordPress", "WooCommerce", "Shopify", "BigCommerce", "HTML", "CSS", "JavaScript"] },
  { title: "SEO", icon: Search, items: ["Google Search Console", "Semrush", "Google Analytics"] },
  { title: "Data & Reporting", icon: Database, items: ["Supabase", "SQL", "Postgres", "Power BI"] },
  { title: "Operations", icon: Sliders, items: ["Monday.com", "Mailchimp", "Skyvia", "QuickBooks", "Acctivate", "AWS LightSail"] },
];

const HOW_I_WORK = [
  { icon: ClipboardCheck, title: "Audit", text: "I review the website, CRM, lead flow, SEO setup, current tools and manual processes." },
  { icon: Map, title: "Map", text: "I map the customer journey, data flow, workflows and automation opportunities." },
  { icon: Hammer, title: "Build", text: "I create or improve websites, portals, CRM workflows, automations and reporting systems." },
  { icon: Plug, title: "Connect", text: "I integrate GoHighLevel, HubSpot, Make.com, Zapier, RB2B, Leadrox, Slack and reporting platforms." },
  { icon: Wrench, title: "Improve", text: "I test, refine, document and improve the system so it is easier to manage long term." },
];

const WORKFLOW_STEPS = [
  { icon: Globe, title: "Website visitor" },
  { icon: Zap, title: "RB2B / Leadrox identifies intent" },
  { icon: Users, title: "Lead enters GoHighLevel or HubSpot" },
  { icon: Sparkles, title: "Tagged by source, service & location" },
  { icon: MessageSquare, title: "Slack alert triggered" },
  { icon: CheckCircle2, title: "Follow-up task created" },
  { icon: Bell, title: "Email / SMS workflow starts" },
  { icon: BarChart3, title: "Reporting dashboard updates" },
];

function useReveal() {
  useEffect(() => {
    const revealAll = () => document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));

    if (typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const observed = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          io.observe(el);
        }
      });
    };

    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    const t = window.setTimeout(revealAll, 2000);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(t);
    };
  }, []);
}

function Portfolio() {
  useReveal();
  const [filter, setFilter] = useState<Category>("All");
  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.filter.includes(filter as Exclude<Category, "All">))),
    [filter]
  );

  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; fallbackSrc?: string } | null>(null);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const openLightbox = (src: string, alt: string, fallbackSrc?: string) => {
    setLightboxImage({ src, alt, fallbackSrc });
  };
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ProofSnapshot />
      <About />
      <Projects projects={filtered} filter={filter} setFilter={setFilter} onImageClick={openLightbox} onOpenDetails={setOpenProject} />
      <LineageShowcase onImageClick={openLightbox} />
      <SystemsSection />
      <WorkflowSection />
      <HowIWorkSection />
      <ToolsSection />
      <CredibilityNote />
      <CTASection />
      <Footer />
      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
    </div>
  );
}

/* ---------------- Sections ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Home", "#home"],
    ["Projects", "#projects"],
    ["Lineage Portal", "#lineage"],
    ["Systems", "#systems"],
    ["Tools", "#tools"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl tracking-tight">
          Gabriella Maccioni
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="md:hidden"><ThemeToggle /></div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const stored = (typeof localStorage !== "undefined" && localStorage.getItem("theme")) as "light" | "dark" | null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("theme", next); } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-surface hover:bg-beige transition-colors text-foreground"
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--surface) 0%, var(--background) 60%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs uppercase tracking-wider text-muted-foreground mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
          My Professional Portfolio
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: "60ms" }}>
          AI, Web &amp; Systems<br />
          <span className="italic text-muted-foreground">Specialist.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "140ms" }}>
          I build and improve websites, custom portals, CRM workflows, automations and reporting systems that help businesses reduce manual work, improve visibility and manage leads, customers and operations more effectively.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#lineage"
            className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-full text-sm font-medium hover:bg-surface transition"
          >
            View Lineage Portal Case Study
          </a>
        </div>
      </div>
    </section>
  );
}

function ProofSnapshot() {
  return (
    <section className="pb-8 -mt-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {PROOF_CARDS.map(({ icon: Icon, stat, label }, i) => (
            <div
              key={label}
              className="reveal bg-card border border-border rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] transition-all duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <Icon className="w-4 h-4 text-muted-foreground mb-3" />
              <div className="font-display text-2xl md:text-3xl leading-none">{stat}</div>
              <div className="text-xs text-muted-foreground mt-2 leading-snug">{label}</div>
            </div>
          ))}
        </div>
        <p className="reveal text-sm text-muted-foreground text-center mt-6 max-w-3xl mx-auto">
          A practical portfolio across web development, eCommerce, CRM workflows, SEO, systems integration and operational reporting.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">About</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Practical digital systems, built end-to-end.
          </h2>
        </div>
        <div className="reveal space-y-5 text-muted-foreground leading-relaxed">
          <p>
            8+ years of experience across website management, eCommerce, CRM tools, SEO, systems integration and automation. Currently studying BSc Computer Science through the University of London.
          </p>
          <p>
            Hands-on with WordPress, WooCommerce, Shopify, custom portals, HubSpot, GoHighLevel, Make.com, Zapier, RB2B, Leadrox, Mailchimp, Supabase, SQL, Claude and ChatGPT — comfortable across both the technical and business side.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects({
  projects, filter, setFilter, onImageClick, onOpenDetails,
}: { projects: Project[]; filter: Category; setFilter: (c: Category) => void; onImageClick: (src: string, alt: string, fallbackSrc?: string) => void; onOpenDetails: (p: Project) => void }) {
  const cats: Category[] = ["All", "Websites", "eCommerce", "Custom Portals", "CRM & Automation"];
  return (
    <section id="projects" className="py-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 reveal">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Featured work</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
              Selected projects across web, eCommerce and custom systems.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} onImageClick={onImageClick} onOpenDetails={onOpenDetails} />
          ))}
        </div>

        <div className="mt-20 reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Real automations I&apos;ve built</p>
          <h3 className="font-display text-3xl md:text-4xl leading-tight max-w-3xl">
            Workflows running in Make.com, Zapier and GoHighLevel.
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            A look inside the tools I use to connect CRMs, sync data, route leads and trigger notifications across teams.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORKFLOW_SCREENSHOTS.map((s) => (
              <button
                key={s.src}
                onClick={() => onImageClick(s.src, s.alt)}
                className="reveal group text-left bg-card border border-border rounded-2xl overflow-hidden hover:shadow-[var(--shadow-soft)] transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden bg-surface cursor-zoom-in">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5">{s.platform}</p>
                  <p className="text-sm font-medium leading-snug">{s.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, onImageClick, onOpenDetails }: { p: Project; onImageClick?: (src: string, alt: string, fallbackSrc?: string) => void; onOpenDetails: (p: Project) => void }) {
  return (
    <article className="reveal group bg-card rounded-2xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-500 flex flex-col">
      <div
        className="relative aspect-[16/10] overflow-hidden bg-surface cursor-zoom-in"
        onClick={() => onImageClick && onImageClick(p.image, p.name, p.fallbackImage)}
      >
        <ReliableImage
          src={p.image}
          fallbackSrc={p.fallbackImage}
          alt={p.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${p.name}`}
              className="shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{p.category}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.skills.slice(0, 5).map((s) => (
            <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-border text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenDetails(p)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all cursor-pointer"
          >
            View details <ArrowRight className="w-3.5 h-3.5" />
          </button>
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition"
            >
              Visit <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200" onClick={onClose}>
      <div
        className="bg-background border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-surface">
          <ReliableImage src={project.image} fallbackSrc={project.fallbackImage} alt={project.name} className="w-full h-full object-cover object-top" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-7 md:p-9">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{project.category}</p>
          <h3 className="font-display text-3xl md:text-4xl leading-tight mb-5">{project.name}</h3>
          <p className="text-muted-foreground leading-relaxed mb-7">{project.description}</p>
          <div className="grid sm:grid-cols-2 gap-5 mb-7">
            <div className="bg-surface border border-border rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">My role</p>
              <p className="text-sm leading-relaxed">{project.role}</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Business value</p>
              <p className="text-sm leading-relaxed">{project.value}</p>
            </div>
          </div>
          <div className="mb-7">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Tools &amp; skills</p>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-surface border border-border text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Visit site <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function LineageShowcase({ onImageClick }: { onImageClick: (src: string, alt: string, fallbackSrc?: string) => void }) {
  const features = [
    "Dealer account management",
    "CRM-style prospect logic",
    "Field check-in map",
    "Trade show lead capture",
    "Sales activity tracking",
    "Dashboard reporting",
    "User permissions",
    "Data cleanup",
    "Operational workflows",
  ];
  return (
    <section id="lineage" className="py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Featured case study</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            <span className="italic">Lineage Collections</span> Portal
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A custom internal portal built to centralise sales operations, CRM-style workflows, dealer activity and reporting.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-5">
          <ShowcaseTile src={lineageDashboard.url} fallbackSrc={screenshotPath("lineage-dashboard.jpg")} title="Admin workspace" className="lg:col-span-8 aspect-[16/9]" onImageClick={onImageClick} />
          <ShowcaseTile src={lineageLogin.url} fallbackSrc={screenshotPath("lineage-login.jpg")} title="Branded sign-in" className="lg:col-span-4 aspect-[16/9]" onImageClick={onImageClick} />
          <ShowcaseTile src={lineageCheckins.url} fallbackSrc={screenshotPath("lineage-checkins.jpg")} title="Field check-ins map" className="lg:col-span-6 aspect-[16/10]" onImageClick={onImageClick} />
          <ShowcaseTile src={lineageProspects.url} fallbackSrc={screenshotPath("lineage-prospects.jpg")} title="CRM prospects" className="lg:col-span-6 aspect-[16/10]" onImageClick={onImageClick} />
          <ShowcaseTile src={lineageTradeshow.url} fallbackSrc={screenshotPath("lineage-tradeshow.jpg")} title="Trade show analytics" className="lg:col-span-12 aspect-[21/9]" onImageClick={onImageClick} />
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-3 reveal">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 text-sm">
              <CheckCircle2 className="w-4 h-4 text-foreground/70 shrink-0" />
              <span className="text-muted-foreground">{f}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 reveal">
          {[
            { label: "Problem", text: "Sales, dealer, prospect and operational information was spread across disconnected systems and manual workflows." },
            { label: "Solution", text: "Built a custom portal with CRM-style account management, sales tools, field check-ins, lead tracking, reporting areas and operational visibility." },
            { label: "Result", text: "Created a more centralised system for managing dealer activity, prospects, sales workflows, trade show leads and reporting." },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-2xl p-7">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{item.label}</p>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 reveal">
          <a
            href="https://lineage-portal.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
          >
            Visit lineage-portal.com <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ShowcaseTile({ src, fallbackSrc, title, className, onImageClick }: { src: string; fallbackSrc: string; title: string; className?: string; onImageClick?: (src: string, alt: string, fallbackSrc?: string) => void }) {
  return (
    <figure
      className={`reveal group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] cursor-zoom-in ${className ?? ""}`}
      onClick={() => onImageClick && onImageClick(src, title, fallbackSrc)}
    >
      <ReliableImage src={src} fallbackSrc={fallbackSrc} alt={title} className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
      <figcaption className="absolute bottom-3 left-3 text-[11px] uppercase tracking-wider bg-background/85 backdrop-blur px-2.5 py-1 rounded-full text-foreground border border-border pointer-events-none">
        {title}
      </figcaption>
    </figure>
  );
}

function ReliableImage({ src, fallbackSrc, alt, className, onClick }: { src: string; fallbackSrc?: string; alt: string; className?: string; onClick?: MouseEventHandler<HTMLImageElement> }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="eager"
      decoding="async"
      onClick={onClick}
      onError={(event) => {
        if (fallbackSrc && event.currentTarget.src !== new URL(fallbackSrc, window.location.origin).href) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}

function SystemsSection() {
  return (
    <section id="systems" className="py-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Systems I can build.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SYSTEMS.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="reveal bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Example lead automation workflow</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            From anonymous visitor to tracked, tagged lead.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            This type of workflow helps businesses improve speed-to-lead, reduce missed opportunities and create clearer visibility over where leads are coming from.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 reveal">
          {WORKFLOW_STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative bg-card border border-border rounded-xl p-5 hover:shadow-[var(--shadow-soft)] transition" style={{ transitionDelay: `${i * 30}ms` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-display text-lg text-muted-foreground">0{i + 1}</span>
                </div>
                <p className="text-sm font-medium leading-snug">{s.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowIWorkSection() {
  return (
    <section id="process" className="py-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">How I work</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            A clear process from audit to long-term improvement.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {HOW_I_WORK.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="reveal bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-500"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section id="tools" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Tools &amp; platforms</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            The stack I use day-to-day.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOL_GROUPS.map(({ title, icon: Icon, items }, i) => (
            <div
              key={title}
              className="reveal group bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl mb-3">{title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-surface border border-border text-muted-foreground">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredibilityNote() {
  return (
    <section className="py-20 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-4xl px-6 text-center reveal">
        <Award className="w-5 h-5 mx-auto mb-5 text-muted-foreground" />
        <p className="font-display text-2xl md:text-3xl leading-snug text-foreground">
          I am not only focused on making websites look better.
        </p>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          My focus is on how the website connects into lead capture, CRM follow-up, automation, SEO and reporting. The goal is always to make the business easier to run and easier to measure.
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="mx-auto max-w-4xl px-6 text-center reveal">
        <h2 className="font-display text-4xl md:text-5xl leading-tight">
          Need someone who can connect websites, CRM, SEO and automation?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I help businesses improve their digital systems by building practical websites, portals, CRM workflows, automations and reporting processes.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={CONTACT_EMAIL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            <Mail className="w-4 h-4" /> Email Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-full text-sm font-medium hover:bg-surface transition"
          >
            View Projects
          </a>
          <a
            href="#lineage"
            className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-full text-sm font-medium hover:bg-surface transition"
          >
            View Lineage Portal Case Study
          </a>
        </div>
      </div>
    </section>
  );
}

function Lightbox({ image, onClose }: { image: { src: string; alt: string; fallbackSrc?: string }; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
      <ReliableImage
        src={image.src}
        fallbackSrc={image.fallbackSrc}
        alt={image.alt}
        className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Gabriella Maccioni. All rights reserved.</div>
        <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Available worldwide</div>
      </div>
    </footer>
  );
}
