import sys, fitz, json, os

pdf = sys.argv[1]
doc = fitz.open(pdf)

os.makedirs("branding_assets/images", exist_ok=True)

extracted = []

for i, page in enumerate(doc):
    for img in page.get_images(full=True):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        out = f"branding_assets/images/page{i}_img{xref}.png"
        if pix.alpha:
            pix.save(out)
        else:
            pix.save(out)
        extracted.append(out)

with open("branding_assets/branding_index.json","w") as f:
    json.dump({"images": extracted}, f, indent=2)

print("Branding extracted:", extracted)import os
import random
from datetime import datetime

# ================
# ENV FROM SECRETS
# ================
YT_CHANNEL = os.getenv("YT_CHANNEL_HANDLE", "@charlesbuchanan6547")
TEMPLE_URL = os.getenv("TEMPLE_URL", "https://BBWTempleSite.org.uk")
PAYPAL_EMAIL = os.getenv("PAYPAL_EMAIL", "charlesbuchanan89@yahoo.com")

PRODUCTS = [
    ("AI Signal Tracker", 39),
    ("Oracle Merch Pack", 59),
    ("Affiliate Vault Access", 97),
]

TOPICS = [
    "How the BBW Temple automates digital income",
    "OracleSignal crypto forecasting and automation basics",
    "Building online ownership without a 9–5 job",
    "Turning followers into Temple customers",
    "How to route all sales into one PayPal and business"
]


def build_video_script() -> str:
    topic = random.choice(TOPICS)
    lines = []
    lines.append(f"Temple Broadcast — {topic}")
    lines.append("")
    lines.append("This channel is operated by Buchanan Construction / OracleSignal Holdings LLC.")
    lines.append(f"Main Temple site: {TEMPLE_URL}")
    lines.append("")
    lines.append("Available Temple offers:")
    for name, price in PRODUCTS:
        lines.append(f"• {name} — ${price} — pay via PayPal: {PAYPAL_EMAIL}")
    lines.append("")
    lines.append("Nothing here is financial or legal advice. This is education and entertainment only.")
    lines.append(f"Channel handle: {YT_CHANNEL}")
    return "\n".join(lines)


def main():
    # Generate dynamic title + description each run
    now = datetime.utcnow()
    title = f"Temple Drop — {now.strftime('%b %d %Y • %H:%M UTC')}"
    script = build_video_script()

    # This is where a real video would be rendered.
    # For now, we generate a text "video plan" + metadata that an uploader can use.
    out_dir = "autopilot_output"
    os.makedirs(out_dir, exist_ok=True)

    base = now.strftime("temple_video_%Y%m%d_%H%M")
    meta_path = os.path.join(out_dir, f"{base}_meta.txt")
    script_path = os.path.join(out_dir, f"{base}_script.txt")

    with open(script_path, "w", encoding="utf-8") as f:
        f.write(script)

    with open(meta_path, "w", encoding="utf-8") as f:
        f.write("TITLE:\n")
        f.write(title + "\n\n")
        f.write("DESCRIPTION:\n")
        f.write(script + "\n\n")
        f.write("TAGS:\n")
        f.write("BBW Temple, OracleSignal, automation, crypto, income\n")

    print("🔥 Temple autopilot run finished")
    print(f"📄 Script:      {script_path}")
    print(f"📄 Meta file:   {meta_path}")
    print(f"📺 Channel:     {YT_CHANNEL}")
    print(f"🌐 Temple URL:  {TEMPLE_URL}")
    print(f"💸 PayPal:      {PAYPAL_EMAIL}")


if __name__ == "__main__":
    main()import os
import random
from datetime import datetime

# ================
# ENV FROM SECRETS
# ================
YT_CHANNEL = os.getenv("YT_CHANNEL_HANDLE", "@charlesbuchanan6547")
TEMPLE_URL = os.getenv("TEMPLE_URL", "https://BBWTempleSite.org.uk")
PAYPAL_EMAIL = os.getenv("PAYPAL_EMAIL", "charlesbuchanan89@yahoo.com")

PRODUCTS = [
    ("AI Signal Tracker", 39),
    ("Oracle Merch Pack", 59),
    ("Affiliate Vault Access", 97),
]

TOPICS = [
    "How the BBW Temple automates digital income",
    "OracleSignal crypto forecasting and automation basics",
    "Building online ownership without a 9–5 job",
    "Turning followers into Temple customers",
    "How to route all sales into one PayPal and business"
]


def build_video_script() -> str:
    topic = random.choice(TOPICS)
    lines = []
    lines.append(f"Temple Broadcast — {topic}")
    lines.append("")
    lines.append("This channel is operated by Buchanan Construction / OracleSignal Holdings LLC.")
    lines.append(f"Main Temple site: {TEMPLE_URL}")
    lines.append("")
    lines.append("Available Temple offers:")
    for name, price in PRODUCTS:
        lines.append(f"• {name} — ${price} — pay via PayPal: {PAYPAL_EMAIL}")
    lines.append("")
    lines.append("Nothing here is financial or legal advice. This is education and entertainment only.")
    lines.append(f"Channel handle: {YT_CHANNEL}")
    return "\n".join(lines)


def main():
    # Generate dynamic title + description each run
    now = datetime.utcnow()
    title = f"Temple Drop — {now.strftime('%b %d %Y • %H:%M UTC')}"
    script = build_video_script()

    # This is where a real video would be rendered.
    # For now, we generate a text "video plan" + metadata that an uploader can use.
    out_dir = "autopilot_output"
    os.makedirs(out_dir, exist_ok=True)

    base = now.strftime("temple_video_%Y%m%d_%H%M")
    meta_path = os.path.join(out_dir, f"{base}_meta.txt")
    script_path = os.path.join(out_dir, f"{base}_script.txt")

    with open(script_path, "w", encoding="utf-8") as f:
        f.write(script)

    with open(meta_path, "w", encoding="utf-8") as f:
        f.write("TITLE:\n")
        f.write(title + "\n\n")
        f.write("DESCRIPTION:\n")
        f.write(script + "\n\n")
        f.write("TAGS:\n")
        f.write("BBW Temple, OracleSignal, automation, crypto, income\n")

    print("🔥 Temple autopilot run finished")
    print(f"📄 Script:      {script_path}")
    print(f"📄 Meta file:   {meta_path}")
    print(f"📺 Channel:     {YT_CHANNEL}")
    print(f"🌐 Temple URL:  {TEMPLE_URL}")
    print(f"💸 PayPal:      {PAYPAL_EMAIL}")


if __name__ == "__main__":
    main()
