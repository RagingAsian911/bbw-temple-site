function validateWorkflowRun(run) {
  const requiredSteps = [
    'Checkout repository',
    'Setup Node.js',
    'Install dependencies',
    'Build static content',
    'Deploy to GitHub Pages'
  ];

  const missing = requiredSteps.filter(step => !run.steps.includes(step));
  const status = missing.length === 0 ? 'valid' : 'invalid';

  return {
    runId: run.id,
    status,
    missingSteps: missing,
    timestamp: new Date().toISOString()
  };
}
