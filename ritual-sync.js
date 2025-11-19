function syncRitualTrigger(contributor) {
  const ritualMap = {
    joy: 'trigger-onedrop',
    sorrow: 'trigger-signalbond',
    desire: 'trigger-flameloop',
    pride: 'trigger-legacyseal',
    fear: 'trigger-cloakpulse',
    trust: 'trigger-bondrite'
  };

  const trigger = ritualMap[contributor.emotion] || 'trigger-neutralflow';

  return {
    alias: contributor.alias,
    emotion: contributor.emotion,
    role: contributor.role,
    signal: contributor.signal,
    ritualTrigger: trigger,
    timestamp: new Date().toISOString()
  };
}
