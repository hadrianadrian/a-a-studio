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
    accent: "from-fuchsia-500/30 via-indigo-500/20 to-cyan-400/20",
  },
  {
    icon: Orbit,
    title: "Urban Planning",
    items: [
      "Preliminary Draft for Early Participation",
      "Draft for Public Display",
      "Plan for Decision Making",
    ],
    accent: "from-amber-400/25 via-rose-500/15 to-violet-500/20",
  },
  {
    icon: Layers,
    title: "Construction Drawing",
    items: ["Architecture", "Structural Engineering", "Civil, Road, and Landscape Construction"],
    accent: "from-emerald-500/20 via-sky-500/15 to-lime-400/15",
  },
  {
    icon: Box,
    title: "Visualizations",
    items: ["Visualizations", "Animations", "Product Visualizations", "360° VR"],
    accent: "from-cyan-400/25 via-blue-500/15 to-fuchsia-500/20",
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
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white/10 selection:text-white">
      <BackgroundGrid />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollTo("top")}
            className="group flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-white/5"
            aria-label="Go to top"
          >
            <Mark />
            <span className="text-sm tracking-wide text-white/80 group-hover:text-white">
              a+a studio
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <button
                key={n.key}
                onClick={() => scrollTo(n.key)}
                className="rounded-full px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
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
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:opacity-90"
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
                className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
              >
                We build <span className="text-white/70">clarity</span> — and then we make it
                <span className="relative ml-2 inline-block">
                  <span className="relative z-10">beautifully inevitable</span>
                  <span className="absolute -inset-x-1 -bottom-1 -z-0 h-3 rounded-full bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/25 to-amber-400/20 blur-sm" />
                </span>
                .
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 md:text-lg"
              >
                a+a studio is a Kosovo-based team collaborating with architecture firms across
                Europe. We deliver permit & execution planning, construction drawings, and
                high-end visual storytelling — fast, precise, and partner-friendly.
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
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                >
                  See selected work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("services");
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  What we do <Sparkles className="h-4 w-4" />
                </a>
                <div className="hidden items-center gap-2 pl-1 text-xs text-white/50 sm:flex">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
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

        <section id="work" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Selected work</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
                A few examples of the kind of work we love: clear plans, sharp details, and
                visuals that sell the story.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10">
              View full portfolio <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Services</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                We’re intentionally end‑to‑end. You can plug us into a single phase or use us as
                a full production partner. Our goal: reduce your coordination load and increase
                your output quality.
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-2xl border border-white/10 bg-white/5 p-2">
                    <PlayCircle className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">How we work with partners</div>
                    <div className="mt-1 text-sm text-white/65">
                      A clean handover, weekly checkpoints, shared model standards, and deliverables
                      you can issue directly.
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Pill>Clear LOD & naming</Pill>
                  <Pill>Fast iterations</Pill>
                  <Pill>Detail-first mindset</Pill>
                  <Pill>Documentation discipline</Pill>
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

        <section id="studio" className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Studio</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                We’re small on purpose. Senior hands on the work. No layers. No noise.
                Just reliable output you can trust.
              </p>

              <div className="mt-7 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-white/50">Manifesto</div>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
                  <p>
                    <span className="text-white">Design is a contract</span> between intention and reality.
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
                  name="Arlind Krasniqi"
                  role="Founder & M.A. Architect"
                  img="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&fit=crop&w=1200&q=80"
                />
                <TeamCard
                  name="Ardi Pireva"
                  role="M.A. Architect"
                  img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                />
                <TeamCard
                  name="Adrian Krasniqi"
                  role="Business Development"
                  img="https://images.unsplash.com/photo-1520975682071-a8d19f4f4b3a?auto=format&fit=crop&w=1200&q=80"
                />
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium">Based in Kosovo • Working with DACH</div>
                    <div className="mt-1 text-sm text-white/65">Permit planning, execution planning, construction drawings, visualization.</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-amber-300" />
                    <span className="text-xs text-white/55">Typical response: same day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 pt-14 md:pb-28 md:pt-18">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-white/0">
            <div className="grid gap-0 md:grid-cols-12">
              <div className="p-7 md:col-span-5 md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
                  <Sparkles className="h-3.5 w-3.5" />
                  Let’s build something clean
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">Reach out</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Send a short message with your scope and timeline. We’ll reply with a suggested setup
                  (tools, cadence, deliverables) and a clear estimate.
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <ContactRow icon={Mail} label="info@aplusa-studio.com" />
                  <ContactRow icon={Phone} label="+49 1567 9350899" />
                  <ContactRow icon={MapPin} label="Sheshi Adem Jashari, Vushtrri, Kosovo" />
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/55">Best first message</div>
                  <div className="mt-2 text-sm text-white/70">
                    “We need help with <span className="text-white">LPH/phase</span>, BIM/IFC standards, and delivery dates. Here are the
                    drawings/models we have.”
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 p-7 md:col-span-7 md:border-l md:border-t-0 md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <div className="text-sm text-white/60">© {new Date().getFullYear()} a+a studio. All rights reserved.</div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span className="inline-flex h-2 w-2 rounded-full bg-white/30" />
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
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/35 via-cyan-400/25 to-amber-400/20 blur-sm" />
      <div className="relative grid h-8 w-8 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[11px] font-semibold tracking-tight">
        a+a
      </div>
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.85)_85%)]" />
    </div>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <div className="text-lg font-semibold tracking-tight">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">{v}</div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
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
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
    >
      <div className="absolute inset-0">
        <img src={p.img} alt={p.title} className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-neutral-950/10" />
      </div>
      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-white/75">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h3>
        <p className="mt-1 text-sm text-white/70">{p.meta}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80">
          Open case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.article>
  );
}

function ServiceCard({ s }) {
  const Icon = s.icon;
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <div className={`absolute -inset-10 bg-gradient-to-br ${s.accent} blur-2xl`} />
      <div className="relative">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
            <Icon className="h-5 w-5 text-white/80" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">{s.title}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">plug-in support</div>
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {s.items.map((it) => (
            <li key={it} className="flex gap-2">
              <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
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
    <div className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
      <div className="relative h-44">
        <img src={img} alt={name} className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/35 to-neutral-950/5" />
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold tracking-tight">{name}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">{role}</div>
      </div>
    </div>
  );
}

function ContactRow({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="rounded-xl border border-white/10 bg-white/5 p-2">
        <Icon className="h-4 w-4 text-white/80" />
      </div>
      <div className="text-white/80">{label}</div>
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
          <div className="mt-1 text-sm text-white/65">We reply with a clean plan: scope → workflow → price.</div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/65 sm:flex">
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
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:opacity-90"
          >
            Send message <ArrowRight className="h-4 w-4" />
          </button>
          <div className="text-xs text-white/50">
            No spam. No newsletters. Just project talk.
          </div>
        </div>

        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"
            >
              Sent (demo). In production, wire this to Formspree / Resend / your API.
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="text-xs uppercase tracking-[0.18em] text-white/55">Optional add-on</div>
        <div className="mt-2 text-sm text-white/70">
          Want it extra different? Add a “case study” page per project with interactive before/after sliders,
          BIM viewer embeds, and a scrolling detail narrative.
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", textarea = false, required = false }) {
  const base =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/20 focus:bg-white/7";
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.18em] text-white/55">{label}</span>
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
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/15 via-cyan-400/10 to-amber-400/10 blur-2xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase tracking-[0.18em] text-white/55">Live capabilities</div>
          <div className="text-xs text-white/45">click to switch</div>
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
                  className={`relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-4 ${
                    isActive ? "" : ""
                  }`}
                >
                  <div className="absolute inset-0">
                    <div
                      className={`absolute -inset-10 blur-2xl transition ${
                        isActive
                          ? "bg-gradient-to-br from-white/12 via-white/5 to-white/0"
                          : "bg-gradient-to-br from-white/6 via-white/3 to-white/0"
                      }`}
                    />
                  </div>
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold tracking-tight">{c.title}</div>
                        <div className="mt-1 text-sm text-white/65">{c.desc}</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                        <Sparkles className="h-4 w-4 text-white/75" />
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
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                            Revit / IFC
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                            Detail planning
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
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

        <div className="mt-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Stand-out factor</div>
            <div className="text-xs text-white/50">anti-template design</div>
          </div>
          <div className="mt-2 text-sm text-white/65">
            Bold typography, editorial sections, and movement that feels intentional — not gimmicky.
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-white/60"
              style={{ width: `${clamp(35 + active * 22, 35, 85)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
