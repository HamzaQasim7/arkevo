export type CaseStudy = {
  slug: string;
  name: string;
  type: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  badge: string;
  badgeClass: string;
  initials: string;
  title: string;
  description: string;
  tags: string;
  problem: string;
  solution: string;
  result: string;
  tech: string;
  quote: string;
  pdfUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "profound-aminos",
    name: "Profound Aminos",
    type: "WooCommerce Store Management System",
    image: "/thumbs/profound-aminos-thumb.png",
    imageWidth: 1000,
    imageHeight: 1250,
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    initials: "PA",
    title: "WooCommerce Store Management System",
    description:
      "Automation-first mobile operating system for a live supplement e-commerce brand to eliminate recurring VA overhead and accelerate execution.",
    tags: "Flutter · WooCommerce API · WordPress",
    problem:
      "Client was spending $1,920/month on two part-time VAs for operations that still took 7-8 hours daily, with slow product updates and delayed support response.",
    solution:
      "We built a unified Flutter automation app integrating WooCommerce, WordPress, Gorgias, and analytics with mobile-first workflows, bulk actions, smart prioritization, and auto alerts.",
    result:
      "Delivered in 6 weeks. Operations dropped from ~8 hours/day to ~2 hours/day, with $23K+ annual savings and 75%+ time reduction on repetitive tasks.",
    tech: "Flutter 3.x · Bloc · Dio · Hive · WooCommerce REST API · WordPress REST API · Gorgias · Rechargeip · Firebase",
    quote:
      "This app didn't just save me $23K, it gave me my life back. I run my entire business from my phone in 2 hours daily.",
    pdfUrl: "/case-studies/profound-aminos-case-study.pdf",
  },
  {
    slug: "valisiq",
    name: "ValiseIQ",
    type: "Airline Baggage Protection and Claims App",
    image: "/thumbs/valiseiq-thumb.png",
    imageWidth: 1200,
    imageHeight: 825,
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    initials: "VQ",
    title: "Airline Baggage Protection and Claims App",
    description:
      "Cross-platform claims app for baggage tracking, evidence capture, and delayed/lost baggage workflows.",
    tags: "Flutter · Fastify · PostgreSQL · Firebase Auth/Storage/FCM",
    problem:
      "Client needed a reliable mobile workflow for baggage claims with legal-grade evidence and status transparency.",
    solution:
      "We built ValiseIQ in Flutter with secure auth, media evidence handling, backend APIs, and claim lifecycle automation.",
    result:
      "Delivered in 9 weeks with zero production bugs on launch and significantly faster claim processing experience.",
    tech: "Flutter · Fastify · PostgreSQL · Firebase Auth/Storage/FCM",
    quote: "Clean delivery, clear communication, and production-quality engineering.",
  },
  {
    slug: "realty-text-pro",
    name: "RealtyTextPro",
    type: "Real Estate CRM Platform",
    image: "/thumbs/realty-text-pro-thumb.png",
    imageWidth: 1000,
    imageHeight: 1250,
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    initials: "RT",
    title: "Real Estate CRM Platform",
    description:
      "End-to-end CRM for managing pipelines, scheduling, and deal tracking for real estate teams.",
    tags: "Flutter · Firebase · REST APIs",
    problem:
      "Client needed one mobile CRM to unify fragmented lead tracking, communication, and appointment workflows.",
    solution:
      "We built a Flutter CRM with pipeline stages, reminders, contact handling, and real-time updates on Firebase.",
    result:
      "Delivered in 8 weeks, deployed across active teams, with stronger deal visibility and cleaner follow-up cycles.",
    tech: "Flutter · Firebase · REST APIs",
    quote: "The app feels built around our process, not the other way around.",
  },
  {
    slug: "hambar",
    name: "Hambar",
    type: "Custom WooCommerce Store Mobile App",
    image: "/thumbs/hambar-thumb.png",
    imageWidth: 1200,
    imageHeight: 825,
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    initials: "HB",
    title: "Custom WooCommerce Store Mobile App",
    description:
      "Custom commerce app delivering full web-parity operations with ordering, checkout, and recommendations.",
    tags: "Flutter · WooCommerce · REST API",
    problem:
      "Client needed a branded mobile shopping app with full store operations equivalent to their existing web flow.",
    solution:
      "We built a Flutter commerce app integrated with WooCommerce APIs for cart, payments, filtering, and order management.",
    result:
      "Delivered in 6 weeks with smooth production rollout and stronger repeat-user shopping behavior.",
    tech: "Flutter · WooCommerce · REST API · Payment Gateway Integration",
    quote: "Exactly what we needed: our web store experience, now native on mobile.",
  },
];
