function replaceCommon(str, replacement) {
  let noSpace=str.split(" ").map(word=>word.split('')).flat();
  const freq = {};

  for (const ch of noSpace) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let mostCommon = null;
  let maxCount = 0;

  for (const ch of str) { 
    if (ch === ' ') continue;
    if (freq[ch] > maxCount) {
      maxCount = freq[ch];
      mostCommon = ch;
    }
  }

  return str.replaceAll(mostCommon, replacement);
}