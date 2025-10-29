function validatePagesLock(commitHash) {
  return {
    commit: commitHash,
    pagesStatus: 'locked',
    deployStatus: 'confirmed',
    timestamp: new Date().toISOString()
  };
}
