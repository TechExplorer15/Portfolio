'use client';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border text-center">
      <div className="container-main">
        <p className="text-dim text-sm font-mono">
          © {new Date().getFullYear()} Tanmay Wagh. Crafted with precision.
        </p>
        <p className="text-dim/60 text-xs font-mono mt-2">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
