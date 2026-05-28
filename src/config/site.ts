export const siteConfig = {
  name: "Arkevo",
  legalName: "Arkevo (Private) Limited",
  tagline: "Built in Pakistan. Engineered for the World.",
  description:
    "Arkevo is a software product studio from Pakistan building mobile apps, web platforms, and AI tools for global teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arkevo.org",
  ogImage: "/og-image.png",
  favicon: "/images/arkevo-favicon.png",
  logos: {
    dark: "/images/arkevo-dark-logo.png",
    light: "/images/arkevo-light-logo.png",
  },
  email: "hamza@arkevo.org",
  location: "Islamabad, Pakistan",
  whatsappPresetMessage:
    "Hi Hamza, I found Arkevo and want to discuss my project requirements. Can we connect?",
  founder: {
    name: "Hamza Qasim",
    title: "Flutter developer & product builder",
    location: "Islamabad, Pakistan",
    sinceYear: "2020",
    photo: "/images/hamza-profilee.png",
  },
  trustSignals: {
    globalDelivery:
      "Arkevo is based in Pakistan and delivers for founders and teams worldwide.",
    timezone:
      "We operate on PKT (UTC+5), with practical overlap across EU mornings and US evenings.",
    payment:
      "Commercial invoices are issued in USD, with payments supported via wire transfer, Wise, and Payoneer.",
    communication:
      "Execution stays transparent through structured daily async updates in Slack and Linear.",
    contract:
      "We work with a standard MSA and can include an NDA whenever your process requires it.",
    secpRegistrationNumber:
      "SECP-registered private limited company; registration details are shared during onboarding.",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/hamzaqasim-flutterdeveloper/",
    github: "https://github.com/HamzaQasim7",
    twitter: "https://twitter.com/arkevo",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
