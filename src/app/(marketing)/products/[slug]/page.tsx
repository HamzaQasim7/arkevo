import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/config/case-studies";
import { createMetadata } from "@/lib/metadata";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) {
    return createMetadata({
      title: "Case Study Not Found",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: `${project.name} Case Study`,
    description: project.description,
    path: `/products/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <section className="bg-bg py-section">
      <Container>
        <p className="section-label">Case study</p>
        <h1 className="display-md mt-4 text-text-primary">{project.name}</h1>
        <p className="body-lg mt-4 max-w-3xl text-text-secondary">{project.type}</p>

        <div className="mt-10 overflow-hidden rounded-md border border-border-low bg-surface">
          <Image
            src={project.image}
            alt={project.name}
            width={project.imageWidth}
            height={project.imageHeight}
            className="h-auto w-full"
            sizes="(max-width: 1200px) 100vw, 1120px"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-md border border-border-low bg-surface p-6">
            <h2 className="font-display text-2xl font-bold text-text-primary">Problem</h2>
            <p className="body-md mt-3 text-text-secondary">{project.problem}</p>
          </article>

          <article className="rounded-md border border-border-low bg-surface p-6">
            <h2 className="font-display text-2xl font-bold text-text-primary">Solution</h2>
            <p className="body-md mt-3 text-text-secondary">{project.solution}</p>
          </article>

          <article className="rounded-md border border-border-low bg-surface p-6">
            <h2 className="font-display text-2xl font-bold text-text-primary">Result</h2>
            <p className="body-md mt-3 text-text-secondary">{project.result}</p>
          </article>

          <article className="rounded-md border border-border-low bg-surface p-6">
            <h2 className="font-display text-2xl font-bold text-text-primary">Tech</h2>
            <p className="body-md mt-3 text-text-secondary">{project.tech}</p>
            <p className="mt-5 border-l-2 border-accent pl-4 font-body text-sm italic text-text-primary">
              &ldquo;{project.quote}&rdquo;
            </p>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#contact" openContactSidebar>
            Start a Project
          </Button>
          <Button href="/#products" variant="secondary">
            Back to Featured Projects
          </Button>
          {project.pdfUrl ? (
            <Button href={project.pdfUrl} variant="secondary" external>
              View Full Case Study PDF
            </Button>
          ) : null}
        </div>

        <p className="mt-6 font-body text-xs text-text-muted">
          URL: arkevo.org/products/{project.slug}
        </p>
      </Container>
    </section>
  );
}
