const express = require('express');
const app = express();
app.use(express.json());

app.post('/route-contributor', (req, res) => {
  const { alias, emotion, role, signal } = req.body;

  const routeMap = {
    creator: '/remix',
    supporter: '/console',
    analyst: '/analytics',
    ritualist: '/invocation',
    scout: '/routes'
  };

  const emotionMap = {
    joy: '/burst',
    sorrow: '/archive',
    desire: '/ignite',
    pride: '/legacy',
    fear: '/cloak',
    trust: '/bond'
  };

  const route = routeMap[role] || '/general';
  const emotionRoute = emotionMap[emotion] || '/neutral';

  res.json({
    alias,
    route,
    emotionRoute,
    signal,
    timestamp: new Date().toISOString()
  });
});

app.listen(3002, () => console.log('Routing logic active on port 3002'));
