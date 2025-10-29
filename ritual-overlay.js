function applyRitualOverlay(contributor) {
  const overlays = {
    joy: '💧 OneDrop — Creative ignition',
    sorrow: '🔗 SignalBond — Reflective tether',
    desire: '🔥 FlameLoop — Passion cycle',
    pride: '🦁 LegacySeal — Sovereign imprint',
    fear: '🌫️ CloakPulse — Hidden signal',
    trust: '🫱 BondRite — Contributor bond'
  };

  const overlay = overlays[contributor.emotion] || '🌀 NeutralFlow — Undefined ritual';
  return `${overlay}\n\n${contributor.content}`;
}
