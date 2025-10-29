function triggerRemixIgnition(contributor) {
  const ignitionMap = {
    creator: 'remix-burst 💥',
    ritualist: 'remix-flame 🔥',
    scout: 'remix-signal 🚀'
  };

  const ignition = ignitionMap[contributor.role] || 'remix-neutral 🌀';

  return {
    alias: contributor.alias,
    role: contributor.role,
    emotion: contributor.emotion,
    signal: contributor.signal,
    remixIgnition: ignition,
    timestamp: new Date().toISOString()
  };
}
