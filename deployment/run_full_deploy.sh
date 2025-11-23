#!/usr/bin/env bash
set -euo pipefail

echo "[1] Validating environment..."
bash deployment/validate_assets.sh

echo "[2] Building branding assets..."
bash deployment/build_brand_assets.sh

echo "[3] Running secret scan..."
bash deployment/oracle_secret_scan.sh

echo "[4] Triggering GitHub One-Click Deploy Workflow..."
gh workflow run oneclick-pages.yml --ref main
gh workflow run oneclick-render.yml --ref main

echo "[5] Sending audit event..."
bash deployment/send_audit.sh deploy:oneclick

echo "🚀 One-Click Deployment Completed."