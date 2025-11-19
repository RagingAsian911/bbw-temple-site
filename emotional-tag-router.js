// ORACLESIGNAL EMOTIONAL TAG ROUTER
export function routeEmotionalTags(contributorId, tags) {
  return {
    contributor: contributorId,
    emotional_tags: tags,
    routed_to: {
      dashboard: "https://oraclesignal.site/dashboard",
      payout: {
        paypal: "@BBWTEMPLECRYPTO",
        crypto: "bconstruction4209.cb.id"
      },
      overlays: tags.includes("🔥signal")
        ? `https://oraclesignal.site/overlays/${contributorId}`
        : null
    },
    discoverable: true,
    indexed: true
  };
}
