function cloakContributor(contributor) {
  const alias = 'Anon-' + Math.random().toString(36).substring(2, 8);
  return {
    alias,
    emotion: contributor.emotion,
    role: contributor.role,
    timestamp: new Date().toISOString()
  };
}
