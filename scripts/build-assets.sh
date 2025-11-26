#!/bin/bash

mkdir -p assets/pdf

echo "Rebuilding Business Asset PDFs..."

# ========== BUSINESS PDF CONTENT ==========
cat << 'EOF' > assets/pdf/Build_Deck_Full_Package.pdf.txt
<<INSERT FULL TEXT OF YOUR ORIGINAL BUSINESS DECK HERE>>
EOF

# ========== BRANDING KIT PDF CONTENT ==========
cat << 'EOF' > assets/pdf/Branding_Kit.pdf.txt
<<INSERT BRAND KIT CONTENT HERE>>
EOF

# Convert to real PDFs
pandoc assets/pdf/Build_Deck_Full_Package.pdf.txt -o assets/pdf/Build_X_FULL_package.pdf
pandoc assets/pdf/Branding_Kit.pdf.txt -o assets/pdf/Branding_Kit.pdf

echo "📄 Business PDFs Generated Successfully"
echo "✔ Build_X_FULL_package.pdf"
echo "✔ Branding_Kit.pdf"