import { siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
  const href = `https://wa.me/?text=${encodeURIComponent(siteConfig.whatsappPresetMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-4 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent-border bg-accent text-text-primary shadow-[0_8px_24px_rgba(200,98,42,0.28)] transition-all duration-300 hover:bg-accent-light hover:-translate-y-0.5 md:bottom-8 md:left-6 md:h-14 md:w-14"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.02 2a9.94 9.94 0 0 0-8.6 14.93L2 22l5.23-1.37a9.9 9.9 0 0 0 4.77 1.22h.01c5.5 0 9.98-4.47 9.99-9.97a9.9 9.9 0 0 0-2.95-6.97zm-7.04 15.26h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.1.81.83-3.02-.19-.31a8.3 8.3 0 0 1-1.28-4.43C3.77 7.32 7.38 3.7 11.99 3.7a8.2 8.2 0 0 1 5.84 2.43 8.17 8.17 0 0 1 2.43 5.82c0 4.61-3.63 8.22-8.25 8.22zm4.53-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.43.06-.65.31s-.85.83-.85 2.01.87 2.32.99 2.48c.12.17 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
      </svg>
    </a>
  );
}
