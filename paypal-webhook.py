import os
import json
from http.server import BaseHTTPRequestHandler, HTTPServer

PAYPAL_EMAIL = "charlesbuchanan89@yahoo.com"
LOG_FILE = "sales_log.json"

class WebhookHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get('content-length'))
        body = json.loads(self.rfile.read(length))

        payer = body.get("payer_email", "unknown")
        item = body.get("item_name", "Unknown Item")
        amount = body.get("amount", "0.00")

        # Log sale
        entry = {
            "payer": payer,
            "item": item,
            "amount": amount
        }

        with open(LOG_FILE, "a") as log:
            log.write(json.dumps(entry) + "\n")

        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"OK")

if __name__ == "__main__":
    print("🔥 PayPal Sales Webhook Active")
    server = HTTPServer(("0.0.0.0", 8080), WebhookHandler)
    server.serve_forever()
  
