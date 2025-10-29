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
