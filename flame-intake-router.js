function routeFlameIntake(contributor) {
  const flameRoutes = {
    joy: '/intake/onedrop',
    sorrow: '/intake/signalbond',
    desire: '/intake/flameloop',
    pride: '/intake/legacyseal',
    fear: '/intake/cloakpulse',
    trust: '/intake/bondrite'
  };

  const route = flameRoutes[contributor.emotion] || '/intake/neutralflow';

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    signal: contributor.signal,
    intakeRoute: route,
    timestamp: new Date().toISOString()
  };
}
