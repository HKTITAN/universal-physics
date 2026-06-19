import type { Metadata } from "next";
import localFont from "next/font/local";
import { Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import "katex/dist/katex.min.css";
import "./globals.css";

const departure = localFont({
  src: "../public/fonts/DepartureMono-Regular.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-departure",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-serif",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://universal-physics.khe.money"),
  title: {
    default: "Universal Physics — a six-iteration research manual",
    template: "%s · Universal Physics",
  },
  description:
    "A six-iteration, adversarially-refereed research program toward a universal theory of physics — and the precise account of why one is not yet in hand. 17 catalogued clashes, ~90 refereed findings in iteration 6, three explicit hedges.",
  openGraph: {
    title: "Universal Physics",
    description:
      "A six-iteration, adversarially-refereed research program toward a universal theory of physics — and the precise account of why one is not yet in hand.",
    url: "https://universal-physics.khe.money",
    siteName: "Universal Physics",
    type: "website",
    locale: "en_US",
    // Branded card (paper + ink-blue). SVG card; swap for a 1200×630 PNG if a
    // raster generator becomes available. TODO(og-image): produce a PNG variant.
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Universal Physics — a six-iteration research manual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Physics",
    description:
      "A six-iteration, adversarially-refereed research manual: the verdict, the registries, the open problems, the experiment watchlist.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${departure.variable} ${sourceSerif.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="brand">
              <span className="brand-mark" aria-hidden="true">
                UP
              </span>
              UNIVERSAL PHYSICS
            </Link>
            <nav className="site-nav" aria-label="Site">
              <Link href="/#contents">Contents</Link>
              <Link href="/manual/conclusion">The Verdict</Link>
              <Link href="/contribute">Contribute</Link>
              <Link href="/about">About</Link>
              <a href="https://github.com/HKTITAN/universal-physics" rel="noreferrer">
                GitHub
              </a>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="site-footer-inner">
            <p style={{ margin: 0 }}>
              Harshit Khemani + Claude · design inspired by Dan Hollick&rsquo;s{" "}
              <a href="https://www.makingsoftware.com" rel="noreferrer">
                Making Software
              </a>
            </p>
            <p style={{ margin: 0 }}>
              <a href="https://github.com/HKTITAN/universal-physics" rel="noreferrer">
                Source on GitHub
              </a>{" "}
              · content{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="noreferrer">
                CC BY-SA 4.0
              </a>
              , code MIT · © 2026
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
