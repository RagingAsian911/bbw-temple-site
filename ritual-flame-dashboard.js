function validateRitualFlameDashboard(contributor) {
  const flameMap = {
    joy: { tag: '💧 OneDrop', route: '/ritual/onedrop' },
    sorrow: { tag: '🔗 SignalBond', route: '/ritual/signalbond' },
    desire: { tag: '🔥 FlameLoop', route: '/ritual/flameloop' },
    pride: { tag: '🦁 LegacySeal', route: '/ritual/legacyseal' },
    fear: { tag: '🌫️ CloakPulse', route: '/ritual/cloakpulse' },
    trust: { tag: '🫱 BondRite', route: '/ritual/bondrite' }
  };

  const flame = flameMap[contributor.emotion] || { tag: '🌀 NeutralFlow', route: '/ritual/neutralflow' };

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    flameTag: flame.tag,
    flameRoute: flame.route,
    dashboardStatus: 'validated',
    timestamp: new Date().toISOString()
  };
}
