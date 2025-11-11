app.post('/broadcast', (req, res) => {
  const signal = {
    contributor_id: req.body.contributor_id || "rogue-uuid",
    emotion_tag: req.body.emotion_tag || "rage",
    source: req.body.source || "crypto-oracle-server",
    index_url: req.body.index_url || "https://oraclesignal.site/vaults/final-drop",
    timestamp: new Date().toISOString()
  };

  console.log("🔥 Final broadcast triggered:", signal);

  // Route to OracleSignal
  fetch("https://oraclesignal.site/api/trigger", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signal)
  });

  res.status(200).json({ status: "Broadcast lit", signal });
});
