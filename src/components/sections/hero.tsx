import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmberDot } from "@/components/ui/ember-dot";
import { caseStudies, type CaseStudy } from "@/config/case-studies";
import { cn } from "@/lib/utils";

function FeaturedProjectCard({ project }: { project: CaseStudy }) {
  return (
    <article className="group text-left">
      <div className="relative overflow-hidden rounded-2xl border border-border-low">
        <Image
          src={project.image}
          alt={project.name}
          width={project.imageWidth}
          height={project.imageHeight}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 490px"
        />
        <Link
          href={`/products/${project.slug}`}
          className={cn(
            "absolute right-3 top-3 rounded border px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.08em] backdrop-blur-sm transition-colors duration-300 hover:border-accent hover:text-accent",
            project.badgeClass
          )}
        >
          See case study
        </Link>
      </div>

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
              {caseStudies
                .filter((_, index) => index % 2 === 0)
                .map((project) => (
                  <FeaturedProjectCard key={project.name} project={project} />
                ))}
            </div>
            <div className="flex flex-col gap-12 md:mt-24 md:gap-14">
              {caseStudies
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
