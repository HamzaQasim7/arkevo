import { cn } from "@/lib/utils";

type EmberDotProps = {
  className?: string;
  size?: "sm" | "md";
};

export function EmberDot({ className, size = "sm" }: EmberDotProps) {
  return (
    <span
      className={cn(
        "inline-block shrink-0 rounded-sm bg-accent",
        size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2",
        className
      )}
      aria-hidden
    />
  );
}
