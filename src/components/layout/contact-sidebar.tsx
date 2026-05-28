"use client";

import { useEffect, useState } from "react";

export function ContactSidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openSidebar = () => setOpen(true);
    window.addEventListener("open-contact-sidebar", openSidebar);
    return () => window.removeEventListener("open-contact-sidebar", openSidebar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-black/45 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`fixed bottom-0 right-0 top-0 z-[81] w-full max-w-md border-l border-border-high bg-surface p-6 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Start a project form"
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display text-2xl font-bold text-text-primary">
            Start a Project
          </h3>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded p-2 text-text-secondary transition-colors hover:text-accent"
            aria-label="Close contact form"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <p className="mb-6 font-body text-sm text-text-secondary">
          Share your idea and I&apos;ll get back within 24 hours.
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="access_key"
            value="1dabd939-b648-4321-9dc4-82676c533985"
          />

          <div>
            <label
              htmlFor="contact-name"
              className="mb-1 block font-body text-xs font-semibold uppercase tracking-[0.08em] text-text-muted"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              className="w-full rounded border border-border-high bg-bg px-3 py-2.5 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1 block font-body text-xs font-semibold uppercase tracking-[0.08em] text-text-muted"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              className="w-full rounded border border-border-high bg-bg px-3 py-2.5 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-1 block font-body text-xs font-semibold uppercase tracking-[0.08em] text-text-muted"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              defaultValue="Hi Hamza, I want to discuss my project requirements and timeline."
              rows={6}
              className="w-full rounded border border-border-high bg-bg px-3 py-2.5 font-body text-sm text-text-primary outline-none transition-colors focus:border-accent"
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Submit
          </button>
        </form>
      </aside>
    </>
  );
}
