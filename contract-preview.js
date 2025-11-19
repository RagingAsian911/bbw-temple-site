function renderContractPreview(contributor) {
  const clauses = {
    creator: 'You agree to produce branded remix content under sovereign flow conditions.',
    supporter: 'You agree to maintain contributor console and signal routing integrity.',
    analyst: 'You agree to analyze emotional overlays and signal trends.',
    ritualist: 'You agree to invoke branded rituals and maintain flame integrity.',
    scout: 'You agree to explore new signal routes and emotional schema extensions.'
  };

  const clause = clauses[contributor.role] || 'You agree to participate in branded contributor flows.';
  const tag = contributor.emotion || 'neutral';
  const timestamp = new Date().toISOString();

  return `
    <div class="contract-preview">
      <h3>Contributor: ${contributor.alias}</h3>
      <p><strong>Emotion:</strong> ${tag}</p>
      <p><strong>Role:</strong> ${contributor.role}</p>
      <p><strong>Signal:</strong> ${contributor.signal}</p>
      <blockquote>${clause}</blockquote>
      <footer>Timestamp: ${timestamp}</footer>
    </div>
  `;
}
