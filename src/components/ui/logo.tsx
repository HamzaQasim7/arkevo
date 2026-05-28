import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  height?: number;
  priority?: boolean;
  onClick?: () => void;
};

export function Logo({
  className,
  href = "/",
  height = 44,
  priority = false,
  onClick,
}: LogoProps) {
  const width = Math.round(height * 3);

  const content = (
    <>
      <Image
        src={siteConfig.logos.dark}
        alt={siteConfig.name}
        width={width}
        height={height}
        className={cn("logo-theme-dark w-auto", className)}
        style={{ height }}
        priority={priority}
      />
      <Image
        src={siteConfig.logos.light}
        alt={siteConfig.name}
        width={width}
        height={height}
        className={cn("logo-theme-light w-auto", className)}
        style={{ height }}
        priority={priority}
      />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0 items-center"
        aria-label={siteConfig.name}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return <span className="inline-flex shrink-0 items-center">{content}</span>;
}
