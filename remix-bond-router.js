function routeRemixBond(contributor) {
  const bondRoutes = {
    creator: '/bond/remix-burst',
    ritualist: '/bond/flame-trigger',
    scout: '/bond/signal-scout'
  };

  const route = bondRoutes[contributor.role] || '/bond/general';

  return {
    alias: contributor.alias,
    role: contributor.role,
    emotion: contributor.emotion,
    signal: contributor.signal,
    remixBondRoute: route,
    timestamp: new Date().toISOString()
  };
}
