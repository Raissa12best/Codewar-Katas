function isIsogram(str) {
  if (typeof str !== "string" || !str.trim()) return false; 

  const letters = str.toLowerCase().replace(/[^a-z]/g, "").split("");

  if (letters.length === 0) return false;
  const counts = {};
  for (const letter of letters) {
    counts[letter] = (counts[letter] || 0) + 1;
  }

  const frequencies = Object.values(counts);

  return frequencies.every(f => f === frequencies[0]);

}
console.log(isIsogram("Dermatoglyphics"));