# Scholaro — Email Signature Generator

A Next.js app for building clean, email-client-safe signatures for academics and professionals.
Pick a template, fill in your details, and copy or download HTML that pastes cleanly into Gmail,
Outlook, and Apple Mail. Everything runs in the browser — no account, no upload.

## Stack

- Next.js 16 (Pages Router)
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- ESLint 9 (flat config)

## How It Works

The product is built around one deliberate boundary: **the editor and the exported signature are
separate systems.**

- The **app UI** can be modern — dark theme, glass panels, subtle motion.
- The **exported signature** is conservative on purpose: table layout, inline CSS, web-safe fonts,
  explicit image dimensions, plain links, and no JavaScript. That is what makes it survive picky
  email clients.

The app is three routes:

- `/` — landing page (hero, a mock-email example, a feature bento, and per-client setup tips).
- `/generate` — the builder, laid out like a console: a sticky template rail on the left, the form
  in the center, and a sticky live preview + export panel on the right.
- `/privacy` — privacy policy (Australia / Privacy Act 1988 and EU/UK GDPR).

The UI is built from a small set of shared primitives: `Shell` (the ambient dark canvas), `SiteNav`,
`SiteFooter`, and `SpotlightCard` / `Reveal` for the mouse-tracking glow and scroll-in animations.
All motion is plain CSS + a little vanilla JS — no animation library.

## Architecture

```txt
src/
├── components/
│   ├── Shell.tsx                  # ambient dark canvas (gradients, noise, blobs)
│   ├── SiteNav.tsx                # shared top navigation
│   ├── SiteFooter.tsx             # shared footer (developer info + privacy link)
│   ├── generator/
│   │   ├── SignatureBuilder.tsx   # composes rail + form + preview, owns state
│   │   ├── TemplatePicker.tsx
│   │   ├── SignatureForm.tsx
│   │   ├── SignaturePreview.tsx
│   │   └── ExportPanel.tsx        # copy / download / copy-source
│   └── ui/
│       ├── Button.tsx
│       ├── Field.tsx
│       ├── TemplateCard.tsx
│       ├── SpotlightCard.tsx      # cursor-tracking glow card
│       └── Reveal.tsx             # IntersectionObserver scroll-in
├── features/
│   └── signatures/
│       ├── types.ts               # SignatureData, SignatureTemplate
│       ├── defaults.ts
│       ├── samples.ts             # academic / professional sample data
│       ├── validation.ts          # required fields, email, URLs, hex color
│       ├── templates/             # template registry (one file per template)
│       │   ├── basicAcademic.ts
│       │   ├── academicResearch.ts
│       │   ├── compactProfessional.ts
│       │   ├── professionalMinimal.ts
│       │   ├── photoProfile.ts
│       │   ├── executiveBranded.ts
│       │   ├── utils.ts           # escapeHtml / safeUrl / safeHexColor helpers
│       │   └── index.ts
│       └── export/
│           ├── buildHtml.ts
│           ├── copySignature.ts
│           └── downloadSignature.ts
├── lib/
│   ├── cn.ts
│   └── site.ts                    # site + developer details (single source of truth)
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx              # Google Fonts
│   ├── index.tsx                  # landing page
│   ├── generate.tsx               # signature builder
│   └── privacy.tsx                # privacy policy (AU + EU/UK)
└── styles/
    └── globals.css                # design tokens + reusable surface/motion classes
```

### Templates

Each template is a small object with metadata and a renderer:

```ts
type SignatureTemplate = {
  id: string;
  name: string;
  category: "academic" | "professional" | "advanced";
  description: string;
  supportsPhoto: boolean;
  supportsLogo: boolean;
  renderHtml: (data: SignatureData) => string;
};
```

To add a template: create a file under `features/signatures/templates/`, build the HTML with the
helpers in `utils.ts` (always run user input through `escapeHtml` / `safeUrl` / `safeHexColor`), and
register it in `templates/index.ts`.

### Email-safe output rules

Exported HTML sticks to: table layout, inline CSS, web-safe fonts, explicit image width/height,
absolute image URLs, simple links with readable text, no JavaScript, no external CSS, no flexbox/grid,
and no emoji for meaningful icons.

## Security

- All user input is HTML-escaped and URL-validated in `templates/utils.ts` before it reaches the
  preview's `dangerouslySetInnerHTML`. Only `http(s):`, `mailto:`, and `tel:` URLs are allowed, and
  control characters are stripped from URLs.
- `next.config.ts` sets a Content-Security-Policy plus `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, and `Permissions-Policy` as defense-in-depth.
- No backend, no analytics, no cookies, no local storage. Nothing you type leaves the browser. The
  `/privacy` page documents this and the only third parties involved in serving the page (the host
  and Google Fonts).

## Configuration

Personal details (developer name, contact email, social/repo links, privacy "last updated" date) live
in one place — `src/lib/site.ts`. Update them there and the footer and privacy page both follow.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```
