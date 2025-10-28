#!/bin/bash
echo "🔥 Installing BBW Temple stack..."

# Clone repo
git clone https://github.com/RagingAsian911/bbw-temple.git
cd bbw-temple

# Install Node dependencies
npm install

# Make launch script executable
chmod +x launch.sh

# Run launch
./launch.sh

echo "✅ BBW Temple stack installed and launched."
