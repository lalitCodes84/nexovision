import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import type { InquiryRecord } from "@/types/inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Simple admin token guard. Set ADMIN_TOKEN in your env and call with:
//   Authorization: Bearer <ADMIN_TOKEN>
function authorized(req: Request): boolean {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return false;
  const header = req.headers.get("authorization") ?? "";
  return header === `Bearer ${token}`;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const url = new URL(req.url);
    const limit = Math.min(Number(url.searchParams.get("limit") ?? 50), 200);
    const status = url.searchParams.get("status");

    const db = await getDb();
    const filter: Partial<InquiryRecord> = {};

if (
  status === "new" ||
  status === "contacted" ||
  status === "won" ||
  status === "lost"
) {
  filter.status = status;
}
    const inquiries = await db
      .collection<InquiryRecord>("inquiries")
      .find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    return NextResponse.json({ ok: true, count: inquiries.length, inquiries });
  } catch (err) {
    console.error("[inquiries] error", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
