function generateRemixContract(contributor) {
  const remixClauses = {
    creator: 'You agree to produce remix content under sovereign branding and emotional overlay conditions.',
    ritualist: 'You agree to invoke branded flame triggers and maintain ritual integrity.',
    scout: 'You agree to explore remix routes and signal overlays across sovereign modules.'
  };

  const clause = remixClauses[contributor.role] || 'You agree to participate in remix flows under branded control.';
  const overlay = contributor.emotion || 'neutral';
  const timestamp = new Date().toISOString();

  return {
    alias: contributor.alias,
    role: contributor.role,
    emotion: overlay,
    signal: contributor.signal,
    remixClause: clause,
    timestamp
  };
}
