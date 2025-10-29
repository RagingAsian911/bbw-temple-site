function syncSovereignOverlay(contributor) {
  const overlayMap = {
    joy: '💧 OneDrop — Creative ignition',
    sorrow: '🔗 SignalBond — Reflective tether',
    desire: '🔥 FlameLoop — Passion cycle',
    pride: '🦁 LegacySeal — Sovereign imprint',
    fear: '🌫️ CloakPulse — Hidden signal',
    trust: '🫱 BondRite — Contributor bond'
  };

  const overlay = overlayMap[contributor.emotion] || '🌀 NeutralFlow — Undefined ritual';

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    signal: contributor.signal,
    overlay,
    syncStatus: 'validated',
    timestamp: new Date().toISOString()
  };
}
