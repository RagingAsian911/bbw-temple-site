# === ORACLESIGNAL ONE-DROP EXECUTION ===

run:
    @echo "🔒 Executing ONE-DROP SYSTEM TRIGGER..."
    @bash deploy-oraclesignal.sh

build:
    docker build -t oraclesignal-drop .

deploy:
    docker run --env-file .env oraclesignal-drop

lock:
    git add .
    git commit -m "🔒 ONE-DROP SYSTEM LOCKED"
    git push origin main
# === ORACLESIGNAL ONE-DROP SYSTEM ===

run:
    @echo "🔒 Executing ONE-DROP SYSTEM TRIGGER..."
    @bash deploy-oraclesignal.sh

broadcast:
    @echo "🌐 Broadcasting sitemap to search engines..."
    @node broadcast-sitemap.js

docker-build:
    docker build -t oraclesignal-drop .

docker-run:
    docker run --env-file .env oraclesignal-drop

cron-setup:
    @echo "⏱️ Setting up cron job for sitemap broadcast..."
    @(crontab -l 2>/dev/null; echo "0 */12 * * * /usr/bin/node $(shell pwd)/broadcast-sitemap.js >> /var/log/sitemap.log 2>&1") | crontab -

dashboard-deploy:
    @echo "📊 Deploying visual dashboard to live route..."
    @rsync -avz ./dashboard/ user@oraclesignal.site:/var/www/oraclesignal.site/dashboard/

ci-commit:
    @git add .
    @git commit -m "🔁 CI/CD Hook: OracleSignal Drop + Sitemap Broadcast"
    @git push origin main
