const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('api', {
  sendDrop: async (payload) => {
    await fetch('https://oraclesignal.site/api/drop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  }
});
