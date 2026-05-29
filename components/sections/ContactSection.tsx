"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { contactSchema, BUSINESS_TYPES, type ContactValues } from "@/validations/contactSchema";
import { cn } from "@/lib/utils";

const fieldClass =
  "block w-full rounded-xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:ring-2 focus:ring-nexo-purple/60 focus:shadow-glow";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success("Thanks! We'll be in touch within 24 hours.", {
        description: `Inquiry received for ${values.businessType}.`,
      });
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again or email hello@nexovision.io.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-nexo-purple">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Let's build something <span className="text-gradient">extraordinary</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your project. We'll come back with a plan within 24 hours.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li>📧 hello@nexovision.io</li>
              <li>📞 +91-7619020725</li>
              <li>🌎 Remote · Worldwide</li>
            </ul>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glow-border space-y-5 rounded-2xl glass-strong p-6 shadow-glow md:p-8"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" error={errors.name?.message}>
                <input {...register("name")} placeholder="Ada Lovelace"
                  className={cn(fieldClass, errors.name && "ring-2 ring-red-500/60")} />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input type="email" {...register("email")} placeholder="you@company.com"
                  className={cn(fieldClass, errors.email && "ring-2 ring-red-500/60")} />
              </Field>
              <Field label="Phone number" error={errors.phone?.message}>
                <input type="tel" {...register("phone")} placeholder="+91-7619020725"
                  className={cn(fieldClass, errors.phone && "ring-2 ring-red-500/60")} />
              </Field>
              <Field label="Business type" error={errors.businessType?.message}>
                <select {...register("businessType")}
                  className={cn(fieldClass, "appearance-none", errors.businessType && "ring-2 ring-red-500/60")}
                  defaultValue="">
                  <option value="" disabled>Select…</option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-card">{t}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Project details" error={errors.details?.message}>
              <textarea rows={5} {...register("details")}
                placeholder="Tell us about your goals, timeline, and budget…"
                className={cn(fieldClass, "resize-none", errors.details && "ring-2 ring-red-500/60")} />
            </Field>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {submitting
                ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>)
                : (<>Send inquiry <Send className="h-4 w-4" /></>)}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              We reply within one business day. No spam, ever.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
