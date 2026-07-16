"""
Aethel Groups — Contact Form Serverless Function
Deployed on Vercel as a Python Serverless Function at /api/contact.
"""

import json
import os
from datetime import datetime
from http.server import BaseHTTPRequestHandler

import resend

# ── Configuration ──────────────────────────────────────────────
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL", "mohankrishnan4099@gmail.com")

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY


# ── Email Template ─────────────────────────────────────────────
def build_email_html(data: dict) -> str:
    timestamp = datetime.now().strftime("%B %d, %Y at %I:%M %p IST")
    name = data.get("name", "")
    email = data.get("email", "")
    phone = data.get("phone") or "Not provided"
    organization = data.get("organization") or "Not provided"
    service = data.get("service") or "Not specified"
    message = data.get("message", "")

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
                  <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:12px;overflow:hidden;">
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;width:140px;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Name</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:15px;font-weight:500;">
                        {name}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Email</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;">
                        <a href="mailto:{email}" style="color:#2563EB;font-size:15px;text-decoration:none;font-weight:500;">{email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Phone</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:15px;">
                        {phone}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Organization</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:15px;">
                        {organization}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;border-bottom:1px solid #E2E8F0;">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Service</strong>
                      </td>
                      <td style="padding:14px 20px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:15px;">
                        {service}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 20px;background:#F8FAFC;" colspan="2">
                        <strong style="color:#475569;font-size:13px;text-transform:uppercase;letter-spacing:0.04em;">Message</strong>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2" style="padding:16px 20px;color:#1E293B;font-size:15px;line-height:1.7;">
                        {message}
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


# ── CORS Helper ────────────────────────────────────────────────
def _send_cors_headers(handler: "BaseHTTPRequestHandler"):
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")
    handler.send_header("Content-Type", "application/json")


# ── Vercel Serverless Handler ──────────────────────────────────
class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        """Handle CORS preflight."""
        self.send_response(200)
        _send_cors_headers(self)
        self.end_headers()

    def do_GET(self):
        """Health check endpoint."""
        self.send_response(200)
        _send_cors_headers(self)
        self.end_headers()
        self.wfile.write(json.dumps({
            "status": "ok",
            "service": "Aethel Groups Contact API",
            "version": "1.1.0"
        }).encode())

    def do_POST(self):
        """Process contact form submission and send email via Resend."""
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        try:
            data = json.loads(body)
        except json.JSONDecodeError:
            self.send_response(400)
            _send_cors_headers(self)
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Invalid JSON body"}).encode())
            return

        # Validate required fields
        name = (data.get("name") or "").strip()
        email = (data.get("email") or "").strip()
        message = (data.get("message") or "").strip()

        if not name or not email or not message:
            self.send_response(400)
            _send_cors_headers(self)
            self.end_headers()
            self.wfile.write(json.dumps({
                "error": "Name, email, and message are required fields."
            }).encode())
            return

        # Basic email format check
        if "@" not in email or "." not in email.split("@")[-1]:
            self.send_response(400)
            _send_cors_headers(self)
            self.end_headers()
            self.wfile.write(json.dumps({
                "error": "Please provide a valid email address."
            }).encode())
            return

        if not RESEND_API_KEY:
            self.send_response(500)
            _send_cors_headers(self)
            self.end_headers()
            self.wfile.write(json.dumps({
                "error": "Email service is not configured. Please contact us directly."
            }).encode())
            return

        try:
            params: resend.Emails.SendParams = {
                "from": "Aethel Groups <onboarding@resend.dev>",
                "to": [RECIPIENT_EMAIL],
                "subject": f"New Enquiry from {name} — {data.get('service') or 'General'}",
                "html": build_email_html(data),
                "reply_to": email,
            }
            resend.Emails.send(params)

            self.send_response(200)
            _send_cors_headers(self)
            self.end_headers()
            self.wfile.write(json.dumps({
                "success": True,
                "message": "Your message has been sent successfully. We'll get back to you within 24 hours."
            }).encode())

        except Exception as e:
            print(f"[ERROR] Resend failed: {e}")
            self.send_response(500)
            _send_cors_headers(self)
            self.end_headers()
            self.wfile.write(json.dumps({
                "detail": "Failed to send your message. Please try again or email us directly at contact@aethelgroups.com."
            }).encode())

    def log_message(self, format, *args):
        """Suppress default HTTP server logs in Vercel."""
        pass
