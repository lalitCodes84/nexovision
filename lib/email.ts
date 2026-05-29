import nodemailer from "nodemailer";
import type { Inquiry } from "@/types/inquiry";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth:
    process.env.SMTP_USER && process.env.SMTP_PASS
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
});

export async function sendInquiryEmail(inquiry: Inquiry): Promise<void> {
  const from = process.env.MAIL_FROM ?? "NexoVision <hello@nexovision.io>";
  const to = process.env.MAIL_TO ?? "leads@nexovision.io";

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;background:#0a0a14;color:#f1f5f9;padding:32px;border-radius:16px">
      <h2 style="margin:0 0 16px;background:linear-gradient(135deg,#60a5fa,#a78bfa);-webkit-background-clip:text;color:transparent">
        New NexoVision inquiry
      </h2>
      <table cellpadding="8" style="width:100%;border-collapse:collapse">
        <tr><td><b>Name</b></td><td>${escapeHtml(inquiry.name)}</td></tr>
        <tr><td><b>Email</b></td><td>${escapeHtml(inquiry.email)}</td></tr>
        <tr><td><b>Phone</b></td><td>${escapeHtml(inquiry.phone)}</td></tr>
        <tr><td><b>Business</b></td><td>${escapeHtml(inquiry.businessType)}</td></tr>
        <tr><td valign="top"><b>Details</b></td><td>${escapeHtml(inquiry.details).replace(/\n/g, "<br/>")}</td></tr>
      </table>
    </div>`;

  await transporter.sendMail({
    from, to,
    replyTo: inquiry.email,
    subject: `New inquiry — ${inquiry.name} (${inquiry.businessType})`,
    html,
    text: `New inquiry from ${inquiry.name} <${inquiry.email}> | ${inquiry.phone} | ${inquiry.businessType}\n\n${inquiry.details}`,
  });
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
