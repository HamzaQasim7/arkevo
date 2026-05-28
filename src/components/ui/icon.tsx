import { cn } from "@/lib/utils";

type IconName =
  | "light_mode"
  | "dark_mode"
  | "menu"
  | "close"
  | "phone_iphone"
  | "web"
  | "psychology"
  | "map"
  | "expand_more"
  | "mail_outline"
  | "location_on";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const classes = cn("inline-block h-6 w-6", className);

  switch (name) {
    case "light_mode":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes} aria-hidden>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
        </svg>
      );
    case "dark_mode":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={classes} aria-hidden>
          <path d="M14.7 2.3a9.4 9.4 0 1 0 7 14.8 8.3 8.3 0 0 1-7.6-2.2 8.3 8.3 0 0 1-2.2-7.6 9.4 9.4 0 0 0 2.8-5z" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={classes} aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={classes} aria-hidden>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "phone_iphone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes} aria-hidden>
          <rect x="7" y="2.8" width="10" height="18.4" rx="2.2" />
          <path d="M10.5 5h3M11 18.5h2" />
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3.5 12h17M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "psychology":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes} aria-hidden>
          <path d="M12 3a7 7 0 0 0-7 7v2a3 3 0 0 0 3 3h1v2h6v-2h1a3 3 0 0 0 3-3v-2a7 7 0 0 0-7-7z" />
          <path d="M10 10c0-1.2.8-2 2-2s2 .8 2 2-.8 2-2 2v2" />
          <circle cx="12" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes} aria-hidden>
          <path d="M3 6.5l6-2 6 2 6-2v13l-6 2-6-2-6 2z" />
          <path d="M9 4.5v13M15 6.5v13" />
        </svg>
      );
    case "expand_more":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes} aria-hidden>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "mail_outline":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes} aria-hidden>
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "location_on":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={classes} aria-hidden>
          <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.3" />
        </svg>
      );
    default:
      return null;
  }
}
