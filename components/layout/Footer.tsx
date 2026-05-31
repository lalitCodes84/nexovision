import Link from "next/link";

import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-lg font-bold"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </span>

            <span>
              Nexo<span className="text-gradient">Vision</span>
            </span>
          </Link>

          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Premium web app development & digital solutions for ambitious
            founders. We design, engineer, and ship products that feel
            inevitable.
          </p>

          <div className="mt-6 flex gap-3">
            {[
              { label: "GitHub", href: "https://github.com" },
              { label: "Twitter", href: "https://twitter.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg glass px-4 py-2 text-sm transition-colors hover:bg-white/10"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Company
          </h4>

          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#portfolio"
                className="text-muted-foreground hover:text-foreground"
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                href="#services"
                className="text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contact
          </h4>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@nexovision.io</li>
            <li>+91-7619020725</li>
            <li>Remote · Worldwide</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NexoVision. Crafted with obsession.
      </div>
    </footer>
  );
}
