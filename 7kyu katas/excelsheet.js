function titleToNumber(title) {

  let solution = 0;
  
  for (let i = 0; i < title.length; i++) {
    result = result * 26 + (title.charCodeAt(i) - 64);
  }
  
  return solution;
}