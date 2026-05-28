import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadata = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "",
  noIndex = false,
}: PageMetadata = {}): Metadata {
  const pageTitle = title ?? "Arkevo Software Product Studio";
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: pageTitle,
      description,
      siteName: siteConfig.legalName,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [siteConfig.ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    icons: {
      icon: [{ url: siteConfig.favicon }],
      shortcut: [{ url: siteConfig.favicon }],
      apple: [{ url: siteConfig.favicon }],
    },
  };
}
