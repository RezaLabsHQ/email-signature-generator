import Head from "next/head";
import Shell from "@/components/Shell";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import SignatureBuilder from "@/components/generator/SignatureBuilder";

export default function GeneratePage() {
  return (
    <>
      <Head>
        <title>Build your signature — Scholaro</title>
        <meta
          name="description"
          content="Pick a template, fill in your details, and copy an email-safe signature for Gmail, Outlook, and Apple Mail."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Shell>
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
          <header className="pt-6">
            <SiteNav ctaLabel="Generator" />
            <div className="py-10">
              <p className="eyebrow">Signature builder</p>
              <h1 className="gradient-text mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Build, preview, and export your email-safe signature.
              </h1>
              <p className="mt-4 max-w-2xl font-ui text-base leading-relaxed text-foreground-muted">
                Choose a template, fill in the fields that matter, then copy rich HTML or download the source.
              </p>
            </div>
          </header>

          <SignatureBuilder />

          <div className="mt-12">
            <SiteFooter />
          </div>
        </div>
      </Shell>
    </>
  );
}
