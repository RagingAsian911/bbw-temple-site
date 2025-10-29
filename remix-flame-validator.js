function validateRemixFlame(contributor) {
  const validFlames = [
    '💧 OneDrop',
    '🔗 SignalBond',
    '🔥 FlameLoop',
    '🦁 LegacySeal',
    '🌫️ CloakPulse',
    '🫱 BondRite',
    '🌀 NeutralFlow'
  ];

  const flame = contributor.flameTag || '🌀 NeutralFlow';
  const status = validFlames.includes(flame) ? 'valid' : 'invalid';

  return {
    alias: contributor.alias,
    flameTag: flame,
    validationStatus: status,
    timestamp: new Date().toISOString()
  };
}
