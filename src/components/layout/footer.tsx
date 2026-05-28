import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
function SocialIcon({
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

export function Footer() {
  return (
    <footer className="relative border-t border-border-low bg-bg pt-16 pb-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        aria-hidden
      />

      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo href="/" height={42} />
            <p className="mt-4 font-body text-sm text-text-secondary">
              Software Studio · Est. 2026
            </p>
            <p className="mt-1 font-body text-sm text-text-secondary">
              {siteConfig.location}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <SocialIcon href={siteConfig.links.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href={siteConfig.links.github} label="GitHub">
                <GitHubIcon />
              </SocialIcon>
              <SocialIcon href={siteConfig.links.twitter} label="Twitter">
                <TwitterIcon />
              </SocialIcon>
            </div>
          </div>

          <div>
            <h3 className="section-label mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Flutter Mobile Apps",
                "Web & SaaS",
                "AI Integration",
                "Product Strategy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="section-label mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  Our Work
                </Link>
              </li>
            
              <li>
                <Link
                  href="#contact"
                  className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="section-label mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <p className="font-body text-sm text-text-muted">
                  © 2026 {siteConfig.legalName}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-low pt-6 sm:flex-row">
          <p className="font-body text-sm text-text-secondary">
            Built by Arkevo Pakistan 🇵🇰
          </p>
          <p className="font-body text-sm text-text-muted">arkevo.org</p>
        </div>
      </Container>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
