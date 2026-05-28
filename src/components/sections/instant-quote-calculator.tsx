"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type TierKey = "simple" | "standard" | "complex";
type PlatformKey = "android" | "ios" | "both" | "web_mobile";

type Tier = {
  key: TierKey;
  title: string;
  subtitle: string;
  hours: [number, number];
  priceUsd: [number, number];
  timelineWeeks: [number, number];
};

type Addon = {
  key: string;
  label: string;
  usd: [number, number];
};

const USD_TO_PKR = 280;
const HOURLY_RATE_USD = 30;

const tiers: Tier[] = [
  {
    key: "simple",
    title: "Simple App",
    subtitle: "Info app, catalogue, basic booking",
    hours: [80, 120],
    priceUsd: [2400, 3600],
    timelineWeeks: [3, 4],
  },
  {
    key: "standard",
    title: "Standard App",
    subtitle: "Marketplace MVP, service app, delivery",
    hours: [200, 300],
    priceUsd: [6000, 9000],
    timelineWeeks: [6, 10],
  },
  {
    key: "complex",
    title: "Complex App",
    subtitle: "Fintech, healthcare, multi-role platforms",
    hours: [400, 600],
    priceUsd: [12000, 18000],
    timelineWeeks: [12, 18],
  },
];

const platformMultipliers: Record<PlatformKey, number> = {
  android: 0.7,
  ios: 0.7,
  both: 1.0,
  web_mobile: 1.6,
};

const platformMeta: { key: PlatformKey; label: string; hint: string }[] = [
  { key: "android", label: "Android Only", hint: "Save 30%" },
  { key: "ios", label: "iOS Only", hint: "Save 30%" },
  { key: "both", label: "Both Platforms", hint: "Flutter recommended" },
  { key: "web_mobile", label: "Mobile + Web", hint: "+60%" },
];

const addons: Addon[] = [
  { key: "auth", label: "User Authentication", usd: [300, 500] },
  { key: "push", label: "Push Notifications", usd: [200, 400] },
  { key: "payment", label: "Payment Integration", usd: [500, 800] },
  { key: "maps", label: "Maps & Location", usd: [400, 700] },
  { key: "chat", label: "Real-time Chat", usd: [800, 1200] },
  { key: "admin", label: "Admin Dashboard", usd: [1500, 3000] },
  { key: "ai", label: "AI Integration", usd: [1000, 2500] },
  { key: "offline", label: "Offline Mode", usd: [400, 800] },
  { key: "multiLang", label: "Multi-language Support", usd: [300, 600] },
];

function formatMoneyUsd(amount: number) {
  return `$${amount.toLocaleString()}`;
}

function formatMoneyPkr(amount: number) {
  return `Rs. ${Math.round(amount).toLocaleString()}`;
}

export function InstantQuoteCalculator() {
  const [selectedTier, setSelectedTier] = useState<TierKey>("standard");
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKey>("both");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [currency, setCurrency] = useState<"usd" | "pkr">("usd");

  const selectedTierData = useMemo(
    () => tiers.find((tier) => tier.key === selectedTier) ?? tiers[1],
    [selectedTier]
  );

  const estimate = useMemo(() => {
    const selectedAddonRows = addons.filter((addon) =>
      selectedAddons.includes(addon.key)
    );
    const addonsMin = selectedAddonRows.reduce((sum, addon) => sum + addon.usd[0], 0);
    const addonsMax = selectedAddonRows.reduce((sum, addon) => sum + addon.usd[1], 0);
    const multiplier = platformMultipliers[selectedPlatform];

    const totalMin = Math.round((selectedTierData.priceUsd[0] + addonsMin) * multiplier);
    const totalMax = Math.round((selectedTierData.priceUsd[1] + addonsMax) * multiplier);

    const line = (ratio: number): [number, number] => [
      Math.round(totalMin * ratio),
      Math.round(totalMax * ratio),
    ];

    return {
      total: [totalMin, totalMax] as [number, number],
      uiux: line(0.2),
      development: line(0.55),
      backend: line(0.15),
      testing: line(0.07),
      deployment: line(0.03),
      addons: selectedAddonRows,
      timelineWeeks: selectedTierData.timelineWeeks,
    };
  }, [selectedAddons, selectedPlatform, selectedTierData]);

  const summaryText = useMemo(() => {
    const platformLabel =
      platformMeta.find((item) => item.key === selectedPlatform)?.label ?? "Both Platforms";
    return [
      "Arkevo Instant Quotation",
      `Tier: ${selectedTierData.title}`,
      `Platform: ${platformLabel}`,
      `Selected Add-ons: ${
        estimate.addons.length ? estimate.addons.map((a) => a.label).join(", ") : "None"
      }`,
      `Estimated Budget (USD): ${formatMoneyUsd(estimate.total[0])} - ${formatMoneyUsd(
        estimate.total[1]
      )}`,
      `Estimated Budget (PKR): ${formatMoneyPkr(estimate.total[0] * USD_TO_PKR)} - ${formatMoneyPkr(
        estimate.total[1] * USD_TO_PKR
      )}`,
      `Timeline: ${estimate.timelineWeeks[0]}-${estimate.timelineWeeks[1]} weeks`,
      `Rate Basis: ${formatMoneyUsd(HOURLY_RATE_USD)}/hour`,
    ].join("\n");
  }, [selectedTierData, selectedPlatform, estimate]);

  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Project Estimate Request — Arkevo Calculator"
  )}&body=${encodeURIComponent(summaryText)}`;

  const handleDownload = () => {
    const blob = new Blob([summaryText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "arkevo-estimate.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const showMoney = (range: [number, number]) => {
    if (currency === "usd") {
      return `${formatMoneyUsd(range[0])} - ${formatMoneyUsd(range[1])}`;
    }
    return `${formatMoneyPkr(range[0] * USD_TO_PKR)} - ${formatMoneyPkr(
      range[1] * USD_TO_PKR
    )}`;
  };

  return (
    <section className="bg-bg py-section" id="quotation-calculator">
      <Container>
        <p className="section-label">Instant quotation calculator</p>
        <h2 className="headline mt-4 text-text-primary">Estimate your project budget in real time</h2>
        <p className="body-md mt-4 max-w-3xl text-text-secondary">
          Select your app type, platform, and required features. Get instant budget range,
          timeline estimate, and line-by-line breakdown.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="rounded-md border border-border-low bg-surface p-6">
              <p className="section-label mb-4">Step 1 — App type</p>
              <div className="grid gap-3 md:grid-cols-3">
                {tiers.map((tier) => (
                  <button
                    key={tier.key}
                    type="button"
                    onClick={() => setSelectedTier(tier.key)}
                    className={cn(
                      "rounded border p-4 text-left transition-colors duration-300",
                      selectedTier === tier.key
                        ? "border-accent bg-accent-bg"
                        : "border-border-low bg-bg hover:border-border-high"
                    )}
                  >
                    <p className="font-display text-lg font-bold text-text-primary">{tier.title}</p>
                    <p className="mt-1 font-body text-xs text-text-secondary">{tier.subtitle}</p>
                    <p className="mt-3 font-body text-sm text-accent">
                      {formatMoneyUsd(tier.priceUsd[0])} - {formatMoneyUsd(tier.priceUsd[1])}
                    </p>
                  </button>
                ))}
              </div>
              <p className="mt-4 font-body text-xs text-text-muted">
                These are starting estimates. Final quote after discovery call.
              </p>
            </div>

            <div className="rounded-md border border-border-low bg-surface p-6">
              <p className="section-label mb-4">Step 2 — Platform</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {platformMeta.map((platform) => (
                  <button
                    key={platform.key}
                    type="button"
                    onClick={() => setSelectedPlatform(platform.key)}
                    className={cn(
                      "rounded border p-4 text-left transition-colors duration-300",
                      selectedPlatform === platform.key
                        ? "border-accent bg-accent-bg"
                        : "border-border-low bg-bg hover:border-border-high"
                    )}
                  >
                    <p className="font-body text-sm font-semibold text-text-primary">{platform.label}</p>
                    <p className="mt-1 font-body text-xs text-text-secondary">{platform.hint}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-border-low bg-surface p-6">
              <p className="section-label mb-4">Step 3 — Features</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {addons.map((addon) => {
                  const checked = selectedAddons.includes(addon.key);
                  return (
                    <label
                      key={addon.key}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded border p-3 transition-colors duration-300",
                        checked
                          ? "border-accent bg-accent-bg"
                          : "border-border-low bg-bg hover:border-border-high"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(event) => {
                          if (event.target.checked) {
                            setSelectedAddons((prev) => [...prev, addon.key]);
                          } else {
                            setSelectedAddons((prev) => prev.filter((key) => key !== addon.key));
                          }
                        }}
                        className="mt-0.5 h-4 w-4 accent-[#C8622A]"
                      />
                      <span>
                        <span className="block font-body text-sm font-medium text-text-primary">
                          {addon.label}
                        </span>
                        <span className="block font-body text-xs text-text-secondary">
                          {formatMoneyUsd(addon.usd[0])} - {formatMoneyUsd(addon.usd[1])}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <p className="mt-4 font-body text-xs text-text-muted">
                Not sure? Select what sounds right we&apos;ll refine together.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-md border border-border-high bg-surface p-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <p className="section-label">Estimated budget</p>
              <div className="flex rounded border border-border-low bg-bg p-1">
                <button
                  type="button"
                  onClick={() => setCurrency("usd")}
                  className={cn(
                    "rounded px-2 py-1 font-body text-xs",
                    currency === "usd" ? "bg-accent text-text-primary" : "text-text-secondary"
                  )}
                >
                  USD
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("pkr")}
                  className={cn(
                    "rounded px-2 py-1 font-body text-xs",
                    currency === "pkr" ? "bg-accent text-text-primary" : "text-text-secondary"
                  )}
                >
                  PKR
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-2 font-body text-sm">
              <BreakdownRow label="UI/UX Design (20%)" value={showMoney(estimate.uiux)} />
              <BreakdownRow label="Development (55%)" value={showMoney(estimate.development)} />
              <BreakdownRow label="Backend/API (15%)" value={showMoney(estimate.backend)} />
              <BreakdownRow label="Testing/QA (7%)" value={showMoney(estimate.testing)} />
              <BreakdownRow label="Deployment (3%)" value={showMoney(estimate.deployment)} />
            </div>

            <div className="mt-5 border-t border-border-low pt-5">
              <p className="font-body text-xs uppercase tracking-[0.08em] text-text-muted">Total</p>
              <p className="mt-1 font-display text-2xl font-bold text-accent">
                {showMoney(estimate.total)}
              </p>
              <p className="mt-1 font-body text-xs text-text-secondary">
                USD: {formatMoneyUsd(estimate.total[0])} - {formatMoneyUsd(estimate.total[1])}
              </p>
              <p className="font-body text-xs text-text-secondary">
                PKR: {formatMoneyPkr(estimate.total[0] * USD_TO_PKR)} -{" "}
                {formatMoneyPkr(estimate.total[1] * USD_TO_PKR)}
              </p>
            </div>

            <div className="mt-5 rounded border border-border-low bg-bg p-4">
              <p className="font-body text-sm font-semibold text-text-primary">
                Timeline: {estimate.timelineWeeks[0]} - {estimate.timelineWeeks[1]} weeks
              </p>
              <p className="mt-2 font-body text-xs text-text-muted">
                Week 1-2 Discovery + Design, then core development, testing, and launch.
              </p>
              <p className="mt-2 font-body text-xs text-text-muted">
                Payment terms: 30% upfront, 40% after MVP delivery, 30% after full app delivery.
              </p>
            </div>

            <p className="mt-4 font-body text-xs text-text-muted">
              This estimate is based on Arkevo&apos;s standard rate of {formatMoneyUsd(HOURLY_RATE_USD)}
              /hour for senior app development.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Button href="#contact" openContactSidebar className="w-full justify-center">
                Book Discovery Call
              </Button>
              <button
                type="button"
                onClick={handleDownload}
                className="btn-secondary w-full justify-center"
              >
                Download Estimate
              </button>
            </div>
           
          </aside>
        </div>
      </Container>
    </section>
  );
}

function BreakdownRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border-low py-2">
      <span className="text-text-secondary">{label}</span>
      <span className="text-right font-medium text-text-primary">{value}</span>
    </div>
  );
}
