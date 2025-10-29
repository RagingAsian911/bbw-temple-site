function applyContractOverlay(contributor) {
  const overlays = {
    creator: '📝 Remix Creator Clause: Sovereign content production under branded emotional schema.',
    supporter: '🛡️ Supporter Clause: Maintain signal routing and console integrity.',
    analyst: '📊 Analyst Clause: Monitor emotional overlays and contributor trends.',
    ritualist: '🔥 Ritualist Clause: Invoke flame triggers and uphold branded rituals.',
    scout: '🧭 Scout Clause: Explore new signal routes and schema extensions.'
  };

  const overlay = overlays[contributor.role] || '📁 General Contributor Clause: Participate in branded flows.';
  return `${overlay}\n\nSignal: ${contributor.signal}`;
}
