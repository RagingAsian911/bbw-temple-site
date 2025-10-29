function generateContract(contributor) {
  const templates = {
    creator: 'You agree to produce branded remix content under sovereign flow conditions.',
    supporter: 'You agree to maintain contributor console and signal routing integrity.',
    analyst: 'You agree to analyze emotional overlays and signal trends.',
    ritualist: 'You agree to invoke branded rituals and maintain flame integrity.',
    scout: 'You agree to explore new signal routes and emotional schema extensions.'
  };

  const clause = templates[contributor.role] || 'You agree to participate in branded contributor flows.';
  const timestamp = new Date().toISOString();

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    role: contributor.role,
    signal: contributor.signal,
    contract: clause,
    timestamp
  };
}
