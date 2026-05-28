import { FadeIn } from "@/components/motion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const projects = [
  {
    number: "01",
    name: "AllFile Pro",
    type: "PDF & Docs Reader",
    description:
      "Advanced document reader and editor with offline-first management and AI-powered reading assistance inspired by Kindle, Kobo, and Boox experiences.",
    badge: "Shipped",
    badgeClass: "bg-success/10 text-success border border-success/20",
    tags: ["Flutter", "Offline-First", "AI Reading", "Document Editor"],
  },
  {
    number: "02",
    name: "Sareer Publications",
    type: "Online Book Store",
    description:
      "Digital bookstore app with a wide range of books across genres, built to deliver a smooth and immersive reading experience for users.",
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    tags: ["Flutter", "Book Commerce", "Catalog", "Reading Experience"],
  },
  {
    number: "03",
    name: "XOX4K",
    type: "Medical Camera Controller",
    description:
      "HIPAA-compliant medical imaging app for dental and ear exams with secure patient data protocols, sub-200ms camera latency, and deployment across 12 practices managing 5K+ records.",
    badge: "Deployed",
    badgeClass: "bg-success/10 text-success border border-success/20",
    tags: ["Flutter", "WiFi Camera SDK", "SQLite", "AES Encryption"],
  },
  {
    number: "04",
    name: "Warehouse Management System",
    type: "Inventory & Logistics Platform",
    description:
      "Comprehensive warehouse management system designed to streamline inventory tracking, order fulfillment, and logistics operations end-to-end.",
    badge: "Developed",
    badgeClass: "bg-accent-bg text-accent border border-accent-border",
    tags: ["Inventory Tracking", "Order Fulfillment", "Logistics", "Operations"],
  },
  {
    number: "05",
    name: "InshaCollections",
    type: "Full-Stack E-commerce Platform",
    description:
      "Clothing brand platform with admin dashboard, inventory management, order processing, and customer analytics, plus conversion-focused checkout optimization.",
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Stripe API", "AWS S3"],
  },
  {
    number: "06",
    name: "Abroad Avenue",
    type: "Study Consultation Landing Page",
    description:
      "Lead generation website for education consultancy with CRM-integrated forms, SEO-first structure, and WhatsApp booking flow for instant consultation.",
    badge: "Live",
    badgeClass: "bg-success/10 text-success border border-success/20",
    tags: ["Next.js", "React", "Tailwind CSS", "Email Automation", "SEO"],
  },
];

export function Work() {
  return (
    <section id="work" className="bg-bg py-section">
      <Container>
        <FadeIn>
          <p className="section-label">Real work</p>
          <h2 className="headline mt-4 text-text-primary">
            What we&apos;ve actually shipped.
          </h2>
          <p className="body-lg mt-4 max-w-xl text-text-secondary">
            No fake case studies. Real products, real clients, real
            code.
          </p>
        </FadeIn>

        <div className="mt-12">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.1}>
              <article className="group relative border-b border-border-low py-10 transition-all duration-300 hover:border-l-[3px] hover:border-l-accent hover:bg-surface hover:pl-6">
                <span className="absolute right-0 top-10 font-display text-sm font-bold text-text-muted">
                  {project.number}
                </span>

                <div className="grid gap-6 pr-12 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-text-primary">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-body text-sm text-text-muted">
                      {project.type}
                    </p>
                    <p className="body-md mt-4 max-w-2xl text-text-secondary">
                      {project.description}
                    </p>
                    <span
                      className={cn(
                        "mt-4 inline-block rounded px-2.5 py-1 font-body text-xs font-medium",
                        project.badgeClass
                      )}
                    >
                      {project.badge}
                    </span>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-border-low px-2 py-0.5 font-body text-xs text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span
                    className="hidden text-2xl text-text-muted transition-colors duration-300 group-hover:text-accent md:block"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
