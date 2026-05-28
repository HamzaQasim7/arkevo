import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/ui/container";

const reviewCards = [
  { src: "/reviews/review0.png", alt: "Client review 1" },
  { src: "/reviews/review1.png", alt: "Client review 2" },
  { src: "/reviews/review2.png", alt: "Client review 3" },
  { src: "/reviews/review3.png", alt: "Client review 4" },
  { src: "/reviews/review4.png", alt: "Client review 5" },
  { src: "/reviews/review5.png", alt: "Client review 6" },
  { src: "/reviews/review6.png", alt: "Client review 7" },
] as const;

export function Testimonials() {
  return (
    <section className="py-section">
      <Container>
        <FadeIn>
          <p className="section-label">Client words</p>
          <h2 className="headline mt-4 text-text-primary">
            From the people we&apos;ve worked with.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviewCards.map((item, i) => (
            <FadeIn key={item.src} delay={i * 0.08}>
              <article className="card-surface overflow-hidden p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent-border">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={709}
                  height={258}
                  className="h-auto w-full rounded-sm object-contain"
                />
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
