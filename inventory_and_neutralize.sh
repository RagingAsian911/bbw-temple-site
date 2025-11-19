#!/usr/bin/env bash
set -euo pipefail

OWNER="RagingAsian911"
REPOS=(bbw-temple-site crypto-oracle-server Ford express-hello-world frida-website)
SINCE="2025-10-06T00:00:00Z"
OUT_DIR="/tmp/biz_inventory_$(date +%s)"
mkdir -p "$OUT_DIR"
CSV="$OUT_DIR/asset_inventory.csv"
echo "repo,file,match_type,snippet,commit_sha,commit_date" > "$CSV"

for R in "${REPOS[@]}"; do
  echo "===== $R ====="
  CLONE="/tmp/$R"
  rm -rf "$CLONE"
  git clone --depth 1 git@github.com:$OWNER/$R.git "$CLONE" || { echo "clone failed $R"; continue; }
  cd "$CLONE"
  # inventory matches
  grep -RInE "paypal|paypalme|bconstruction4209|BBWTEMPLECRYPTO|coinbase|btcpay|/webhooks" . || true
  while IFS= read -r f; do
    if [ -f "$f" ]; then
      lines=$(grep -nE "paypal|paypalme|bconstruction4209|BBWTEMPLECRYPTO|coinbase|btcpay|/webhooks" "$f" || true)
      if [ -n "$lines" ]; then
        snippet=$(echo "$lines" | head -n1 | sed 's/"/""/g' | cut -c1-300)
        echo "\"$R\",\"$f\",\"payment/webhook\",\"$snippet\",, " >> "$CSV"
      fi
    fi
  done < <(grep -RIlE "paypal|paypalme|bconstruction4209|BBWTEMPLECRYPTO|coinbase|btcpay|/webhooks" . || true)

  # make emergency maintenance branch
  git checkout -B emergency/maintenance || git switch -c emergency/maintenance
  cat > index.html <<'HTML'
<html><head><title>Maintenance</title></head><body style="font-family:system-ui;text-align:center;padding:40px;"><h1>Temporarily Unavailable</h1><p>Maintenance in progress.</p></body></html>
HTML
  git add index.html && git commit -m "Emergency: maintenance page" || true
  git push origin emergency/maintenance --force || true

  # neutralize exposed payout links and identifiers on a separate branch
  git checkout -B emergency/neutralize-payouts
  grep -RIlE "paypal|paypalme|charlesbuchanan89@yahoo.com|bconstruction4209|BBWTEMPLECRYPTO" . || true
  grep -RIlE "paypal|paypalme|charlesbuchanan89@yahoo.com|bconstruction4209|BBWTEMPLECRYPTO" . | xargs -r -I{} sed -i 's#https\?://[^"'"'"' ]*#/maintenance.html#g; s#charlesbuchanan89@yahoo.com#<REMOVED_PAYOUT_EMAIL>#g; s#bconstruction4209.cb.id#<REMOVED_CRYPTO_ID>#g; s#BBWTEMPLECRYPTO#<REMOVED_ATTR>#g' {}
  git add -A
  git commit -m "Emergency: neutralize public payout links and remove exposed identifiers" || true
  git push origin emergency/neutralize-payouts --force || true

  cd - >/dev/null
done

echo "Inventory and neutralize complete. CSV: $CSV"
ls -l "$OUT_DIR"
