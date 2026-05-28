import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.legalName}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-section">
      <Container className="max-w-2xl">
        <h1 className="headline text-text-primary">Terms of Service</h1>
        <p className="body-lg mt-6 text-text-secondary">
          These terms govern use of services provided by {siteConfig.legalName}.
          This page will be updated with our full terms. For questions, contact{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
