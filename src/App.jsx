import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Layers,
  Box,
  Orbit,
  Building2,
  PlayCircle,
} from "lucide-react";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const PROJECTS = [
  {
    title: "LOVT VIBE — Office Building",
    meta: "Munich • Concept → Execution Planning",
    tags: ["BIM", "LPH 2–5", "Details"],
    img: "https://images.unsplash.com/photo-1529421308418-eab98863cee6?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Urban Housing — ISB Pipeline",
    meta: "Rheinland-Pfalz • Feasibility + Permit Planning",
    tags: ["Permits", "Costs", "Speed"],
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "Hospitality — Hotel & Public Spaces",
    meta: "DACH • Planning + Visualization",
    tags: ["Hospitality", "FF&E", "Story"],
    img: "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&w=1800&q=80",
  },
  {
    title: "360° VR — Interactive Walkthrough",
    meta: "Marketing • Animation • Product Viz",
    tags: ["VR", "Animation", "Realism"],
    img: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1800&q=80",
  },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Architecture",
    items: [
      "Basic Evaluation",
      "Preliminary Planning",
      "Design Planning",
      "Approval Planning",
      "Execution Planning",
      "Preparation of Contract Awards",
    ],
    accent: "from-blue-500/20 via-purple-500/15 to-cyan-400/15",
  },
  {
    icon: Orbit,
    title: "Urban Planning",
    items: [
      "Preliminary Draft for Early Participation",
      "Draft for Public Display",
      "Plan for Decision Making",
    ],
    accent: "from-orange-400/20 via-red-400/12 to-purple-400/15",
  },
  {
    icon: Layers,
    title: "Construction Drawing",
    items: ["Architecture", "Structural Engineering", "Civil, Road, and Landscape Construction"],
    accent: "from-green-500/18 via-cyan-500/12 to-emerald-400/12",
  },
  {
    icon: Box,
    title: "Visualizations",
    items: ["Visualizations", "Animations", "Product Visualizations", "360° VR"],
    accent: "from-cyan-500/18 via-blue-500/12 to-indigo-500/15",
  },
];

export default function APlusAStudioSite() {
  const [active, setActive] = useState(0);

  const nav = useMemo(
    () => [
      { key: "work", label: "Work" },
      { key: "services", label: "Services" },
      { key: "studio", label: "Studio" },
      { key: "contact", label: "Contact" },
    ],
    []
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950 selection:bg-neutral-950/10 selection:text-neutral-950">
      <BackgroundGrid />

      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollTo("top")}
            className="group flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-neutral-100"
            aria-label="Go to top"
          >
            <Mark />
            <span className="text-sm tracking-wide text-neutral-900 group-hover:text-neutral-950">
              a+a studio
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <button
                key={n.key}
                onClick={() => scrollTo(n.key)}
                className="rounded-full px-3 py-2 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:pb-20 md:pt-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-balance text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
              >
                <span className="block">Design</span>
                <span className="relative inline-block">
                  <span className="relative z-10">without</span>
                  <span className="absolute -inset-x-1 -inset-y-2 -z-0 h-full rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-lg" />
                </span>
                <span className="block">compromise</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 md:text-lg"
              >
                Europe-based architecture studio delivering permit planning, execution drawings, and high-end visualizations. We work with firms across the continent to accelerate design delivery without compromising precision.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14 }}
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("work");
                  }}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  See selected work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("services");
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100"
                >
                  What we do <Sparkles className="h-4 w-4" />
                </a>
                <div className="hidden items-center gap-2 pl-1 text-xs text-neutral-500 sm:flex">
                  <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
                  Available for new partner work
                </div>
              </motion.div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <Stat k="30–40€" v="Typical hourly rate" />
                <Stat k="BIM-ready" v="Revit / IFC workflows" />
                <Stat k="Partner mode" v="Like an internal team" />
              </div>
            </div>

            <div className="md:col-span-5">
              <HeroStack active={active} setActive={setActive} />
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-4 py-14 md:py-24">
          <div className="mb-12 grid gap-8 md:grid-cols-5 md:items-end">
            <div className="md:col-span-3">
              <div className="inline-block">
                <span className="inline-block rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">Work</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-700">Featured</span> Projects</h2>
            </div>
            <div className="md:col-span-2 text-right">
              <button className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100 active:scale-95">
                View all work <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-14 md:py-24">
          <div className="mb-12">
            <div className="inline-block">
              <span className="inline-block rounded-full border border-purple-300 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-700 mb-3">Expertise</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl mt-3">What we <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400">deliver</span></h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
              From permit planning to pixel-perfect visualization — we handle the full spectrum of architectural delivery.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5 space-y-6">
              <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-full border border-blue-300 bg-blue-100 p-2">
                    <PlayCircle className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Deep collaboration</div>
                    <div className="mt-1 text-sm text-neutral-700">
                      We're not a vendor — we're an extension of your team. Weekly syncs, shared models, and real-time problem-solving.
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <Pill>Revit Standards</Pill>
                  <Pill>IFC Ready</Pill>
                  <Pill>Detail-First</Pill>
                  <Pill>Fast Delivery</Pill>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <ServiceCard key={s.title} s={s} />
                ))}
              </div>
            </div>
          </div>
        </section>

          <div className="mb-12">
            <div className="inline-block">
              <span className="inline-block rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-3">About</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl mt-3">Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400">perfectionists</span></h2>
          </div>
            <div className="md:col-span-6">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Studio</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                We’re small on purpose. Senior hands on the work. No layers. No noise.
                Just reliable output you can trust.
              </p>

              <div className="mt-7 rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">Manifesto</div>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-700">
                  <p>
                    <span className="text-neutral-950">Design is a contract</span> between intention and reality.
                    Our job is to make sure nothing gets lost between the sketch, the model, and the site.
                  </p>
                  <p>
                    We love partners who move fast and care about precision. If that’s you, we’ll feel like
                    your internal production team — just with a different timezone.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="grid gap-4 sm:grid-cols-3">
                <TeamCard
                  name="Principal Architect"
                  role="Design & Planning"
                  img="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&fit=crop&w=1200&q=80"
                />
                <TeamCard
                  name="Senior Architect"
                  role="Construction Drawing"
                  img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                />
                <TeamCard
                  name="Project Manager"
                  role="Client Relations"
                  img="https://images.unsplash.com/photo-1520975682071-a8d19f4f4b3a?auto=format&fit=crop&w=1200&q=80"
                />
              </div>

              <div className="mt-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium">European-based team • Digital-first workflow</div>
                    <div className="mt-1 text-sm text-neutral-600">Architecture, planning, technical drawings, visualization, and delivery.</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-blue-400" />
                    <span className="text-xs text-neutral-500">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 md:pb-28 md:pt-24">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-100/60 via-purple-100/30 to-pink-100/40 blur-3xl" />
          <div className="mb-12">
            <div className="inline-block">
              <span className="inline-block rounded-full border border-indigo-300 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-700 mb-3">Get Started</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl mt-3">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-400">create</span> together</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Tell us about your project. We'll respond with a concrete plan, timeline, and investment.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 shadow-lg shadow-blue-500/10">
            <div className="grid gap-0 md:grid-cols-12">
              <div className="p-7 md:col-span-5 md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Let's build something clean
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">Reach out</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Send a short message with your scope and timeline. We’ll reply with a suggested setup
                  (tools, cadence, deliverables) and a clear estimate.
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <ContactRow icon={Mail} label="hello@studio.architect" />
                  <ContactRow icon={Phone} label="+49 (0) 30 ••• ••••" />
                  <ContactRow icon={MapPin} label="Central Europe, EU" />
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/55">Best first message</div>
                  <div className="mt-2 text-sm text-white/70">
                    “We need help with <span className="text-white">LPH/phase</span>, BIM/IFC standards, and delivery dates. Here are the
                    drawings/models we have.”
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 p-7 md:col-span-7 md:border-l md:border-t-0 md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-neutral-200 pt-8 md:flex-row md:items-center">
            <div className="text-sm text-neutral-600">© {new Date().getFullYear()} a+a studio. All rights reserved.</div>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-neutral-400" />
              Built for speed • Designed to stand out
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

function Mark() {
  return (
    <div className="relative flex h-8 w-8 items-center justify-center">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/35 via-purple-400/25 to-pink-400/20 blur-sm" />
      <div className="relative grid h-8 w-8 place-items-center rounded-2xl border border-neutral-200 bg-neutral-50 text-[11px] font-semibold tracking-tight text-neutral-900">
        a+a
      </div>
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Animated gradient orbs */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl animate-pulse" />
      <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-purple-200/15 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-pink-200/15 blur-3xl animate-pulse" style={{animationDelay: '2s'}} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />
    </div>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="text-lg font-semibold tracking-tight">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-500">{v}</div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 px-3 py-2 text-xs text-neutral-700">
      {children}
    </div>
  );
}

function ProjectCard({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50"
    >
      <div className="absolute inset-0">
        <img src={p.img} alt={p.title} className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-white/5" />
      </div>
      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-700">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">{p.title}</h3>
        <p className="mt-1 text-sm text-neutral-700">{p.meta}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-800">
          Open case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.article>
  );
}

function ServiceCard({ s }) {
  const Icon = s.icon;
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6">
      <div className={`absolute -inset-10 bg-gradient-to-br ${s.accent} blur-2xl opacity-40`} />
      <div className="relative">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-2">
            <Icon className="h-5 w-5 text-neutral-700" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-neutral-950">{s.title}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-500">plug-in support</div>
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-neutral-700">
          {s.items.map((it) => (
            <li key={it} className="flex gap-2">
              <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TeamCard({ name, role, img }) {
  return (
    <div className="group overflow-hidden rounded-[1.6rem] border border-neutral-200 bg-neutral-50">
      <div className="relative h-44">
        <img src={img} alt={name} className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-white/5" />
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold tracking-tight text-neutral-950">{name}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-500">{role}</div>
      </div>
    </div>
  );
}

function ContactRow({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-100 px-4 py-3">
      <div className="rounded-xl border border-neutral-200 bg-white p-2">
        <Icon className="h-4 w-4 text-neutral-700" />
      </div>
      <div className="text-neutral-950">{label}</div>
    </div>
  );
}

function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
    setState({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium">Project inquiry</div>
          <div className="mt-1 text-sm text-neutral-600">We reply with a clean plan: scope → workflow → price.</div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-xs text-neutral-700 sm:flex">
          <Sparkles className="h-3.5 w-3.5" />
          Fast + precise
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Name"
            placeholder="Your name"
            value={state.name}
            onChange={(v) => setState((s) => ({ ...s, name: v }))}
            required
          />
          <Field
            label="Email"
            type="email"
            placeholder="you@company.com"
            value={state.email}
            onChange={(v) => setState((s) => ({ ...s, email: v }))}
            required
          />
        </div>
        <Field
          label="Company / Studio"
          placeholder="Company name"
          value={state.company}
          onChange={(v) => setState((s) => ({ ...s, company: v }))}
        />
        <Field
          label="Message"
          placeholder="What are you building? Which phase? Any deadlines?"
          value={state.message}
          onChange={(v) => setState((s) => ({ ...s, message: v }))}
          textarea
          required
        />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Send message <ArrowRight className="h-4 w-4" />
          </button>
          <div className="text-xs text-neutral-500">
            No spam. No newsletters. Just project talk.
          </div>
        </div>

        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="rounded-2xl border border-green-300 bg-green-100 px-4 py-3 text-sm text-green-900"
            >
              Sent (demo). In production, wire this to Formspree / Resend / your API.
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <div className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-100 p-5">
        <div className="text-xs uppercase tracking-[0.18em] text-neutral-500">Optional add-on</div>
        <div className="mt-2 text-sm text-neutral-700">
          Want it extra different? Add a “case study” page per project with interactive before/after sliders,
          BIM viewer embeds, and a scrolling detail narrative.
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", textarea = false, required = false }) {
  const base =
    "w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 outline-none transition focus:border-neutral-400 focus:bg-white";
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.18em] text-neutral-500">{label}</span>
      {textarea ? (
        <textarea
          className={`${base} min-h-[120px] resize-none`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          className={base}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          required={required}
        />
      )}
    </label>
  );
}

function HeroStack({ active, setActive }) {
  const cards = [
    {
      title: "Permit & execution planning",
      desc: "Clean deliverables, predictable coordination, no surprises.",
    },
    {
      title: "Construction drawings",
      desc: "Details that contractors can actually build from.",
    },
    {
      title: "Visualization that sells",
      desc: "Images & animation that communicate the idea instantly.",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-100/40 via-purple-100/20 to-pink-100/30 blur-xl" />

      <div className="relative rounded-[2rem] border border-neutral-200 bg-white p-6  shadow-sm shadow-blue-500/5">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-700">What we deliver</div>
          <div className="text-xs text-neutral-400">click to explore</div>
        </div>

        <div className="mt-4 space-y-3">
          {cards.map((c, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={c.title}
                onClick={() => setActive(idx)}
                className={`w-full text-left transition ${
                  isActive ? "" : "opacity-80 hover:opacity-100"
                }`}
              >
                <motion.div
                  layout
                  className={`relative overflow-hidden rounded-[1.6rem] border border-neutral-200 bg-white p-4 ${
                    isActive ? "shadow-md shadow-blue-500/15" : "shadow-sm shadow-neutral-500/5"
                  } transition-all`}
                >
                  <div className="absolute inset-0">
                    <div
                      className={`absolute -inset-10 blur-2xl transition ${
                        isActive
                          ? "bg-gradient-to-br from-blue-400/15 via-purple-400/10 to-pink-400/10"
                          : "bg-gradient-to-br from-blue-400/8 via-purple-400/5 to-pink-400/5"
                      }`}
                    />
                  </div>
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold tracking-tight text-neutral-950">{c.title}</div>
                        <div className="mt-1 text-sm text-neutral-600">{c.desc}</div>
                      </div>
                      <div className="rounded-2xl border border-neutral-200 bg-white p-2">
                        <Sparkles className="h-4 w-4 text-neutral-700" />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="mt-3 flex flex-wrap gap-2"
                        >
                          <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                            Revit / IFC
                          </span>
                          <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                            Detail planning
                          </span>
                          <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                            Weekly handover
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-[1.6rem] border border-neutral-200 bg-white p-4 shadow-sm shadow-blue-500/10">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-neutral-950">Visual differentiation</div>
            <div className="text-xs text-neutral-500">what we stand for</div>
          </div>
          <div className="mt-2 text-sm text-neutral-700">
            Modern, intentional design that moves without distraction. No stock components — every interaction serves a purpose.
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-neutral-300">
            <div
              className="h-2 rounded-full bg-neutral-700"
              style={{ width: `${clamp(35 + active * 22, 35, 85)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
