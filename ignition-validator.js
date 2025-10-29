function validateIgnitionTrigger(contributor) {
  const validTriggers = [
    'ignite-burst',
    'ignite-reflect',
    'ignite-flame',
    'ignite-legacy',
    'ignite-cloak',
    'ignite-bond',
    'ignite-neutral'
  ];

  const trigger = contributor.ignitionTrigger || 'ignite-neutral';
  const status = validTriggers.includes(trigger) ? 'valid' : 'invalid';

  return {
    alias: contributor.alias,
    trigger,
    status,
    timestamp: new Date().toISOString()
  };
}
