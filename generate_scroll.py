import json
from datetime import datetime

# Load parsed signals
with open("signals.json", "r") as f:
    signals = json.load(f)

# Create markdown scroll
scroll = "# 🪬 Crypto Oracle Forecast Scroll\n\n"
scroll += f"**Date:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n"
scroll += "## 🔮 Signals Received:\n"

for signal in signals:
    scroll += f"- **Source:** {signal['source']}\n"
    scroll += f"  - **Insight:** {signal['insight']}\n"
    scroll += f"  - **Received At:** {signal['received_at']}\n\n"

scroll += "---\n"
scroll += "## 📡 Join the Oracle Circle\n"
scroll += "- WhatsApp: [Join Now](https://chat.whatsapp.com/CKKqVrgHzh60M3NbLJFHqu)\n"
scroll += "- Telegram Bot: @IQWAYNE_BOT\n"
scroll += "- Telegram Wallet: [Buy Crypto](https://t.me/wallet?profile)\n\n"

scroll += "## 🎬 Watch the Forecast Ritual\n"
scroll += "- YouTube: [Charles Buchanan Forecasts](https://youtube.com/@charlesbuchanan-d1e)\n\n"

scroll += "## 💰 Claim Your Bundle\n"
scroll += "- BBW Temple Store: [Enter the Temple](https://bbwtemple.com)\n"

# Save scroll
with open("forecast.md", "w") as f:
    f.write(scroll)

print("📜 Forecast scroll generated and saved to forecast.md")

