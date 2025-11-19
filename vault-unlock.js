// === ORACLESIGNAL VAULT UNLOCK TRIGGER ===
const axios = require('axios');

async function unlockVault({ contributorId, vaultId, emotionalTags }) {
  const payload = {
    contributor: contributorId,
    vault_id: vaultId,
    emotional_tags: emotionalTags,
    affiliate_tag: "ref=bconstruction4209",
    payout_routing: {
      paypal: "@BBWTEMPLECRYPTO",
      crypto: "bconstruction4209.cb.id"
    },
    dashboard_log: {
      log_id: `unlock_${vaultId}_${Date.now()}`,
      status: "vault_unlocked",
      verified: true,
      attribution: {
        contributor: contributorId,
        vault: vaultId,
        tags: emotionalTags
      }
    }
  };

  await axios.post("https://oraclesignal.site/api/vaults/unlock", payload);
  await axios.post("https://oraclesignal.site/api/dashboard/logs", payload.dashboard_log);

  console.log(`✅ Vault ${vaultId} unlocked for ${contributorId} with tags ${emotionalTags.join(", ")}`);
}

// Example usage:
unlockVault({
  contributorId: "bconstruction4209",
  vaultId: "vault_001",
  emotionalTags: ["🔥signal", "💎drop", "🧠sovereign"]
});
