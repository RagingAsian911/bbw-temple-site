function invokeContributor(contributor) {
  const invocationRoutes = {
    creator: '/invoke/remix',
    supporter: '/invoke/console',
    analyst: '/invoke/analytics',
    ritualist: '/invoke/ritual',
    scout: '/invoke/scout'
  };

  const emotionTriggers = {
    joy: '💧 OneDrop',
    sorrow: '🔗 SignalBond',
    desire: '🔥 FlameLoop',
    pride: '🦁 LegacySeal',
    fear: '🌫️ CloakPulse',
    trust: '🫱 BondRite'
  };

  return {
    alias: contributor.alias,
    role: contributor.role,
    emotion: contributor.emotion,
    signal: contributor.signal,
    route: invocationRoutes[contributor.role] || '/invoke/general',
    flame: emotionTriggers[contributor.emotion] || '🌀 NeutralFlow',
    timestamp: new Date().toISOString()
  };
}
