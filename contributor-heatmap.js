function generateContributorHeatmap(data) {
  const matrix = {};

  data.forEach(entry => {
    const key = `${entry.role}-${entry.emotion}`;
    matrix[key] = (matrix[key] || 0) + 1;
  });

  const canvas = document.getElementById('heatmap');
  const ctx = canvas.getContext('2d');
  const keys = Object.keys(matrix);
  const max = Math.max(...Object.values(matrix));

  keys.forEach((key, i) => {
    const intensity = (matrix[key] / max) * 255;
    ctx.fillStyle = `rgba(255, ${255 - intensity}, ${255 - intensity}, 0.8)`;
    ctx.fillRect(i * 50, 0, 40, 100);
    ctx.fillStyle = '#000';
    ctx.fillText(key, i * 50, 120);
  });
}
