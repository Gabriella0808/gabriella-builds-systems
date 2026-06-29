import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo, type MouseEventHandler } from "react";
import {
  ArrowUpRight, ArrowRight, ExternalLink, Sparkles, X,
  Globe, ShoppingCart, LayoutDashboard, Workflow, Plug, Bot, BarChart3,
  MapPin, Users, Database, Search, Zap, MessageSquare, Bell, CheckCircle2,
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

const WORKFLOW_SCREENSHOTS: { src: string; alt: string; platform: string; title: string }[] = [
  { src: makeScenariosListUrl, alt: "Make.com scenarios list", platform: "Make.com", title: "Scenarios overview — monday.com & SQL Server integrations" },
  { src: makeMondayDatastoreUrl, alt: "Make.com monday.com to Data store scenario", platform: "Make.com", title: "monday.com → Iterator → Data store scenario" },
  { src: zapierZapsListUrl, alt: "Zapier zaps list", platform: "Zapier", title: "Active Zaps — Badger check-ins, rep inactivity alerts" },
  { src: zapierMondayWebhookUrl, alt: "Zapier monday.com webhook workflow", platform: "Zapier", title: "monday.com trigger → Filter → Formatter → Webhook POST" },
  { src: ghlWorkflowsListUrl, alt: "GoHighLevel workflows list", platform: "GoHighLevel", title: "Lamicare Health — lead nurture, abandoned cart & review workflows" },
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
};

const screenshotPath = (filename: string) => `/project-screenshots/${filename}`;

const PROJECTS: Project[] = [
  {
    name: "Lineage Collections Portal",
    category: "Custom Portal / CRM / Reporting / Operations",
    type: "Custom Portal",
    filter: ["Custom Portals", "CRM & Automation"],
    image: lineageTradeshow.url,
    fallbackImage: screenshotPath("lineage-tradeshow.jpg"),
    description:
      "Custom internal business portal built to centralise dealer accounts, sales activity, CRM-style workflows, inventory visibility, reporting, field check-ins, prospects and trade show leads.",
    skills: ["Custom build", "CRM logic", "Field check-ins", "Trade show capture", "Analytics", "Permissions", "Data management", "AI-assisted development"],
  },
  {
    name: "Lamicare",
    url: "https://lamicare.com/",
    category: "Corporate Website / Healthcare",
    type: "Corporate Website",
    filter: ["Websites"],
    image: lamicare.url,
    fallbackImage: screenshotPath("lamicare.jpg"),
    description: "Managed and supported the company website, content updates, product information, maintenance, SEO support and digital platform improvements.",
    skills: ["Website management", "Content", "SEO support", "Maintenance"],
  },
  {
    name: "Dermikelp UK",
    url: "https://dermikelp.co.uk/",
    category: "WordPress / WooCommerce / eCommerce",
    type: "eCommerce",
    filter: ["eCommerce", "Websites"],
    image: dermikelpUk.url,
    fallbackImage: screenshotPath("dermikelp-uk.jpg"),
    description: "Supported website updates, product pages, eCommerce functionality, SEO improvements, technical fixes and content management for the UK store.",
    skills: ["WordPress", "WooCommerce", "SEO", "Technical fixes"],
  },
  {
    name: "Dermikelp South Africa",
    url: "https://www.dermikelp.co.za/",
    category: "WordPress / WooCommerce / SEO",
    type: "eCommerce",
    filter: ["eCommerce", "Websites"],
    image: dermikelpZa.url,
    fallbackImage: screenshotPath("dermikelp-za.jpg"),
    description: "Managed website updates, product content, SEO structure, Google Search Console checks, metadata, internal linking and ongoing improvements.",
    skills: ["WordPress", "WooCommerce", "SEO", "GSC", "Metadata"],
  },
  {
    name: "Vetlomar",
    url: "https://vetlomar.co.za/",
    category: "WordPress / Product Website / SEO",
    type: "Product Website",
    filter: ["Websites"],
    image: vetlomar.url,
    fallbackImage: screenshotPath("vetlomar.jpg"),
    description: "Supported website management, product updates, content changes, SEO improvements, platform maintenance and digital brand visibility.",
    skills: ["WordPress", "SEO", "Content", "Maintenance"],
  },
  {
    name: "DealDock",
    url: "https://dealdock.co.za/",
    category: "Lead Generation / Business Website",
    type: "Lead Generation",
    filter: ["Websites", "CRM & Automation"],
    image: dealdock.url,
    fallbackImage: screenshotPath("dealdock.jpg"),
    description: "Built and managed a digital platform focused on lead generation, business visibility and online conversion.",
    skills: ["Lead gen", "Website build", "Conversion", "Management"],
  },
  {
    name: "Cabinet Beds Microsite",
    url: "https://cabinet-beds.gabriella-524.workers.dev/",
    category: "Custom Microsite / Product Experience",
    type: "Custom Microsite",
    filter: ["Websites", "Custom Portals"],
    image: cabinetBeds.url,
    fallbackImage: screenshotPath("cabinet-beds.jpg"),
    description: "Focused product microsite for cabinet beds, designed to support product discovery, dealer quote flow and a more direct customer journey.",
    skills: ["Custom build", "Quote flow", "Product UX", "Edge deploy"],
  },
  {
    name: "Simple Bru Coffee Co",
    url: "https://simplebrucoffee.co.za/",
    category: "eCommerce Website",
    type: "eCommerce",
    filter: ["eCommerce", "Websites"],
    image: simplebru.url,
    fallbackImage: screenshotPath("simplebru.jpg"),
    description: "Developed and managed the eCommerce website, including product pages, navigation, checkout flow, content, stock visibility and campaign support.",
    skills: ["eCommerce", "Checkout", "Content", "Campaigns"],
  },
];

const CAPABILITY_GROUPS = [
  { title: "CRM Tools", icon: Users, items: ["GoHighLevel", "HubSpot", "Salesforce"] },
  { title: "Automation", icon: Workflow, items: ["Make.com", "Zapier"] },
  { title: "Lead Generation", icon: Zap, items: ["RB2B", "Leadrox", "Apollo.io"] },
  { title: "AI Tools", icon: Bot, items: ["Claude", "ChatGPT", "Claude Code"] },
  { title: "Web & eCommerce", icon: Search, items: ["WordPress", "WooCommerce", "Shopify", "BigCommerce", "HTML", "CSS", "JavaScript", "Google Search Console", "Semrush"] },
  { title: "Data & Reporting", icon: Database, items: ["Supabase", "SQL", "Postgres", "Skyvia", "Power BI", "Operational dashboards"] },
];

const SERVICES = [
  { icon: Globe, title: "Website Development", text: "Build, manage and improve WordPress, WooCommerce, Shopify and custom websites." },
  { icon: Search, title: "SEO Support", text: "Metadata, page structure, internal linking, content, technical health and Google Search Console visibility." },
  { icon: LayoutDashboard, title: "Custom Portals", text: "Internal portals, dashboards, CRM views and workflow systems for business operations." },
  { icon: Users, title: "CRM Setup", text: "GoHighLevel and HubSpot pipelines, tags, lead stages, forms, workflows and reporting." },
  { icon: Plug, title: "Integrations", text: "Connect tools using Make.com, Zapier, APIs, Slack, CRM systems, lead gen tools and reporting." },
  { icon: Bot, title: "AI Automation", text: "Claude, ChatGPT and Claude Code for workflow planning, content, documentation and automation logic." },
  { icon: BarChart3, title: "Reporting", text: "Dashboards and reporting views for leads, sales activity, campaigns, inventory and operations." },
  { icon: ShoppingCart, title: "eCommerce", text: "Product pages, checkout flow, stock visibility, campaign support and conversion improvements." },
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

    // Watch for dynamically added .reveal elements (e.g. when filtering projects)
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety fallback: ensure everything is visible after 2s no matter what
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

  const openLightbox = (src: string, alt: string, fallbackSrc?: string) => {
    setLightboxImage({ src, alt, fallbackSrc });
  };
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects projects={filtered} filter={filter} setFilter={setFilter} onImageClick={openLightbox} />
      <LineageShowcase onImageClick={openLightbox} />
      <Capabilities />
      <WorkflowSection onImageClick={openLightbox} />
      <Services />
      <Footer />
      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
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
    ["Capabilities", "#capabilities"],
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
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-28 overflow-hidden">
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
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "140ms" }}>
          Website development, custom portals, CRM workflows, SEO support, automations and systems integration.
        </p>
        <p className="mt-6 text-base text-muted-foreground/90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "220ms" }}>
          I build practical digital solutions that improve visibility, reduce manual work and help businesses manage leads, customers, products and internal processes more effectively.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    ["8+", "Years experience"],
    ["20+", "Platforms & tools"],
    ["BSc", "Computer Science — UoL"],
  ];
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
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-foreground">{n}</div>
                <div className="text-xs mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects({
  projects, filter, setFilter, onImageClick,
}: { projects: Project[]; filter: Category; setFilter: (c: Category) => void; onImageClick: (src: string, alt: string, fallbackSrc?: string) => void }) {
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
          <ProjectCard key={p.name} p={p} onImageClick={onImageClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, onImageClick }: { p: Project; onImageClick?: (src: string, alt: string, fallbackSrc?: string) => void }) {
  return (
    <article className="reveal group bg-card rounded-2xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-500">
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
      <div className="p-6">
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
          {p.skills.map((s) => (
            <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-border text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
        {p.url ? (
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all"
          >
            Visit site <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <a href="#lineage" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all">
            View case study <ArrowRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}

function LineageShowcase({ onImageClick }: { onImageClick: (src: string, alt: string, fallbackSrc?: string) => void }) {
  const features = [
    "Dealer & prospect management",
    "CRM-style account logic",
    "Sales rep workflows",
    "Field check-in tracking",
    "Map-based dealer visibility",
    "Trade show lead capture",
    "Analytics dashboards",
    "User permissions",
    "Data cleanup & reporting",
    "Operational workflow support",
  ];
  return (
    <section id="lineage" className="py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Case study</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Custom Portal Build: <span className="italic">Lineage Collections</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A custom internal portal built to centralise sales operations, dealer management, CRM-style workflows, field check-ins, trade show lead tracking, reporting and internal business processes.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-5">
          <ShowcaseTile src={lineageDashboard.url} fallbackSrc={screenshotPath("lineage-dashboard.jpg")} title="Admin workspace" className="lg:col-span-8 aspect-[16/9]" onImageClick={onImageClick} />
          <ShowcaseTile src={lineageLogin.url} fallbackSrc={screenshotPath("lineage-login.jpg")} title="Branded sign-in" className="lg:col-span-4 aspect-[16/9]" onImageClick={onImageClick} />
          <ShowcaseTile src={lineageCheckins.url} fallbackSrc={screenshotPath("lineage-checkins.jpg")} title="Field check-ins map" className="lg:col-span-6 aspect-[16/10]" onImageClick={onImageClick} />
          <ShowcaseTile src={lineageProspects.url} fallbackSrc={screenshotPath("lineage-prospects.jpg")} title="CRM prospects" className="lg:col-span-6 aspect-[16/10]" onImageClick={onImageClick} />
          <ShowcaseTile src={lineageTradeshow.url} fallbackSrc={screenshotPath("lineage-tradeshow.jpg")} title="Trade show analytics" className="lg:col-span-12 aspect-[21/9]" onImageClick={onImageClick} />
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-3 reveal">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 text-sm">
              <CheckCircle2 className="w-4 h-4 text-foreground/70 shrink-0" />
              <span className="text-muted-foreground">{f}</span>
            </div>
          ))}
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

function Capabilities() {
  return (
    <section id="capabilities" className="py-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Stack</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Systems, CRM &amp; Automation Capabilities
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITY_GROUPS.map(({ title, icon: Icon, items }) => (
            <div key={title} className="reveal group bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-500">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl mb-3">{title}</h3>
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

function WorkflowSection({ onImageClick }: { onImageClick: (src: string, alt: string, fallbackSrc?: string) => void }) {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Example workflow</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            From anonymous visitor to tracked, tagged lead.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            This type of workflow helps businesses improve speed-to-lead, reduce missed opportunities and create better visibility over where leads are coming from.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 reveal">
          {WORKFLOW_STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative bg-card border border-border rounded-xl p-5 hover:shadow-[var(--shadow-soft)] transition">
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

function Services() {
  return (
    <section className="py-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">What I help with</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Services for teams that need to ship and operate.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="reveal bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-500">
              <Icon className="w-5 h-5 mb-5" />
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
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
