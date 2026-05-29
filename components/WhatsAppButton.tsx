"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "7619020725";
  const href = `https://wa.me/${number}?text=${encodeURIComponent("Hi NexoVision, I'd like to discuss Your project.")}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-glow"
    >
      <span className="absolute inset-0 animate-glowPulse rounded-full bg-green-400/40 blur-xl" aria-hidden />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}
