import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  return (
    <section id="contact" className="relative bg-surface py-section">
      <div
        className="absolute bottom-0 left-0 top-0 w-[3px] bg-accent"
        aria-hidden
      />

      <Container>
        <NoiseOverlay>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeIn>
                <h2 className="display-lg text-text-primary">
                  Have something to build?
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="body-lg mt-6 max-w-md text-text-secondary">
                  We work with startups and product teams who need serious
                  engineering not just code.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-4 font-body text-base font-medium text-accent">
                  Currently accepting 2 new client projects.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-4">
              <FadeIn delay={0.2}>
                <div className="rounded-md border border-border-low bg-bg p-6">
                  <Button
                    href={`mailto:${siteConfig.email}`}
                    openContactSidebar
                    className="w-full"
                  >
                    Start a Project
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-start gap-4 rounded-md border border-border-low bg-bg p-6">
                  <Icon name="mail_outline" className="text-[22px] text-accent" />
                  <div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-body text-base font-medium text-text-primary transition-colors hover:text-accent"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="mt-1 font-body text-sm text-text-muted">
                      Email response within 24hr
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex items-start gap-4 rounded-md border border-border-low bg-bg p-6">
                  <Icon name="location_on" className="text-[22px] text-accent" />
                  <div>
                    <p className="font-body text-base font-medium text-text-primary">
                      {siteConfig.location}
                    </p>
                    <p className="mt-1 font-body text-sm text-text-muted">
                      Available for remote worldwide
                    </p>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-6 rounded-md border border-border-low bg-bg p-6 md:p-8">
              <p className="section-label">Built for Global Teams</p>
              <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  siteConfig.trustSignals.globalDelivery,
                  siteConfig.trustSignals.timezone,
                  siteConfig.trustSignals.payment,
                  siteConfig.trustSignals.communication,
                  siteConfig.trustSignals.contract,
                  siteConfig.trustSignals.secpRegistrationNumber,
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-border-low/70 bg-surface px-4 py-3 font-body text-sm text-text-secondary"
                  >
                    <span className="inline-flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </NoiseOverlay>
      </Container>
    </section>
  );
}
