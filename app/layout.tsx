import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexovision.io"),
  title: {
    default: "NexoVision — Premium Web App Development & Digital Solutions",
    template: "%s | NexoVision",
  },
  description:
    "NexoVision builds premium web apps, dashboards, and digital products for ambitious founders. Modern stack. Cinematic design. Shipped fast.",
  keywords: ["web app development", "saas development", "dashboard", "next.js agency", "ui/ux"],
  authors: [{ name: "NexoVision" }],
  openGraph: {
    title: "NexoVision — Premium Web App Development",
    description: "Custom web apps, dashboards, and e-commerce — designed and engineered to convert.",
    type: "website",
    url: "/",
    siteName: "NexoVision",
  },
  twitter: { card: "summary_large_image", title: "NexoVision", description: "Premium web app development." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} dark`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster theme="dark" richColors position="bottom-center" />
      </body>
    </html>
  );
}
