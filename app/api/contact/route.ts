import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { sendInquiryEmail } from "@/lib/email";
import { contactSchema } from "@/validations/contactSchema";
import type { InquiryRecord } from "@/types/inquiry";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const record: InquiryRecord = {
      ...parsed.data,
      createdAt: new Date(),
      status: "new",
      source: req.headers.get("referer") ?? "direct",
    };

    try {
      const db = await getDb();
      await db.collection<InquiryRecord>("inquiries").insertOne(record);
    } catch (e) {
      console.error("[contact] db insert failed", e);
    }

    try {
      await sendInquiryEmail(parsed.data);
    } catch (e) {
      console.error("[contact] email failed", e);
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
