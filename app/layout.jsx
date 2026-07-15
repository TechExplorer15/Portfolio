import { Manrope, Syne, JetBrains_Mono } from 'next/font/google';
import './globals.css';

/* ── Font Loading (self-hosted via next/font, zero CLS) ──────────────── */

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

/* ── SEO Metadata ────────────────────────────────────────────────────── */

export const metadata = {
  title: 'Tanmay Wagh — Full-Stack Developer',
  description:
    'Computer Science graduate and Full-Stack Developer crafting performant, scalable web applications with clean architecture and exceptional user experiences.',
  keywords: [
    'Tanmay Wagh',
    'Full-Stack Developer',
    'React Developer',
    'Frontend Developer',
    'Portfolio',
    'Web Developer',
    'Node.js',
    'JavaScript',
  ],
  authors: [{ name: 'Tanmay Wagh' }],
  creator: 'Tanmay Wagh',
  openGraph: {
    title: 'Tanmay Wagh — Full-Stack Developer',
    description:
      'Computer Science graduate crafting performant, scalable web applications.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Tanmay Wagh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanmay Wagh — Full-Stack Developer',
    description:
      'Computer Science graduate crafting performant, scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ── Root Layout ─────────────────────────────────────────────────────── */

export default function RootLayout({ children }) {
  return (
    <html
      className={`${manrope.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="bg-bg antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
