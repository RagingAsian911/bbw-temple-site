function generateRemixPreview(contributor) {
  const base = contributor.content || '';
  const emotion = contributor.emotion || 'neutral';
  const signal = contributor.signal || '0000';

  const overlays = {
    joy: '🌞 Radiant Joy',
    sorrow: '🌧️ Deep Sorrow',
    desire: '🔥 Intense Desire',
    pride: '🦁 Sovereign Pride',
    fear: '🌫️ Lingering Fear',
    trust: '🫱 Earned Trust'
  };

  const tag = overlays[emotion] || '🌀 Undefined Emotion';

  return `
    <div class="remix-preview">
      <h3>${contributor.alias}</h3>
      <p>${tag}</p>
      <blockquote>${base}</blockquote>
      <footer>Signal: ${signal}</footer>
    </div>
  `;
}
