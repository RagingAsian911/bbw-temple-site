function remixContributorContent(contributor) {
  const base = contributor.content || '';
  const emotion = contributor.emotion || 'neutral';
  const signal = contributor.signal || '0000';

  return `${base}\n\n[Remixed with ${emotion} energy — Signal ${signal}]`;
}
