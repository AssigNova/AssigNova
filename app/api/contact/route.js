import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, website, message, services } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const emailContent = `
New Quote Request from Assignova

Name: ${name}
Email: ${email}
Phone: ${phone}
Website: ${website || "Not provided"}
Services Needed: ${services?.length ? services.join(", ") : "Not specified"}

Message:
${message}
    `;

    // Send email via HTTPS API (Works perfectly on Cloudflare)
    const data = await resend.emails.send({
      from: "Assignova Website <onboarding@resend.dev>", // Replace with your verified domain later
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, message: "Quote request submitted." }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
  }
}
