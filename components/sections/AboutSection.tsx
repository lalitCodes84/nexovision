"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const FEATURES = [
  "Senior-only engineering team",
  "Pixel-perfect design execution",
  "Performance budgets on every ship",
  "Transparent weekly demos",
  "Production-grade architecture",
  "Long-term partnership mindset",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-hero opacity-60 blur-3xl" />
            <div className="glow-border overflow-hidden rounded-2xl glass-strong p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                  alt="NexoVision team collaborating"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-nexo-purple">About NexoVision</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              A studio for <span className="text-gradient">ambitious</span> founders.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We're a small, senior team of designers and engineers obsessed with shipping products that feel inevitable. We don't do boilerplate — we craft.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-start gap-3 rounded-xl glass p-3"
                >
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-gradient-primary">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-sm">{f}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
