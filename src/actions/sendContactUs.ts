"use server";

import { Resend } from "resend";

import { SendContactFormDto } from "@/types/SendContactFormDto";

const API_KEY = process.env.RESEND_API_KEY;

if (!API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

export const sendContactUs = async (dto: SendContactFormDto) => {
  const resend = new Resend(API_KEY);

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ['bazarkom.az40@gmail.com'],
    subject: "New email from contact form Bazarkom.",
    html: `<strong> Sender email: ${dto.email}
<br><br> 
Sender phone number: ${dto.phoneNumber}
<br><br> 
Sender first name: ${dto.firstName}
<br><br> 
Sender last name: ${dto.lastName}
<br><br> 
Message: ${dto.message}
</strong>`,
  });

  return { success: true };
};