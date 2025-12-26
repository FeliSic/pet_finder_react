import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

console.log('RESEND_KEY:', process.env.RESEND_KEY);

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (emailData: EmailData) => {
  try {
    const result = await resend.emails.send({
      from: 'Pet Finder <onboarding@resend.dev>',
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
    });

    console.log('Email enviado exitosamente:', result);
    return result;
  } catch (error) {
    console.error('Error en sendEmail:', error);
    throw error;
  }
};