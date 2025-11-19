function routeFlameTrigger(contributor) {
  const flameRoutes = {
    joy: '/ritual/onedrop',
    sorrow: '/ritual/signalbond',
    desire: '/ritual/flameloop',
    pride: '/ritual/legacyseal',
    fear: '/ritual/cloakpulse',
    trust: '/ritual/bondrite'
  };

  const route = flameRoutes[contributor.emotion] || '/ritual/neutralflow';

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    role: contributor.role,
    signal: contributor.signal,
    flameRoute: route,
    timestamp: new Date().toISOString()
  };
}
