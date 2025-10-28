const fs = require('fs');

function logSignal(entry) {
  if (!entry.alias || !entry.emotion || !entry.role || !entry.signal) {
    throw new Error('Missing required fields');
  }

  const logEntry = {
    alias: entry.alias,
    emotion: entry.emotion,
    role: entry.role,
    signal: entry.signal,
    timestamp: new Date().toISOString()
  };

  fs.appendFile('signal-log.json', JSON.stringify(logEntry) + '\n', err => {
    if (err) console.error('Signal logging failed:', err);
    else console.log('Signal logged:', logEntry);
  });
}

