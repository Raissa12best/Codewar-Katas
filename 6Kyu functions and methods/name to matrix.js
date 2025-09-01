function matrixfy(name) {
  if (name.length === 0) return "name must be at least one letter";

  let size = Math.ceil(Math.sqrt(name.length));//figure out the square size -> smallest integer >= sqrt of name length
  //  name.length gives the number of characters in the string
  //  Math.sqrt(name.length) calculates the square root (side of a square)
  //  Math.ceil(...) rounds it up, because we can’t have half a row
  
  
  
  let chars = name.split('');

  // add with "." until it's a full square
  while (chars.length < size * size) {
    chars.push(".");
  }

  let result = [];
  for (let i = 0; i < size; i++) {
    result.push(chars.slice(i * size, (i + 1) * size));
  }

  return result;
}