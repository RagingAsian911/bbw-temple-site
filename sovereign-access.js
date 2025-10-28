function unlockAccess(key) {
  const ritualKey = 'TEMPLE-SOVEREIGN-ACCESS-2025';
  if (key === ritualKey) {
    console.log('✅ Access granted. Contributor signal unlocked.');
    return true;
  } else {
    console.log('❌ Access denied. Invalid ritual key.');
    return false;
  }
}
