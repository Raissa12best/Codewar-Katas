
function countLonelyLetters(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z]/g, '');

  const freq = {};
  for (let char of cleaned) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let lonelyCount = 0;

  for (let char in freq) {
    if (freq[char] === 1) {
      const charCode = char.charCodeAt(0);

      const prev = String.fromCharCode(charCode - 1);
      const next = String.fromCharCode(charCode + 1);

      const hasPrev = char !== 'a' && freq[prev];
      const hasNext = char !== 'z' && freq[next];

      if (!hasPrev && !hasNext) {
        lonelyCount++;
      }
    }
  }
}

  return lonelyCount;