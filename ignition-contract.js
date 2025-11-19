function generateIgnitionContract(contributor) {
  const ignitionClauses = {
    creator: '💥 Remix Burst: You agree to initiate sovereign remix flows under branded emotional schema.',
    ritualist: '🔥 Flame Trigger: You agree to invoke branded flame overlays and maintain ritual integrity.',
    scout: '🚀 Signal Scout: You agree to explore ignition routes and flame bonding protocols.'
  };

  const clause = ignitionClauses[contributor.role] || '🌀 Neutral Contributor: You agree to participate in ignition flows under sovereign control.';
  return {
    alias: contributor.alias,
    role: contributor.role,
    emotion: contributor.emotion,
    signal: contributor.signal,
    ignitionClause: clause,
    timestamp: new Date().toISOString()
  };
}
