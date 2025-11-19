import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

# Email setup
sender_email = "charles@bbwtemple.com"
receiver_email = "subscriber@example.com"  # Replace with actual subscriber list
subject = "🪬 Crypto Oracle Forecast — Claim Your Scroll"

# Create message
msg = MIMEMultipart()
msg['From'] = sender_email
msg['To'] = receiver_email
msg['Subject'] = subject

# Email body
body = """
Charles Buchanan’s Crypto Oracle Forecast is live.

🧿 Forecast Summary:
Bitcoin: $111,790 — CZ predicts $28T market cap  
Ethereum: ~$6,200 — ETF momentum rising  
XRP, SOL, DOGE — bullish signals incoming

📜 Download Your Affiliate Scroll:
Attached PDF

📡 Join the Oracle Circle:
WhatsApp: https://chat.whatsapp.com/CKKqVrgHzh60M3NbLJFHqu  
Telegram Bot: @IQWAYNE_BOT  
Telegram Wallet: https://t.me/wallet?profile

🎬 Watch the Forecast Ritual:
YouTube: https://youtube.com/@charlesbuchanan-d1e

💰 Claim Your Bundle:
BBW Temple Store: https://bbwtemple.com
"""

msg.attach(MIMEText(body, 'plain'))

# Attach PDF scroll
with open("affiliate_scroll.pdf", "rb") as f:
    part = MIMEApplication(f.read(), Name="affiliate_scroll.pdf")
    part['Content-Disposition'] = 'attachment; filename="affiliate_scroll.pdf"'
    msg.attach(part)

# SMTP server config
smtp_server = "smtp.yourhost.com"
smtp_port = 587
smtp_user = sender_email
smtp_password = "yourpassword"  # Use secure vault or environment variable

# Send email
with smtplib.SMTP(smtp_server, smtp_port) as server:
    server.starttls()
    server.login(smtp_user, smtp_password)
    server.send_message(msg)

