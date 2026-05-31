import { z } from "zod";

export const BUSINESS_TYPES = [
  "SaaS / Product",
  "E-Commerce",
  "Business / Corporate",
  "Portfolio / Personal",
  "Dashboard / Internal Tool",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(80),

  email: z
    .string()
    .email("Enter a valid email"),

  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(24)
    .regex(
      /^[+0-9\s().-]+$/,
      "Only digits and + - ( ) . allowed"
    ),

  businessType: z.enum(BUSINESS_TYPES),

  details: z
    .string()
    .min(20, "Tell us a bit more (min 20 chars)")
    .max(2000),
});

export type ContactValues = z.infer<typeof contactSchema>;