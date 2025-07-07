function descendingOrder(n) {
  let digit=n.toString();
  let arr=digit.split('');
   let sorted=arr.sort();
   let reversed=sorted.reverse();
  let result=reversed.join('');
  return Number(result)
}