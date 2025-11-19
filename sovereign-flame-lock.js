function validateFlameLock(contributor) {
  const lockMap = {
    joy: 'lock-onedrop 🔒💧',
    sorrow: 'lock-signalbond 🔒🔗',
    desire: 'lock-flameloop 🔒🔥',
    pride: 'lock-legacyseal 🔒🦁',
    fear: 'lock-cloakpulse 🔒🌫️',
    trust: 'lock-bondrite 🔒🫱'
  };

  const lock = lockMap[contributor.emotion] || 'lock-neutral 🔒🌀';

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    role: contributor.role,
    signal: contributor.signal,
    flameLock: lock,
    access: 'secured',
    timestamp: new Date().toISOString()
  };
}
