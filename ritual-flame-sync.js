function syncRitualFlame(contributor) {
  const flameSyncMap = {
    joy: { tag: '💧 OneDrop', route: '/ritual/onedrop' },
    sorrow: { tag: '🔗 SignalBond', route: '/ritual/signalbond' },
    desire: { tag: '🔥 FlameLoop', route: '/ritual/flameloop' },
    pride: { tag: '🦁 LegacySeal', route: '/ritual/legacyseal' },
    fear: { tag: '🌫️ CloakPulse', route: '/ritual/cloakpulse' },
    trust: { tag: '🫱 BondRite', route: '/ritual/bondrite' }
  };

  const sync = flameSyncMap[contributor.emotion] || { tag: '🌀 NeutralFlow', route: '/ritual/neutralflow' };

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    role: contributor.role,
    signal: contributor.signal,
    flameTag: sync.tag,
    flameRoute: sync.route,
    status: 'synced',
    timestamp: new Date().toISOString()
  };
}
