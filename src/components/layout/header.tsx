"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

function MaterialIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={cn("material-symbols-outlined", className)} aria-hidden>
      {name}
    </span>
  );
}

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = siteConfig.nav.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-bg/95 backdrop-blur-md transition-all duration-300",
          scrolled
            ? "border-border-high shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "border-border-low"
        )}
      >
        <Container className="flex h-16 items-center justify-between md:h-[72px]">
          <Logo href="/" height={40} priority />

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 md:block"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-8">
              {siteConfig.nav.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={item.href} className="relative">
                    {isActive && (
                      <span
                        className="absolute -top-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
                        aria-hidden
                      />
                    )}
                    <Link
                      href={item.href}
                      className={cn(
                        "font-body text-sm font-medium transition-colors duration-300",
                        isActive
                          ? "text-text-primary"
                          : "text-text-secondary hover:text-text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded text-text-secondary transition-colors duration-300 hover:text-accent focus:outline-none"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <MaterialIcon
                name={theme === "dark" ? "light_mode" : "dark_mode"}
                className="text-[22px]"
              />
            </button>

            <Button
              href="#contact"
              openContactSidebar
              className="hidden px-5 py-2.5 text-sm sm:inline-flex"
            >
              Start a Project
            </Button>

            <button
              type="button"
              className="flex h-10 w-10 cursor-pointer items-center justify-center text-text-primary md:hidden focus:outline-none"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MaterialIcon name="menu" className="text-[26px]" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-bg transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Logo href="/" height={40} priority onClick={() => setMobileOpen(false)} />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center focus:outline-none"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <MaterialIcon name="close" className="text-[26px]" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-4 pt-8" aria-label="Mobile navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-3xl font-bold text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            href="#contact"
            openContactSidebar
            className="mt-4 w-full"
            onClick={() => setMobileOpen(false)}
          >
            Start a Project
          </Button>
        </nav>
      </div>
    </>
  );
}
