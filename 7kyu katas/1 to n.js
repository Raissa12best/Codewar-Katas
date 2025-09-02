function countZeros(n) {
  let count=0;
for(let i= 1;i<=n;i++){
  let str=i.toString();
 
  

  for(char of str){
    if(char==='0'){
      count++;
    }
  }
}
  
return count;
}
