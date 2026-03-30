import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const {
      name,
      email,
      phone,
      message,
      agreeToTexts,
      selectedServices,
      serviceOther,
      serviceOtherText,
    } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY in server environment." },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const cleanPhone = phone?.trim() || "Not provided";
    const cleanSelectedServices = Array.isArray(selectedServices)
      ? selectedServices
      : [];
    const cleanOtherService =
      serviceOther && serviceOtherText?.trim() ? serviceOtherText.trim() : null;
    const selectedServicesText =
      cleanSelectedServices.length > 0 || cleanOtherService
        ? [
            ...cleanSelectedServices,
            ...(cleanOtherService ? [`Other: ${cleanOtherService}`] : []),
          ].join(", ")
        : "None selected";
    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    await resend.emails.send({
      from: fromEmail,
      to: "jennypherurena@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background: #f7f7f5; padding: 24px; color: #1f2937;">
          <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
            <div style="background: #EFBF04; padding: 18px 22px;">
              <h2 style="margin: 0; font-size: 20px; color: #ffffff;">New Contact Form Submission</h2>
              <p style="margin: 6px 0 0; font-size: 13px; color: #fff8dc;">Origen Restaurant Consulting</p>
            </div>

            <div style="padding: 22px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; width: 170px; font-weight: 700; color: #374151;">Name</td>
                  <td style="padding: 8px 0; color: #111827;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 700; color: #374151;">Email</td>
                  <td style="padding: 8px 0; color: #111827;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 700; color: #374151;">Phone</td>
                  <td style="padding: 8px 0; color: #111827;">${cleanPhone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 700; color: #374151;">Services Interested</td>
                  <td style="padding: 8px 0; color: #111827;">${selectedServicesText}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 700; color: #374151;">Text Consent</td>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; padding: 4px 10px; border-radius: 999px; background: ${
                      agreeToTexts ? "#dcfce7" : "#fee2e2"
                    }; color: ${agreeToTexts ? "#166534" : "#991b1b"}; font-size: 12px; font-weight: 700;">
                      ${agreeToTexts ? "Consented" : "Not Consented"}
                    </span>
                  </td>
                </tr>
              </table>

              <div style="margin-top: 16px;">
                <p style="margin: 0 0 8px; font-weight: 700; color: #374151;">Message</p>
                <div style="border: 1px solid #e5e7eb; background: #fafaf9; border-radius: 10px; padding: 12px; white-space: normal; color: #111827;">
                  ${message.replace(/\n/g, "<br/>")}
                </div>
              </div>
            </div>

            <div style="border-top: 1px solid #e5e7eb; background: #fafaf9; padding: 12px 22px;">
              <p style="margin: 0; font-size: 12px; color: #6b7280;">Submitted at: ${timestamp}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Unable to send email." },
      { status: 500 },
    );
  }
}
