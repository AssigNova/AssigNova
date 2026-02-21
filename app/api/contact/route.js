import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, website, message, services } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS exists:", !!process.env.SMTP_PASS);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // info@yourdomain.com
        pass: process.env.SMTP_PASS, // Hostinger email password
      },
    });

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

    await transporter.sendMail({
      from: `"Assignova Website" <${process.env.SMTP_USER}>`, // must be Hostinger email
      to: process.env.RECEIVER_EMAIL, // assignova@gmail.com
      replyTo: email, // user email for quick reply
      subject: `New Quote Request from ${name}`,
      text: emailContent,
    });

    console.log("Quote request received:", { name, email, phone, services });

    return NextResponse.json(
      {
        success: true,
        message: "Your quote request has been submitted. We will contact you within 24 hours.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
  }
}
