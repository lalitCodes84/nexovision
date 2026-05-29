import { Code2, LayoutDashboard, ShoppingCart, Building2, User, Palette, type LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web App Development",
    description: "Full-stack web applications built with React, Next.js, and modern cloud architecture.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard Development",
    description: "Powerful, data-rich admin panels with charts, tables, and real-time analytics.",
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Conversion-focused storefronts with payments, inventory, and customer journeys.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Building2,
    title: "Business Websites",
    description: "Premium corporate sites that convert visitors into qualified leads.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    description: "Cinematic personal sites that showcase your work with elegance and motion.",
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design systems and interfaces engineered for clarity, delight, and scale.",
    gradient: "from-cyan-500 to-blue-500",
  },
];
