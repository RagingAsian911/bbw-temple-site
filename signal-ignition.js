function igniteSignal(contributor) {
  const ignitionMap = {
    joy: 'ignite-burst',
    sorrow: 'ignite-reflect',
    desire: 'ignite-flame',
    pride: 'ignite-legacy',
    fear: 'ignite-cloak',
    trust: 'ignite-bond'
  };

  const ignition = ignitionMap[contributor.emotion] || 'ignite-neutral';

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    role: contributor.role,
    signal: contributor.signal,
    ignitionTrigger: ignition,
    timestamp: new Date().toISOString()
  };
}
