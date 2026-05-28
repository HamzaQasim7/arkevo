import { FadeIn } from "@/components/motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Flutter Mobile Apps",
    description:
      "Native-quality cross-platform applications for iOS and Android. Built with Flutter — pixel-perfect, 60fps, App Store and Play Store ready.",
    tags: ["Flutter", "Dart", "Firebase", "Clean Architecture"],
    icon: "phone_iphone",
    featured: true,
    span: "md:col-span-8",
  },
  {
    title: "Web & SaaS Platforms",
    description:
      "Full-stack web applications and SaaS products built with Next.js and Supabase.",
    icon: "web",
    featured: false,
    span: "md:col-span-4",
  },
  {
    title: "AI Integration",
    description:
      "Embedding LLMs and AI capabilities into your existing product or greenfield app.",
    icon: "psychology",
    featured: false,
    span: "md:col-span-4",
  },
  {
    title: "Product Strategy",
    description:
      "Technical scoping, architecture planning, and roadmapping for complex products.",
    icon: "map",
    featured: false,
    span: "md:col-span-4",
  },
];

export function Services() {
  return (
    <section id="services" className="py-section">
      <Container>
        <FadeIn>
          <p className="section-label">What we build</p>
          <h2 className="headline mt-4 text-text-primary">
            Every engagement is a product.
          </h2>
          <p className="body-lg mt-4 max-w-xl text-text-secondary">
            We don&apos;t do hourly retainers. We do outcomes.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1} className={service.span}>
              <article
                className={cn(
                  "group card-surface flex h-full flex-col p-8 hover:border-l-2 hover:border-l-accent",
                  service.featured && "border-t-2 border-t-accent"
                )}
              >
                <span
                  className="material-symbols-outlined mb-6 text-[28px] text-text-secondary"
                  aria-hidden
                >
                  {service.icon}
                </span>
                <h3 className="font-display text-xl font-bold text-text-primary">
                  {service.title}
                </h3>
                <p className="body-md mt-3 flex-1 text-text-secondary">
                  {service.description}
                </p>
                {service.tags && (
                  <p className="mt-4 font-body text-sm text-text-muted">
                    {service.tags.join(" · ")}
                  </p>
                )}
                {service.featured && (
                  <p className="mt-6 font-body text-sm font-medium text-accent">
                    Our primary craft →
                  </p>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
