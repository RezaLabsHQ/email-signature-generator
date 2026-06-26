import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Shell from "@/components/Shell";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — {SITE.name}</title>
        <meta
          name="description"
          content="How Scholaro handles your data: it doesn't. The signatures you build stay in your browser — no accounts, no tracking, no uploads."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Shell>
        <div className="relative z-10 mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between gap-4 py-6">
            <Link href="/" className="flex items-center gap-3" aria-label="Scholaro home">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-sm font-semibold text-white shadow-[0_0_24px_rgba(94,106,210,0.4),inset_0_1px_0_rgba(255,255,255,0.25)]">
                S
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Scholaro</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-white/[0.05] px-3 py-2 font-ui text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.07)] transition-all hover:bg-white/[0.09]"
            >
              <span aria-hidden>←</span> Home
            </Link>
          </header>

          <article className="py-8">
            <p className="eyebrow">Legal</p>
            <h1 className="gradient-text mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 font-ui text-sm text-foreground-subtle">Last updated: {SITE.privacyUpdated}</p>

            {/* The short version */}
            <div className="panel-flat mt-8 p-6">
              <p className="eyebrow">The short version</p>
              <p className="mt-3 font-ui text-base leading-relaxed text-foreground-muted">
                {SITE.name} runs entirely in your browser. The details you type into a signature are never sent to us,
                stored on a server, or shared with anyone. There is no account, no database, no tracking, and no
                advertising. When you copy or download a signature, that happens locally on your own device.
              </p>
            </div>

            <Section title="Who is responsible">
              <P>
                {SITE.name} is an independent, open project built and maintained by {SITE.developer}, based in{" "}
                {SITE.location}. For any privacy question, you can reach me at{" "}
                <Mail />. For the purposes of the EU/UK GDPR, I am the &ldquo;data controller&rdquo; for this website —
                though, as explained below, {SITE.name} is designed so that I never actually receive your personal
                information.
              </P>
            </Section>

            <Section title="What information we collect">
              <P>
                Nothing you enter. {SITE.name} has no backend that receives your form data. The name, email address,
                phone number, links, and any other details you type are held only in your browser&apos;s memory while
                the page is open, and are discarded when you close or refresh the tab. They exist solely to generate the
                live preview and the HTML you copy.
              </P>
            </Section>

            <Section title="Cookies and local storage">
              <P>
                {SITE.name} does not set cookies, does not use local storage, and does not run analytics or tracking
                scripts. Closing the tab leaves nothing behind on your device or ours.
              </P>
            </Section>

            <Section title="Third-party services">
              <P>
                Although {SITE.name} doesn&apos;t collect your data, a few technical services are involved in delivering
                the page itself:
              </P>
              <ul className="mt-4 space-y-3">
                <Bullet>
                  <strong className="text-ink">Hosting (Vercel).</strong> The site is served by Vercel. Like any web
                  host, Vercel may automatically process limited technical information — such as your IP address and
                  browser type — in server logs to deliver and secure the site. See{" "}
                  <Ext href="https://vercel.com/legal/privacy-policy">Vercel&apos;s privacy policy</Ext>.
                </Bullet>
                <Bullet>
                  <strong className="text-ink">Google Fonts.</strong> The page loads fonts from Google&apos;s servers,
                  which means your IP address is shared with Google when the fonts load. See{" "}
                  <Ext href="https://policies.google.com/privacy">Google&apos;s privacy policy</Ext>.
                </Bullet>
                <Bullet>
                  <strong className="text-ink">Images you add.</strong> If you paste a photo or logo URL, your own
                  browser fetches that image directly from wherever it is hosted to show it in the preview. {SITE.name}{" "}
                  never sees, proxies, or stores it.
                </Bullet>
              </ul>
            </Section>

            <Section title="Australian privacy (Privacy Act 1988)">
              <P>
                {SITE.name} is operated from Australia and is designed to align with the Australian Privacy Principles
                (APPs) under the <em>Privacy Act 1988</em> (Cth). Because {SITE.name} does not collect, hold, use, or
                disclose personal information through any server, the handling obligations that normally attach to
                personal information do not arise in the usual way. The signature content you create is your own personal
                information, kept on your own device and under your control.
              </P>
              <P>
                You can raise a privacy concern with me directly, or lodge a complaint with the Office of the Australian
                Information Commissioner (OAIC) at{" "}
                <Ext href="https://www.oaic.gov.au">oaic.gov.au</Ext>.
              </P>
            </Section>

            <Section title="European & UK users (GDPR)">
              <P>If you are in the European Economic Area or the United Kingdom:</P>
              <ul className="mt-4 space-y-3">
                <Bullet>
                  <strong className="text-ink">Controller.</strong> {SITE.developer} (contact above).
                </Bullet>
                <Bullet>
                  <strong className="text-ink">What is processed.</strong> {SITE.name} itself does not process your
                  personal data on any server. The only processing that occurs is the technical delivery described under
                  &ldquo;Third-party services&rdquo; — for example, your IP address being handled by the host and Google
                  Fonts — which relies on our legitimate interest (Art. 6(1)(f) GDPR) in serving a secure, functioning
                  website.
                </Bullet>
                <Bullet>
                  <strong className="text-ink">International transfers.</strong> Because the host and Google Fonts may
                  operate outside the EEA/UK, loading the page can involve a transfer of your IP address abroad under
                  those providers&apos; own safeguards.
                </Bullet>
                <Bullet>
                  <strong className="text-ink">Your rights.</strong> You have the rights of access, rectification,
                  erasure, restriction, objection, and portability. Since we hold no personal data about you, there is
                  normally nothing for us to retrieve or delete; for the technical data handled by our providers, please
                  refer to their policies. You may also lodge a complaint with your local supervisory authority.
                </Bullet>
              </ul>
            </Section>

            <Section title="Your choices">
              <P>
                You can use {SITE.name} without providing any personal information to us, and you stay in control of your
                signature content at all times. To remove your details, simply close or refresh the tab.
              </P>
            </Section>

            <Section title="Changes to this policy">
              <P>
                If {SITE.name} adds features that change how data is handled — for example, optional analytics or saved
                drafts — this page will be updated and the &ldquo;last updated&rdquo; date above will change. Other
                regional sections (such as for the United States) may be added later.
              </P>
            </Section>

            <Section title="Contact">
              <P>
                Questions about privacy? Email <Mail />.
              </P>
            </Section>

            <p className="mt-10 border-t border-white/[0.06] pt-6 font-ui text-xs leading-relaxed text-foreground-subtle">
              This page explains how the {SITE.name} website handles data. It is provided for transparency and is not
              legal advice.
            </p>
          </article>

          <SiteFooter />
        </div>
      </Shell>
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold tracking-tight text-ink">{title}</h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="font-ui text-base leading-relaxed text-foreground-muted">{children}</p>;
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 font-ui text-base leading-relaxed text-foreground-muted">
      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
      <span>{children}</span>
    </li>
  );
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-bright underline underline-offset-2 transition-colors hover:text-ink">
      {children}
    </a>
  );
}

function Mail() {
  return (
    <a href={`mailto:${SITE.email}`} className="text-accent-bright underline underline-offset-2 transition-colors hover:text-ink">
      {SITE.email}
    </a>
  );
}
