import { Hero } from "@/components/sections/hero";
import { SocialProofTicker } from "@/components/sections/social-proof-ticker";
import { StatsRow } from "@/components/sections/stats-row";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { Founder } from "@/components/sections/founder";
import { HowWeBuild } from "@/components/sections/how-we-build";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Arkevo Software Product Studio",
  description:
    "Arkevo is a software product studio from Pakistan building mobile apps, web platforms, and AI tools for global teams.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofTicker />
      <StatsRow />
      <Services />
      <Work />
      <Founder />
      <HowWeBuild />
      <Testimonials />
      <CtaSection />
    </>
  );
}
