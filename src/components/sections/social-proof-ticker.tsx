const expertiseGroups = [
  {
    title: "Languages",
    items: ["Dart", "JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Mobile Development",
    items: [
      "Flutter",
      "iOS Development",
      "Android Development",
      "Cross-Platform Development",
      "Xcode",
      "Android Studio",
      "VS Code",
    ],
  },
  {
    title: "State Management",
    items: ["BLoC", "Riverpod", "Provider", "GetX", "Cubit"],
  },
  {
    title: "Architecture",
    items: [
      "Clean Architecture",
      "MVVM",
      "MVC",
      "SOLID Principles",
      "Microservices",
      "Domain-Driven Design",
      "Repository Pattern",
    ],
  },
  {
    title: "Backend & Cloud",
    items: [
      "Firebase",
      "Supabase",
      "Node.js",
      "RESTful APIs",
      "GraphQL",
      "WebSocket",
      "Cloud Functions",
      "FCM",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Hive", "Firestore", "Cloud Storage"],
  },
  {
    title: "Web Development",
    items: ["Next.js", "React.js", "Vite", "Responsive Web Design"],
  },
  {
    title: "DevOps & CI/CD",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Codemagic",
      "Fastlane",
      "Docker",
      "Agile",
      "Scrum",
      "JIRA",
    ],
  },
  {
    title: "Testing & QA",
    items: [
      "Unit Testing",
      "Widget Testing",
      "Integration Testing",
      "TDD",
      "App Security Testing",
    ],
  },
  {
    title: "Payment Integration",
    items: [
      "Stripe",
      "PayPal",
      "WooCommerce",
      "Shopify APIs",
      "GoPayFast",
      "In-App Purchases",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "OpenAI API",
      "OpenAI Agent SDK",
      "n8n Workflow Automation",
      "AI Feature Integration",
      "LLM Integration",
    ],
  },
  {
    title: "UI/UX & Design",
    items: [
      "Figma",
      "Adobe XD",
      "Google Stitch",
      "Material Design 3",
      "Human Interface Guidelines",
      "Responsive Design",
    ],
  },
  {
    title: "App Deployment",
    items: [
      "Google Play Store",
      "Apple App Store",
      "App Store Optimization (ASO)",
      "TestFlight",
      "Firebase App Distribution",
    ],
  },
];

export function SocialProofTicker() {
  const expertiseItems = expertiseGroups.flatMap((group) => group.items);

  return (
    <section className="border-y border-border-low py-10 md:py-12" aria-label="Expertise and tech stack">
      <p className="mb-4 text-center font-body text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
        Our tech stack
      </p>
      <div className="mt-4 overflow-hidden border-t border-border-low pt-4">
        <div className="marquee-track gap-6 px-4" style={{ animationDuration: "90s" }}>
          <div className="flex shrink-0 items-center gap-6 pr-6">
            {expertiseItems.map((item, i, arr) => (
              <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-6">
                <span className="font-body text-sm text-text-secondary">{item}</span>
                {i < arr.length - 1 && (
                  <span className="text-accent" aria-hidden>
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden>
            {expertiseItems.map((item, i, arr) => (
              <span key={`${item}-${i}-clone`} className="flex shrink-0 items-center gap-6">
                <span className="font-body text-sm text-text-secondary">{item}</span>
                {i < arr.length - 1 && (
                  <span className="text-accent" aria-hidden>
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
