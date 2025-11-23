#!/usr/bin/env bash
set -euo pipefail

ACTION=$1

PAYLOAD=$(jq -n \
  --arg src "local" \
  --arg act "$ACTION" \
  '{source:$src, action:$act}')

HMAC=$(echo -n "$PAYLOAD" | openssl dgst -sha256 -hmac "$AUDIT_SECRET" -hex | awk '{print $NF}')

curl -s -X POST "$LOG_API/event" \
  -H "Content-Type: application/json" \
  -d "$(echo "$PAYLOAD" | jq --arg h "$HMAC" '. + {hmac:$h}')"