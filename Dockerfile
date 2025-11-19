# === ORACLESIGNAL ONE-DROP EXECUTION CONTAINER ===
FROM alpine:latest

RUN apk add --no-cache curl bash

WORKDIR /app
COPY deploy-oraclesignal.sh .
COPY .env.template .env

RUN chmod +x deploy-oraclesignal.sh

CMD ["./deploy-oraclesignal.sh"]
FROM node:18-alpine

WORKDIR /app
COPY broadcast-sitemap.js .
COPY .env .

RUN npm install axios

CMD ["node", "broadcast-sitemap.js"]
