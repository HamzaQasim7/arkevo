import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Founder() {
  return (
    <section id="about" className="relative py-section">
      <div
        className="absolute bottom-0 left-0 top-0 hidden w-[3px] bg-accent md:block"
        aria-hidden
      />

      <Container>
        <FadeIn>
          <p className="section-label">The founder</p>
        </FadeIn>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn delay={0.1}>
            <div className="mx-auto w-full max-w-[320px] md:mx-0">
              <div className="relative h-[380px] w-full overflow-hidden rounded-md border border-border-high bg-surface">
                <Image
                  src={siteConfig.founder.photo}
                  alt={siteConfig.founder.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, 320px"
                />
              </div>
              <p className="mt-4 text-center font-display text-lg font-bold text-text-primary md:text-left">
                {siteConfig.founder.name}
              </p>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.2}>
              <blockquote className="display-md text-text-primary">
                &ldquo;We write code. We ship products. That&apos;s it.&rdquo;
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="body-lg mt-8 text-text-secondary">
                Arkevo is intentionally small a tight team of engineers who
                obsess over architecture, performance, and delivery. Not
                headcount.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex items-center gap-5">
                <SocialLink href={siteConfig.links.linkedin} label="LinkedIn">
                  <LinkedInIcon />
                </SocialLink>
                <SocialLink href={siteConfig.links.github} label="GitHub">
                  <GitHubIcon />
                </SocialLink>
                <SocialLink href={siteConfig.links.twitter} label="Twitter">
                  <TwitterIcon />
                </SocialLink>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-text-secondary transition-colors duration-300 hover:text-accent"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
