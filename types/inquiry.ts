export type BusinessType =
  | "SaaS / Product"
  | "E-Commerce"
  | "Business / Corporate"
  | "Portfolio / Personal"
  | "Dashboard / Internal Tool"
  | "Other";

export interface Inquiry {
  name: string;
  email: string;
  phone: string;
  businessType: BusinessType | string;
  details: string;
}

export interface InquiryRecord extends Inquiry {
  _id?: string;
  createdAt: Date;
  status: "new" | "contacted" | "won" | "lost";
  source?: string;
}
