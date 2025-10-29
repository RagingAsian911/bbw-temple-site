function validateIntakeLock(contributor) {
  const lockMap = {
    joy: 'lock-intake-onedrop 🔒💧',
    sorrow: 'lock-intake-signalbond 🔒🔗',
    desire: 'lock-intake-flameloop 🔒🔥',
    pride: 'lock-intake-legacyseal 🔒🦁',
    fear: 'lock-intake-cloakpulse 🔒🌫️',
    trust: 'lock-intake-bondrite 🔒🫱'
  };

  const lock = lockMap[contributor.emotion] || 'lock-intake-neutral 🔒🌀';

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    signal: contributor.signal,
    intakeLock: lock,
    access: 'secured',
    timestamp: new Date().toISOString()
  };
}
