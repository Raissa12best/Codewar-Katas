function lookAndWrite(n) {
  const arr=n.split(' ');
  let count =0;
  for(let i=0; i<=arr;i++){
      count++;
      const result= [n,count,arr[i]];
  }
  return result;
}
console.log(lookAndWrite('1'));