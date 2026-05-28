import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.legalName}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-section">
      <Container className="max-w-2xl">
        <h1 className="headline text-text-primary">Privacy Policy</h1>
        <p className="body-lg mt-6 text-text-secondary">
          {siteConfig.legalName} respects your privacy. This page will be updated
          with our full privacy policy. For questions, contact{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
