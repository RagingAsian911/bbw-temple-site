app.post("/webhook/signal", (req, res) => {
  const { id, emotion, affiliate, contributor, timestamp } = req.body;

  // Log to dashboard DB
  db.signals.insert({ id, emotion, affiliate, contributor, timestamp });

  // Trigger payout logic
  payoutEngine.route({ contributor, amount: calculatePayout(id) });

  res.status(200).send("Signal logged");
});
