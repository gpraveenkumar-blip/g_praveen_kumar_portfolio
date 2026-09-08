import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      console.error("CONTACT_TO_EMAIL is missing");
      return NextResponse.json(
        { error: "Recipient email is not configured" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `

New message from your portfolio

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error("Contact form error:", err);

    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}