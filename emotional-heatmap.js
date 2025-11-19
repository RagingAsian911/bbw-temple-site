function generateHeatmap(data) {
  const emotionMap = {};

  data.forEach(entry => {
    emotionMap[entry.emotion] = (emotionMap[entry.emotion] || 0) + 1;
  });

  const canvas = document.getElementById('heatmap');
  const ctx = canvas.getContext('2d');
  const emotions = Object.keys(emotionMap);
  const max = Math.max(...Object.values(emotionMap));

  emotions.forEach((emotion, i) => {
    const intensity = (emotionMap[emotion] / max) * 255;
    ctx.fillStyle = `rgba(${intensity}, 0, 0, 0.8)`;
    ctx.fillRect(i * 50, 0, 40, 100);
    ctx.fillStyle = '#fff';
    ctx.fillText(emotion, i * 50, 120);
  });
}
