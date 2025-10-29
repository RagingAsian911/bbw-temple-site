# === ORACLESIGNAL ONE-DROP EXECUTION CONTAINER ===
FROM alpine:latest

RUN apk add --no-cache curl bash

WORKDIR /app
COPY deploy-oraclesignal.sh .
COPY .env.template .env

RUN chmod +x deploy-oraclesignal.sh

CMD ["./deploy-oraclesignal.sh"]
