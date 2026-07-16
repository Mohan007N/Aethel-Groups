"""
Aethel Groups — Contact Form Backend
FastAPI server with Resend email integration.
"""

import os
from datetime import datetime

import resend
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

load_dotenv()

# ── Configuration ──────────────────────────────────────────────
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL", "mohankrishnan4099@gmail.com")

if not RESEND_API_KEY:
    raise RuntimeError("RESEND_API_KEY environment variable is required")

resend.api_key = RESEND_API_KEY

# ── App ────────────────────────────────────────────────────────
app = FastAPI(
    title="Aethel Groups API",
    description="Backend API for Aethel Groups website — handles contact form submissions via Resend.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Models ─────────────────────────────────────────────────────
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    organization: str = ""
    service: str = ""
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str


# ── Email Template ─────────────────────────────────────────────
def build_email_html(data: ContactForm) -> str:
    timestamp = datetime.now().strftime("%B %d, %Y at %I:%M %p IST")
    return f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background:#F1F5F9;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);">
              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#0F172A,#1E293B);padding:36px 40px;text-align:center;">
                  <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
                    ✦ Aethel Groups
                  </h1>
                  <p style="margin:8px 0 0;color:#94A3B8;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;">
                    New Contact Form Submission
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px 40px;">
                  <p style="margin:0 0 24px;color:#64748B;font-size:14px;line-height:1.6;">
                    A new enquiry has been received through the Aethel Groups website contact form.
                  </p>

                  <!-- Details Table -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:12px;overflow:hidden;">
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;width:140px;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Name</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:15px;font-weight:500;">
                        {data.name}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Email</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;">
                        <a href="mailto:{data.email}" style="color:#2563EB;font-size:15px;text-decoration:none;font-weight:500;">{data.email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Phone</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:15px;">
                        {data.phone or "Not provided"}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Organization</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:15px;">
                        {data.organization or "Not provided"}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Service</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:15px;">
                        {data.service or "Not specified"}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;" colspan="2">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Message</strong>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" style="padding:16px 20px;color:#1E293B;font-size:15px;line-height:1.7;">
                        {data.message}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:20px 40px 28px;border-top:1px solid #F1F5F9;text-align:center;">
                  <p style="margin:0;color:#94A3B8;font-size:12px;">
                    Received on {timestamp}
                  </p>
                  <p style="margin:6px 0 0;color:#CBD5E1;font-size:11px;">
                    Aethel Groups · Chennai, Tamil Nadu, India
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    """


# ── Routes ─────────────────────────────────────────────────────
@app.get("/")
async def root():
    return {"status": "ok", "service": "Aethel Groups API", "version": "1.0.0"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.post("/api/contact", response_model=ContactResponse)
async def send_contact_email(form: ContactForm):
    """Send contact form data via email using Resend."""
    try:
        params: resend.Emails.SendParams = {
            "from": "Aethel Groups <onboarding@resend.dev>",
            "to": [RECIPIENT_EMAIL],
            "subject": f"New Enquiry from {form.name} — {form.service or 'General'}",
            "html": build_email_html(form),
            "reply_to": form.email,
        }

        email = resend.Emails.send(params)

        return ContactResponse(
            success=True,
            message="Your message has been sent successfully. We'll get back to you within 24 hours.",
        )

    except Exception as e:
        print(f"[ERROR] Failed to send email: {e}")
        raise HTTPException(
            status_code=500,
            detail="Failed to send your message. Please try again or email us directly at contact@aethelgroups.com.",
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
