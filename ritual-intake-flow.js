function routeRitualIntake(contributor) {
  const intakeRoutes = {
    joy: '/intake/onedrop',
    sorrow: '/intake/signalbond',
    desire: '/intake/flameloop',
    pride: '/intake/legacyseal',
    fear: '/intake/cloakpulse',
    trust: '/intake/bondrite'
  };

  const route = intakeRoutes[contributor.emotion] || '/intake/neutralflow';

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    signal: contributor.signal,
    intakeRoute: route,
    timestamp: new Date().toISOString()
  };
}
