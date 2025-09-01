function unscrambleEggs(word) {
  
  return word.replace(/([^aeiou\s])egg/gi, '$1')
}