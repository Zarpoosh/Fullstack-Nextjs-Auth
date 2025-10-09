import { Resend } from "resend";

export const resend= new Resend(process.env.RESEND_API_KEY)

 export const FORM_EMAIL = process.env.FORM_EMAIL || "onboarding@resend.dev";