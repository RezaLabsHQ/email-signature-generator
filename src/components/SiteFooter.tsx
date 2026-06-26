import { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

const DEVELOPER = {
  name: SITE.developer,
  role: SITE.role,
  github: SITE.github,
  linkedin: SITE.linkedin,
  email: SITE.email,
  repo: SITE.repo,
};

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] pt-14">
      <div className="grid gap-10 md:grid-cols-12">
        {/* Brand + developer */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-sm font-semibold text-white shadow-[0_0_24px_rgba(94,106,210,0.4),inset_0_1px_0_rgba(255,255,255,0.25)]">
              S
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Scholaro
            </span>
          </div>
          <p className="mt-4 max-w-xs font-ui text-sm leading-relaxed text-foreground-muted">
            A free, open tool for building email-safe signatures. Designed and
            built by {DEVELOPER.name}, {DEVELOPER.role}.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <FooterIconLink href={DEVELOPER.github} label="GitHub">
              <IconGitHub />
            </FooterIconLink>
            <FooterIconLink href={DEVELOPER.linkedin} label="LinkedIn">
              <IconLinkedIn />
            </FooterIconLink>
            <FooterIconLink
              href={`mailto:${DEVELOPER.email}`}
              label="Email"
              external={false}
            >
              <IconMail />
            </FooterIconLink>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 md:col-span-7 sm:grid-cols-3">
          <FooterColumn title="Product">
            <li>
              <Link
                href="/generate"
                className="font-ui text-sm text-foreground-muted transition-colors hover:text-ink"
              >
                Build signature
              </Link>
            </li>
            <FooterLink href="/#why">Why it works</FooterLink>
            <FooterLink href="/#example">Live example</FooterLink>
            <FooterLink href="/#clients">Email clients</FooterLink>
          </FooterColumn>

          <FooterColumn title="Developer">
            <FooterLink href={DEVELOPER.github}>GitHub</FooterLink>
            <FooterLink href={DEVELOPER.linkedin}>LinkedIn</FooterLink>
            <FooterLink href={`mailto:${DEVELOPER.email}`}>Email me</FooterLink>
          </FooterColumn>

          <FooterColumn title="Project">
            <FooterLink href={DEVELOPER.repo}>Source code</FooterLink>
            <FooterLink href="https://nextjs.org">
              Built with Next.js
            </FooterLink>
            <FooterLink href={`${DEVELOPER.repo}/issues`}>
              Report an issue
            </FooterLink>
          </FooterColumn>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] py-7 font-ui text-sm text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {DEVELOPER.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="transition-colors hover:text-ink">
            Privacy
          </Link>
          <span>Your details stay in your browser — nothing is uploaded.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="font-display text-sm font-semibold tracking-tight text-ink">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="font-ui text-sm text-foreground-muted transition-colors hover:text-ink"
      >
        {children}
      </a>
    </li>
  );
}

function FooterIconLink({
  href,
  label,
  external = true,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid h-9 w-9 place-items-center rounded-md border border-white/[0.08] bg-white/[0.03] text-foreground-muted transition-all hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-ink"
    >
      {children}
    </a>
  );
}

function IconGitHub() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
