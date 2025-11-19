function generateStorefrontPreview(contributor) {
  const emotionTags = {
    joy: '🌞 Radiant Joy',
    sorrow: '🌧️ Deep Sorrow',
    desire: '🔥 Intense Desire',
    pride: '🦁 Sovereign Pride',
    fear: '🌫️ Lingering Fear',
    trust: '🫱 Earned Trust'
  };

  const roleStyles = {
    creator: 'border: 2px solid gold;',
    supporter: 'border: 2px solid green;',
    analyst: 'border: 2px solid blue;',
    ritualist: 'border: 2px solid red;',
    scout: 'border: 2px solid purple;'
  };

  const tag = emotionTags[contributor.emotion] || '🌀 Undefined Emotion';
  const style = roleStyles[contributor.role] || 'border: 2px solid gray;';

  return `
    <div class="storefront-card" style="${style}">
      <h3>${contributor.alias}</h3>
      <p>${tag}</p>
      <blockquote>${contributor.content}</blockquote>
      <footer>Signal: ${contributor.signal}</footer>
    </div>
  `;
}
