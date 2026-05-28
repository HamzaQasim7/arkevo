"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  external?: boolean;
  openContactSidebar?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  external,
  openContactSidebar = false,
}: ButtonProps) {
  const styles = cn(
    variant === "primary" ? "btn-primary" : "btn-secondary",
    "focus:outline-none",
    className
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (openContactSidebar) {
      event.preventDefault();
      window.dispatchEvent(new Event("open-contact-sidebar"));
    }
    onClick?.(event);
  };

  if (href) {
    if (external || href.startsWith("mailto:")) {
      return (
        <a href={href} className={styles} onClick={handleClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={styles}>
      {children}
    </button>
  );
}
