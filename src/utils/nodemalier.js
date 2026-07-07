import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // true = 465, false = other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendemail = async ({
  name,
  email,
  phone,
  message,
  service,
  device,
}) => {
  await transporter.sendMail({
    from: `"Laptop Doc" <${process.env.SMTP_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `📩 New ${service || "Customer"} Inquiry`,
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f4f4; padding:30px;">
        <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">

          <div style="background:#ea580c; padding:24px;">
            <h1 style="margin:0; color:#ffffff; font-size:24px;">
              New Customer Inquiry
            </h1>
            <p style="margin:8px 0 0; color:#ffe7d6;">
              A new enquiry has been submitted from your website.
            </p>
          </div>

          <div style="padding:30px;">

            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:12px; font-weight:bold; width:180px; background:#f9fafb;">Name</td>
                <td style="padding:12px;">${name || "-"}</td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold; background:#f9fafb;">Email</td>
                <td style="padding:12px;">
                  <a href="mailto:${email}" style="color:#ea580c;">
                    ${email || "-"}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold; background:#f9fafb;">Phone</td>
                <td style="padding:12px;">
                  <a href="tel:${phone}" style="color:#ea580c;">
                    ${phone || "-"}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold; background:#f9fafb;">Service</td>
                <td style="padding:12px;">${service || "-"}</td>
              </tr>

              <tr>
                <td style="padding:12px; font-weight:bold; background:#f9fafb;">Device</td>
                <td style="padding:12px;">${device || "-"}</td>
              </tr>
            </table>

            <div style="margin-top:28px;">
              <h3 style="margin-bottom:10px; color:#111827;">
                Customer Message
              </h3>

              <div style="
                background:#f9fafb;
                border-left:4px solid #ea580c;
                padding:18px;
                border-radius:6px;
                white-space:pre-line;
                color:#374151;
              ">
                ${message || "No message provided."}
              </div>
            </div>

            <div style="margin-top:32px; text-align:center;">
              <a
                href="mailto:${email}"
                style="
                  display:inline-block;
                  padding:12px 24px;
                  background:#ea580c;
                  color:#ffffff;
                  text-decoration:none;
                  border-radius:8px;
                  font-weight:bold;
                "
              >
                Reply to Customer
              </a>
            </div>

          </div>

          <div style="
            background:#f9fafb;
            padding:18px;
            text-align:center;
            color:#6b7280;
            font-size:13px;
          ">
            This enquiry was submitted through the <strong>Laptop Doc</strong> website contact form.
          </div>

        </div>
      </div>
    `,
  });
};
