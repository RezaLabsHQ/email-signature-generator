import Head from "next/head";
import Link from "next/link";
import Shell from "@/components/Shell";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Scholaro — Email Signature Generator for Academics & Professionals
        </title>
        <meta
          name="description"
          content="Build a clean, email-safe signature for Gmail, Outlook, and Apple Mail. Pick a template, fill in your details, and copy the HTML. Free, no sign-up."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Shell>
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <header className="pt-6">
            <SiteNav />
          </header>

          {/* Hero */}
          <section className="grid gap-10 py-16 md:grid-cols-12 md:py-24 lg:py-28">
            <Reveal className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-ui text-xs text-foreground-subtle">
                Free · No sign-up · Your details never leave your browser
              </span>
              <h1 className="gradient-text mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                An email signature that looks right in every inbox.
              </h1>
              <p className="mt-6 max-w-xl font-ui text-lg leading-relaxed text-foreground-muted">
                Pick a template, fill in your details, and copy a signature that
                holds up in Gmail, Outlook, and Apple Mail. Built for students,
                researchers, and professionals.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/generate"
                  className="btn-shine rounded-md bg-accent px-5 py-3 text-center font-ui text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_8px_24px_rgba(94,106,210,0.32),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all hover:bg-accent-bright active:scale-[0.98]"
                >
                  Build my signature
                </Link>
                <a
                  href="#example"
                  className="rounded-md bg-white/[0.05] px-5 py-3 text-center font-ui text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(255,255,255,0.07)] transition-all hover:bg-white/[0.09]"
                >
                  See an example
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-5">
              <div className="glass-panel p-4">
                <div className="rounded-md border border-white/[0.08] bg-background-elevated p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
                      signature.html
                    </span>
                  </div>
                  <div className="rounded-sm bg-white p-4 text-[#111111]">
                    <p className="font-sans text-[17px] font-bold leading-tight">
                      Hamid Reza Alami
                    </p>
                    <p className="mt-1 font-sans text-[13px] text-[#444444]">
                      Software Engineering Student
                    </p>
                    <p className="mt-3 border-l-4 border-[#5E6AD2] pl-3 font-sans text-[12px] leading-5 text-[#333333]">
                      School of Computer Science
                      <br />
                      Example University
                      <br />
                      hamid.alami@example.edu.au
                    </p>
                  </div>
                  <p className="mt-4 font-ui text-xs leading-5 text-foreground-subtle">
                    Exported as plain table-based HTML with inline styles — the
                    format email clients trust.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <hr className="section-rule" />

          {/* Example — the signature in a real email */}
          <section
            id="example"
            className="grid items-center gap-10 py-16 md:grid-cols-12 md:py-24"
          >
            <Reveal className="md:col-span-5">
              <p className="eyebrow">Live example</p>
              <h2 className="gradient-text mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                See it at the bottom of a real email.
              </h2>
              <p className="mt-5 max-w-md font-ui text-base leading-relaxed text-foreground-muted">
                Your signature is never seen on its own — it&apos;s the sign-off
                under every message you send. This is a mock email so you can
                judge what actually matters: how the exported HTML sits beneath
                your text, how the spacing reads, and how the links look in
                context.
              </p>
              <p className="mt-4 max-w-md font-ui text-base leading-relaxed text-foreground-muted">
                The signature below is the same email-safe markup you&apos;ll
                copy — no images, no web fonts, nothing that breaks when it
                lands in someone&apos;s inbox.
              </p>
              <Link
                href="/generate"
                className="btn-shine mt-7 inline-block rounded-md bg-accent px-5 py-3 font-ui text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_8px_24px_rgba(94,106,210,0.32),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all hover:bg-accent-bright active:scale-[0.98]"
              >
                Build mine like this
              </Link>
            </Reveal>

            <Reveal delay={120} className="md:col-span-7">
              <MockEmail />
            </Reveal>
          </section>

          <hr className="section-rule" />

          {/* Why it works — asymmetric bento */}
          <section id="why" className="py-16 md:py-24">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Why it works</p>
              <h2 className="gradient-text mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                A modern editor. Deliberately old-school output.
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 md:auto-rows-[184px] md:grid-cols-6">
              <Reveal className="md:col-span-4 md:row-span-2">
                <SpotlightCard className="flex h-full flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="eyebrow">The core idea</p>
                    <h3 className="mt-3 max-w-lg font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
                      The editor and the signature are two separate systems.
                    </h3>
                    <p className="mt-4 max-w-lg font-ui text-base leading-relaxed text-foreground-muted">
                      The editor can use a modern dark interface — glass, depth,
                      motion. The signature it exports stays conservative on
                      purpose: inline styles, table layout, plain links, fixed
                      dimensions, and no JavaScript. That separation is exactly
                      why it pastes cleanly into picky clients.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Inline CSS",
                      "Table layout",
                      "Web-safe fonts",
                      "No JavaScript",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>

              <Reveal delay={80} className="md:col-span-2">
                <BentoStat
                  value="6"
                  label="Templates"
                  body="Academic, research, professional, photo, and branded layouts."
                />
              </Reveal>

              <Reveal delay={160} className="md:col-span-2">
                <BentoStat
                  value="Live"
                  label="Checks as you type"
                  body="Required fields, links, colors, and template fit — flagged before export."
                />
              </Reveal>

              <Reveal delay={120} className="md:col-span-3">
                <BentoStat
                  value="3"
                  label="Export modes"
                  body="Rich clipboard copy, HTML download, or raw source."
                />
              </Reveal>

              <Reveal delay={200} className="md:col-span-3">
                <BentoStat
                  value="Private"
                  label="Stays in your browser"
                  body="No account, no upload. Your details never leave the page."
                />
              </Reveal>
            </div>
          </section>

          <hr className="section-rule" />

          {/* Setup tips by client */}
          <section id="clients" className="py-16 md:py-24">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Pasting it in</p>
              <h2 className="gradient-text mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                Setup tips by email client.
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "Gmail",
                  "Paste the copied signature into Settings → Signature. Keep image URLs public and on https.",
                ],
                [
                  "Outlook",
                  "Use the downloaded HTML for desktop setup. Avoid oversized logos and non-https images.",
                ],
                [
                  "Apple Mail",
                  "Paste the rich signature, then send yourself a test email to check spacing and link colors.",
                ],
                [
                  "Mobile",
                  "Pick Basic Academic or Compact Professional when small screens and replies matter most.",
                ],
              ].map(([client, note], index) => (
                <Reveal key={client} delay={index * 80}>
                  <SpotlightCard className="h-full p-6">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {client}
                    </h3>
                    <p className="mt-3 font-ui text-sm leading-relaxed text-foreground-muted">
                      {note}
                    </p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="pb-16 md:pb-24">
            <Reveal>
              <div className="glass-panel relative overflow-hidden px-6 py-12 text-center md:px-8 md:py-16">
                <h2 className="gradient-text mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
                  Ready in about two minutes.
                </h2>
                <p className="mx-auto mt-4 max-w-xl font-ui text-base leading-relaxed text-foreground-muted">
                  No account, no email address required to start. Build it,
                  preview it, copy it.
                </p>
                <Link
                  href="/generate"
                  className="btn-shine mt-8 inline-block rounded-md bg-accent px-6 py-3 font-ui text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_8px_24px_rgba(94,106,210,0.32),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all hover:bg-accent-bright active:scale-[0.98]"
                >
                  Build my signature
                </Link>
              </div>
            </Reveal>
          </section>

          <SiteFooter />
        </div>
      </Shell>
    </>
  );
}

function MockEmail() {
  return (
    <div className="glass-panel overflow-hidden p-3">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-2 pb-3 pt-1">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
          New message
        </span>
        <span className="ml-auto rounded bg-accent/90 px-2.5 py-1 font-ui text-[11px] font-semibold text-white">
          Send
        </span>
      </div>

      {/* Address fields */}
      <div className="space-y-px overflow-hidden rounded-t-md border border-white/[0.08] bg-background-elevated font-ui text-[13px]">
        <div className="flex gap-3 border-b border-white/[0.06] px-4 py-2.5">
          <span className="w-16 shrink-0 text-foreground-subtle">To</span>
          <span className="text-ink">jordan.lee@university.edu</span>
        </div>
        <div className="flex gap-3 px-4 py-2.5">
          <span className="w-16 shrink-0 text-foreground-subtle">Subject</span>
          <span className="text-ink">Re: Thesis draft — feedback attached</span>
        </div>
      </div>

      {/* Email body (white paper) */}
      <div className="rounded-b-md border border-t-0 border-white/[0.08] bg-white p-6 text-[#1a1a1a]">
        <p className="font-sans text-[14px] leading-6">Hi Jordan,</p>
        <p className="mt-3 font-sans text-[14px] leading-6 text-[#333333]">
          Thanks for sending the draft through. I&apos;ve left comments on
          chapters two and three — overall it&apos;s looking strong. Happy to
          jump on a quick call this week if that&apos;s easier.
        </p>
        <p className="mt-3 font-sans text-[14px] leading-6 text-[#333333]">
          Best regards,
        </p>

        {/* The signature — same email-safe layout you export */}
        <div className="mt-5">
          <p className="font-sans text-[16px] font-bold leading-tight text-[#111111]">
            Hamid Reza Alami
          </p>
          <p className="mt-1 font-sans text-[13px] text-[#444444]">
            Software Engineering Student
          </p>
          <div className="mt-3 border-l-4 border-[#5E6AD2] pl-3 font-sans text-[12px] leading-5 text-[#333333]">
            School of Computer Science
            <br />
            Example University
            <br />
            <span className="text-[#5E6AD2] underline">
              hamid.alami@example.edu.au
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoStat({
  value,
  label,
  body,
}: {
  value: string;
  label: string;
  body: string;
}) {
  return (
    <SpotlightCard className="h-full p-6">
      <div className="flex h-full flex-col justify-center">
        <p className="bg-gradient-to-r from-[#9aa2ff] to-[#5e6ad2] bg-clip-text font-display text-4xl font-semibold leading-none tracking-tight text-transparent">
          {value}
        </p>
        <p className="mt-3 font-display text-base font-semibold tracking-tight text-ink">
          {label}
        </p>
        <p className="mt-2 font-ui text-sm leading-relaxed text-foreground-muted">
          {body}
        </p>
      </div>
    </SpotlightCard>
  );
}
