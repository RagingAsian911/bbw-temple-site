function renderFlamePreview(contributor) {
  const flameTags = {
    joy: '💧 OneDrop — Creative ignition',
    sorrow: '🔗 SignalBond — Reflective tether',
    desire: '🔥 FlameLoop — Passion cycle',
    pride: '🦁 LegacySeal — Sovereign imprint',
    fear: '🌫️ CloakPulse — Hidden signal',
    trust: '🫱 BondRite — Contributor bond'
  };

  const tag = flameTags[contributor.emotion] || '🌀 NeutralFlow — Undefined ritual';
  return `
    <div class="flame-preview">
      <h3>${contributor.alias}</h3>
      <p>${tag}</p>
      <blockquote>${contributor.content}</blockquote>
      <footer>Signal: ${contributor.signal}</footer>
    </div>
  `;
}
