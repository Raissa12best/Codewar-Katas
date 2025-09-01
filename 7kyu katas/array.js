function explode(x) {
  let a = x[0];
  let b = x[1];
  let isNumA = typeof a === 'number';
  let isNumB = typeof b === 'number';
  let score;

  if (isNumA && isNumB) {
    score = a + b;
  } else if (isNumA) {
    score = a;
  } else if (isNumB) {
    score = b;
  } else {
    return 'Void!';
  }

  return Array(score).fill(x); // the fill  method in JavaScript is
  //used to fill all the elements of an array with a static value 
  //from the start index to the end index.
}