function calculateTotal(team1, team2) {
 
  const t1 = [...team1];
  while (t1.length < 3) t1.push(0);
  
  const t2 = [...team2];
  while (t2.length < 3) t2.push(0);
  
  const t1s = t1.reduce((sum, score) => sum + score, 0);
  const t2s = t2.reduce((sum, score) => sum + score, 0);
  
 
  return t1s > t2s;
}