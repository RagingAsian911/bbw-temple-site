import json
from datetime import datetime

# Simulated input from signal sources
raw_signals = [
    {"source": "+1 (888) 893-1421", "message": "BTC surge expected, $28T cap", "timestamp": "2025-10-27T04:00:00"},
    {"source": "+1 (478) 229-4379", "message": "ETH ETF momentum rising", "timestamp": "2025-10-27T04:05:00"},
]

# Parse and format signals
parsed_signals = []
for signal in raw_signals:
    parsed = {
        "source": signal["source"],
        "insight": signal["message"],
        "received_at": datetime.fromisoformat(signal["timestamp"]).strftime("%Y-%m-%d %H:%M:%S")
    }
    parsed_signals.append(parsed)

# Save to JSON for scroll generation
with open("signals.json", "w") as f:
    json.dump(parsed_signals, f, indent=2)

print("🪬 Signals parsed and saved to signals.json")

