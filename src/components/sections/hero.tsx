import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmberDot } from "@/components/ui/ember-dot";
import { cn } from "@/lib/utils";

type PreviewProject = {
  name: string;
  title: string;
  description: string;
  badge: string;
  badgeClass: string;
  aspect: string;
  tint: string;
  initials: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  tags?: string;
};

const previewProjects: PreviewProject[] = [
  {
    name: "Profound Aminos",
    title: "WooCommerce Store Management System",
    description:
      "Built a comprehensive store management app with revenue analytics, inventory control, and customer support integration for a live e-commerce brand.",
    tags: "Flutter · WooCommerce API · WordPress",
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    aspect: "aspect-[4/5]",
    tint: "from-accent-bg to-surface-2",
    initials: "PA",
    image: "/thumbs/profound-aminos-thumb.png",
    imageWidth: 1000,
    imageHeight: 1250,
  },
  {
    name: "ValiseIQ",
    title: "Airline Baggage Protection and Claims App",
    description:
      "Cross-platform mobile app enabling travelers to register luggage pre-flight, track bags in real time, and file damage or missing/delayed baggage claims with cryptographic evidence and MC99 deadline tracking.",
    tags: "Flutter · Fastify · PostgreSQL · Firebase Auth/Storage/FCM",
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    aspect: "aspect-[16/11]",
    tint: "from-surface-2 to-bg",
    initials: "VQ",
    image: "/thumbs/valiseiq-thumb.png",
    imageWidth: 1200,
    imageHeight: 825,
  },
  {
    name: "RealtyTextPro",
    title: "Real Estate CRM Platform",
    description:
      "Delivered an end-to-end CRM for real estate professionals managing client pipelines, appointment scheduling, and deal tracking across iOS and Android.",
    tags: "Flutter · Firebase · REST APIs",
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    aspect: "aspect-[4/5]",
    tint: "from-bg to-surface-2",
    initials: "RT",
    image: "/thumbs/realty-text-pro-thumb.png",
    imageWidth: 1000,
    imageHeight: 1250,
  },
  {
    name: "Hambar",
    title: "Custom WooCommerce Store Mobile App",
    description:
      "Custom WooCommerce store mobile app with full web-parity operations — ordering, payment gateway checkout, order filtering, tracking, and product recommendations.",
    tags: "Flutter · WooCommerce · REST API",
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    aspect: "aspect-[16/11]",
    tint: "from-accent-bg/60 to-surface-2",
    initials: "HB",
    image: "/thumbs/hambar-thumb.png",
    imageWidth: 1200,
    imageHeight: 825,
  },
];

function FeaturedProjectCard({ project }: { project: PreviewProject }) {
  return (
    <article className="group text-left">
      {project.image ? (
        <div className="relative overflow-hidden rounded-2xl border border-border-low">
          <Image
            src={project.image}
            alt={project.name}
            width={project.imageWidth ?? 1000}
            height={project.imageHeight ?? 1250}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 490px"
          />
        </div>
      ) : (
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border-low bg-gradient-to-br",
            project.aspect,
            project.tint
          )}
        >
          <div className="absolute inset-0 opacity-[0.035] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-5xl font-extrabold text-text-muted/20 transition-colors duration-300 group-hover:text-accent/25">
              {project.initials}
            </span>
          </div>
          <span
            className={cn(
              "absolute bottom-4 left-4 rounded px-2 py-0.5 font-body text-xs font-medium backdrop-blur-sm",
              project.badgeClass
            )}
          >
            {project.badge}
          </span>
        </div>
      )}

      <div className="mt-5 flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded bg-accent-bg font-body text-[10px] font-semibold text-accent">
          {project.initials}
        </span>
        <span className="font-body text-sm font-semibold text-text-primary">
          {project.name}
        </span>
      {project.image ? (
          <span
            className={cn(
              "ml-auto rounded px-2 py-0.5 font-body text-xs font-medium",
              project.badgeClass
            )}
          >
            {project.badge}
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-text-primary md:text-[22px]">
        {project.title}
      </h3>

      <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary md:text-[15px]">
        {project.description}
      </p>

      {project.tags ? (
        <p className="mt-3 font-body text-xs text-text-muted">{project.tags}</p>
      ) : null}
    </article>
  );
}

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center py-16 md:py-24">
      <Container className="flex flex-col items-center text-center">
        <a
          href="#contact"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-border-high px-4 py-2 transition-colors duration-300 hover:border-accent"
        >
          <EmberDot />
          <span className="font-body text-sm text-text-secondary group-hover:text-text-primary">
            Arkevo is now accepting 2 new client projects
          </span>
        </a>

        <h1 className="display-xl text-text-primary">
          We Build Products
          <br />
          That Last.
        </h1>

        <p className="body-lg mx-auto mt-6 max-w-[520px] text-text-secondary">
          A software product studio from Pakistan building mobile apps, web
          platforms, and AI tools for teams that ship.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#work">See Our Work</Button>
          <Button href="#contact" variant="secondary" openContactSidebar>
            Start a Project
          </Button>
        </div>
        
   

        <div id="products" className="mt-16 w-full max-w-5xl">
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-border-high bg-surface px-3 py-1 font-body text-xs font-semibold uppercase tracking-[0.08em] text-text-secondary">
              Featured
            </span>
          </div>

          <div className="mb-10 flex items-end justify-between gap-6 text-left">
            <h2 className="font-display text-2xl font-bold text-text-primary md:text-[28px]">
              Featured work
            </h2>
            <Link
              href="#work"
              className="shrink-0 font-body text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
            >
              More case studies →
            </Link>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-x-10">
            <div className="flex flex-col gap-12 md:gap-14">
              {previewProjects
                .filter((_, index) => index % 2 === 0)
                .map((project) => (
                  <FeaturedProjectCard key={project.name} project={project} />
                ))}
            </div>
            <div className="flex flex-col gap-12 md:mt-24 md:gap-14">
              {previewProjects
                .filter((_, index) => index % 2 === 1)
                .map((project) => (
                  <FeaturedProjectCard key={project.name} project={project} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
