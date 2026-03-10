
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Bitwize <onboarding@resend.dev>",
      to: ["bitwize.swe@gmail.com"],
      subject: "New Message from your portfolio",
      react: EmailTemplate({
        name,
        email,
        message,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
