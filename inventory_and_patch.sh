#!/usr/bin/env bash
set -euo pipefail
OWNER="RagingAsian911"
REPOS=(bbw-temple-site crypto-oracle-server Ford express-hello-world frida-website)
TS=$(date +%s)
OUT="/tmp/biz_out_${TS}"
mkdir -p "$OUT/patches" "$OUT/mirrors" "$OUT/inventory"
INV="$OUT/inventory/asset_inventory.csv"
echo "repo,path,match_line,snippet" > "$INV"

for R in "${REPOS[@]}"; do
  CLONE="/tmp/scan_${R}_${TS}"
  rm -rf "$CLONE"
  git clone --depth 1 git@github.com:${OWNER}/${R}.git "$CLONE" || { echo "clone failed $R"; continue; }
  pushd "$CLONE" >/dev/null

  # inventory scan
  grep -RInE "paypal|paypalme|charlesbuchanan89|bconstruction4209|BBWTEMPLECRYPTO|/webhooks|btcpay|coinbase|dropcommerce|shopify" . \
    | while IFS= read -r line; do
      file=$(echo "$line" | cut -d: -f1)
      ln=$(echo "$line" | cut -d: -f2)
      snippet=$(sed -n "${ln}p" "$file" | tr -d '\n' | sed 's/"/""/g' | cut -c1-300)
      echo "\"$R\",\"$file\",\"$line\",\"$snippet\"" >> "$INV"
    done || true

  # create maintenance branch and patch
  git checkout -B emergency/maintenance || git switch -c emergency/maintenance
  cat > index.html <<'HTML'
<html><head><meta charset="utf-8"><title>Maintenance</title></head><body style="font-family:system-ui;text-align:center;padding:40px;"><h1>Temporarily Unavailable</h1><p>Maintenance in progress.</p></body></html>
HTML
  git add index.html && git commit -m "Emergency: maintenance page" || true
  git format-patch -1 -o "$OUT/patches" || true

  # neutralize payouts branch and patch
  git checkout -B emergency/neutralize-payouts || git switch -c emergency/neutralize-payouts
  grep -RIlE "paypal|paypalme|charlesbuchanan89|bconstruction4209|BBWTEMPLECRYPTO|dropcommerce|shopify|coinbase|btcpay" . || true \
    | xargs -r -I{} sed -i 's#https\?://[^"'"'"' ]*#/maintenance.html#g; s#charlesbuchanan89@yahoo.com#<REMOVED_PAYOUT_EMAIL>#g; s#bconstruction4209.cb.id#<REMOVED_CRYPTO_ID>#g; s#BBWTEMPLECRYPTO#<REMOVED_ATTR>#g' {}
  git add -A
  git commit -m "Emergency: neutralize public payout links and remove exposed identifiers" || true
  git format-patch -1 -o "$OUT/patches" || true

  # collect a bare mirror
  git clone --mirror git@github.com:${OWNER}/${R}.git "$OUT/mirrors/${R}.git" || true

  popd >/dev/null
done

# package results
tar -C "$OUT" -czf "/tmp/business_bundle_${TS}.tar.gz" .
sha256sum "/tmp/business_bundle_${TS}.tar.gz" > "/tmp/business_bundle_${TS}.sha256"
echo "Done. Inventory: $INV"
echo "Patch files: $OUT/patches/*.patch"
echo "Evidence bundle: /tmp/business_bundle_${TS}.tar.gz"
