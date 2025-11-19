function analyzeEmotions(data) {
  const emotionMap = {};

  data.forEach(entry => {
    const emotion = entry.emotion;
    emotionMap[emotion] = (emotionMap[emotion] || 0) + 1;
  });

  const sorted = Object.entries(emotionMap)
    .sort((a, b) => b[1] - a[1])
    .map(([emotion, count]) => ({ emotion, count }));

  return {
    total: data.length,
    distribution: sorted
  };
}
