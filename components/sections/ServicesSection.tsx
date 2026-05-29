"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/constants/services";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-nexo-purple">Services</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need to <span className="text-gradient">ship</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From idea to launch, we design, engineer, and scale the products your customers love.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group glow-border relative overflow-hidden rounded-2xl glass-strong p-7 transition-shadow hover:shadow-glow"
              >
                <div className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.gradient} shadow-glow`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
