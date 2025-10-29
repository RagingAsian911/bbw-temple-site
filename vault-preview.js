// ORACLESIGNAL VAULT PREVIEW LOGIC
export async function previewVault(contributorId, vaultId) {
  const previewUrl = `https://oraclesignal.site/vaults/${vaultId}/preview`;
  const log = {
    contributor: contributorId,
    vault: vaultId,
    preview_mode: true,
    emotional_tags: ["🔥signal", "🧠sovereign"],
    affiliate_tag: "ref=bconstruction4209"
  };

  await fetch("https://oraclesignal.site/api/dashboard/logs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(log)
  });

  return previewUrl;
}
