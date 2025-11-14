const { app, BrowserWindow } = require('electron');
function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 600, webPreferences: { preload: __dirname + '/preload.js' } });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
{
  "contributor_id": "...",
  "emotion_tag": "...",
  "source": "fire-sale",
  "index_url": "https://oraclesignal.site/vaults/final-drop",
  "timestamp": "..."
}
