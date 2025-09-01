function swapTwo(array, a, b) {

  const result = [...array]; 

  const firstelementA = result.indexOf(a);       
  const lastelementB = result.lastIndexOf(b);   

  if (firstelementA !== -1 && lastelementB !== -1) {
    [result[firstelementA], result[lastelementB]] = [result[lastelementB], result[firstelementA]]; 
  }

  return result;
}