function remixContent(contributor) {
  const base = contributor.content || '';
  const emotion = contributor.emotion;
  const signal = contributor.signal;

  return `${base}\n\n[Remixed with ${emotion} energy — Signal ${signal}]`;
}
