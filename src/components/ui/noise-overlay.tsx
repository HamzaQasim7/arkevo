import { cn } from "@/lib/utils";

type NoiseOverlayProps = {
  children: React.ReactNode;
  className?: string;
};

export function NoiseOverlay({ children, className }: NoiseOverlayProps) {
  return <div className={cn("noise-overlay", className)}>{children}</div>;
}
