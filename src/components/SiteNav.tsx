import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/#why", label: "Why it works" },
  { href: "/#clients", label: "Email clients" },
  { href: "/#example", label: "Example" },
];

type Props = {
  className?: string;
  ctaLabel?: string;
};

export default function SiteNav({ className, ctaLabel = "Build signature" }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={cn("glass-panel relative rounded-xl px-4 py-3", className)}>
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Scholaro home">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-sm font-semibold text-white shadow-[0_0_24px_rgba(94,106,210,0.4),inset_0_1px_0_rgba(255,255,255,0.25)]">
            S
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">Scholaro</span>
        </Link>

        <div className="hidden items-center gap-7 font-ui text-sm text-foreground-muted md:flex">
          {navLinks.map((linkItem) => (
            <Link key={linkItem.href} className="transition-colors hover:text-ink" href={linkItem.href}>
              {linkItem.label}
            </Link>
          ))}
        </div>

        <Link
          href="/generate"
          className="btn-shine hidden rounded-md bg-white/[0.05] px-3.5 py-2 font-ui text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.07)] transition-all hover:bg-white/[0.09] md:block"
        >
          {ctaLabel}
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-9 w-9 place-items-center rounded-md text-ink transition-colors hover:bg-white/[0.06] md:hidden"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {menuOpen ? (
        <div className="mt-3 flex flex-col gap-1 border-t border-white/[0.06] pt-3 md:hidden">
          {navLinks.map((linkItem) => (
            <Link
              key={linkItem.href}
              href={linkItem.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2.5 font-ui text-sm text-foreground-muted transition-colors hover:bg-white/[0.05] hover:text-ink"
            >
              {linkItem.label}
            </Link>
          ))}
          <Link
            href="/generate"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-md bg-accent px-3 py-2.5 text-center font-ui text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(94,106,210,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]"
          >
            Build my signature
          </Link>
        </div>
      ) : null}
    </nav>
  );
}

function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
