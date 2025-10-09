import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { FORM_EMAIL, resend } from "./resend";
import { getResetPasswordEmailHtml } from "./email.template";

const prisma = new PrismaClient();
// const FORM_EMAIL = process.env.FORM_EMAIL || "Your App <no-reply@yourapp.com>";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // یا mysql, sqlite, ...
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      // console.log("Reset password url", user.email, ":", url);

      try {
        const emaiHtml = getResetPasswordEmailHtml(user.email, url);

        // send the email using resend
        const { data, error } = await resend.emails.send({
          from: FORM_EMAIL,
          to: user.email,
          subject: "Reset your password ",
          html: emaiHtml,
        }); 

        // check for errors
        if (error) {
          console.error("Failed to send reset password email:", error);
          throw new Error("Failed to send reset password email");
        }

        // success logs
        console.log(
          "✅ Reset password email sent successfully to:",
          user.email
        );
        console.log(" Email ID:", data?.id);

        // In development, also log the URL for easy testing
        if (process.env.NODE_ENV === "development") {
          console.log("🔗 Reset URL (dev only):", url);
        }
      } catch (err) {
        console.error("Erro in send reset password:", err);
        throw err;
      }
    },
  },
});
