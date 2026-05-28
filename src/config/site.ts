export const siteConfig = {
  name: "Arkevo",
  legalName: "Arkevo (Private) Limited",
  tagline: "Built in Pakistan. Engineered for the World.",
  description:
    "Arkevo is a software product studio from Pakistan building mobile apps, web platforms, and AI tools for global teams.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arkevo.org",
  ogImage: "/og-image.png",
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
