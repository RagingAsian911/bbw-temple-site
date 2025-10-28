function generateDashboardAnalytics(data) {
  const emotionMap = {};
  const roleMap = {};
  const signalMap = {};

  data.forEach(entry => {
    emotionMap[entry.emotion] = (emotionMap[entry.emotion] || 0) + 1;
    roleMap[entry.role] = (roleMap[entry.role] || 0) + 1;
    signalMap[entry.signal] = (signalMap[entry.signal] || 0) + 1;
  });

  return {
    emotions: emotionMap,
    roles: roleMap,
    signals: signalMap,
    total: data.length
  };
}
