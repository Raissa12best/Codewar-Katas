function vowelRecognition(input) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  let totalVowels = 0;
  const n = input.length;

  for (let i = 0; i < n; i++) {
  
    if (vowels.has(input[i])) {
     
      const counts = (i + 1) * (n - i);
      totalVowels += counts;
    }
  }

  return totalVowels;
}