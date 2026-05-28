import { FadeIn } from "@/components/motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "We listen before we build.",
    duration: "2-3 Days",
    artifact: "Scope Document",
    description:
      "We align on goals, users, constraints, and business outcomes before writing implementation plans.",
    deliverables: ["Requirements brief", "Technical audit", "Risk mapping"],
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Architecture over aesthetics.",
    duration: "1 Week",
    artifact: "Technical Specs",
    description:
      "We define system architecture, data model, integrations, and delivery milestones with clear trade-offs.",
    deliverables: ["System design", "Database schema", "Execution plan"],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "High-fidelity product flows.",
    duration: "1-2 Weeks",
    artifact: "Figma + UX Flows",
    description:
      "We build design systems and user flows that map directly to components and engineering implementation.",
    deliverables: ["Design system", "Core screens", "Interaction specs"],
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Deterministic engineering.",
    duration: "4-8 Weeks",
    artifact: "Staging Build",
    description:
      "Sprint-based development with regular demos, code reviews, and CI checks to keep progress transparent.",
    deliverables: ["Feature delivery", "CI/CD pipeline", "Weekly demos"],
  },
  {
    number: "05",
    title: "Quality Assurance",
    subtitle: "Zero-defect mindset.",
    duration: "1 Week",
    artifact: "UAT Report",
    description:
      "We run functional, edge-case, and device testing to ensure confidence before launch.",
    deliverables: ["Regression testing", "Performance checks", "UAT fixes"],
  },
  {
    number: "06",
    title: "Deployment",
    subtitle: "Safe, scalable handoff.",
    duration: "2-3 Days",
    artifact: "Production Release",
    description:
      "We launch with monitoring, documentation, and complete ownership transfer for long-term maintainability.",
    deliverables: ["Release checklist", "Monitoring setup", "Handover docs"],
  },
] as const;

export function HowWeBuild() {
  return (
    <section className="bg-surface py-section" id="process">
      <Container>
        <FadeIn>
          <p className="section-label">Our product development process</p>
          <h2 className="headline mt-4 text-text-primary">
            Our product development process
          </h2>
          <p className="body-lg mt-4 max-w-3xl border-l-2 border-border-low pl-6 text-text-secondary">
            No surprises. No black boxes. A transparent, structured process from
            discovery to deployment.
          </p>
        </FadeIn>

        <div className="mt-12 border border-border-low bg-bg">
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.06}>
              <details
                className={cn(
                  "group border-l-[3px] border-transparent px-6 py-6 transition-all duration-300 open:border-l-accent open:bg-surface/60 hover:border-l-accent/70 hover:bg-surface/40 md:px-8",
                  index !== processSteps.length - 1 && "border-b border-border-low"
                )}
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-5">
                    <span className="font-display text-3xl font-bold text-text-muted/60 md:text-4xl">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-1 font-body text-sm italic text-text-secondary">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded border border-accent-border bg-accent-bg px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
                      {step.duration}
                    </span>
                    <span className="font-body text-[11px] uppercase tracking-[0.1em] text-text-muted">
                      {step.artifact}
                    </span>
                    <span className="material-symbols-outlined text-accent transition-transform duration-300 group-open:rotate-180">
                      expand_more
                    </span>
                  </div>
                </summary>

                <div className="mt-6 border-t border-dashed border-border-low pt-6">
                  <p className="body-md text-text-secondary">{step.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span
                        key={`${step.number}-${item}`}
                        className="rounded border border-border-low bg-surface px-2.5 py-1 font-mono text-[12px] text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
