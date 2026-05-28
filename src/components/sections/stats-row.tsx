import { FadeIn } from "@/components/motion";
import { Container } from "@/components/ui/container";

const stats = [
  { value: "4+", label: "Years Building" },
  { value: "25+", label: "Apps Shipped" },
  { value: "5", label: "Countries Reached" },
  { value: "48hr", label: "Average Project Kickoff" },
];

export function StatsRow() {
  return (
    <section className="bg-surface py-6 md:py-8" aria-label="Statistics">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded border border-accent-border bg-accent-bg px-4 py-9 text-center transition-colors duration-300 hover:bg-[#261812]"
              >
                <span className="font-display text-[48px] font-extrabold leading-none text-accent">
                  {stat.value}
                </span>
                <span className="mt-2 font-body text-[13px] text-text-primary/85">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
