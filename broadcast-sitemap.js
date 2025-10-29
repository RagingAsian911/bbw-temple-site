// === ORACLESIGNAL SITEMAP BROADCAST ===
const axios = require('axios');

async function broadcastSitemap() {
  const sitemapUrl = "https://oraclesignal.site/sitemap.xml";

  await axios.post("https://searchconsole.googleapis.com/v1/urlNotifications:publish", {
    url: sitemapUrl,
    type: "URL_UPDATED"
  }, {
    headers: {
      Authorization: `Bearer ${process.env.SEARCH_CONSOLE_TOKEN}`,
      "Content-Type": "application/json"
    }
  });

  console.log("✅ Sitemap broadcasted to search engines.");
}

broadcastSitemap();
