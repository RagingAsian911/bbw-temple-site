/mnt/data/Build_X_FULL_package.pdf #!/usr/bin/env bash
set -euo pipefail

PDF="Build_X_FULL_package.pdf"

echo "[Brand] Extracting branding assets from $PDF..."
python3 deployment/load_branding.py "$PDF"

echo "[Brand] Branding extraction complete."