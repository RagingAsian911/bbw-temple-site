function applyEmotionalOverlay(content, emotion) {
  const overlays = {
    joy: '🌞 Radiant Joy',
    sorrow: '🌧️ Deep Sorrow',
    desire: '🔥 Intense Desire',
    pride: '🦁 Sovereign Pride',
    fear: '🌫️ Lingering Fear',
    trust: '🫱 Earned Trust'
  };

  const tag = overlays[emotion] || '🌀 Undefined Emotion';
  return `${tag}\n\n${content}`;
}
