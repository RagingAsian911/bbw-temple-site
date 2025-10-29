function validateFlameBond(contributor) {
  const bondMap = {
    joy: 'bond-onedrop',
    sorrow: 'bond-signalbond',
    desire: 'bond-flameloop',
    pride: 'bond-legacyseal',
    fear: 'bond-cloakpulse',
    trust: 'bond-bondrite'
  };

  const bond = bondMap[contributor.emotion] || 'bond-neutralflow';

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    role: contributor.role,
    signal: contributor.signal,
    flameBond: bond,
    status: 'validated',
    timestamp: new Date().toISOString()
  };
}
