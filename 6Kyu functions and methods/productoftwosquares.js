
function squareProduct(n) {
 let arr=[];
  let root=Math.sqrt(n);
  if(!Number.isInteger(root)) return[];
  for(let a=0;a<=root;a++){
    const b= root/a;
    if(Number.isInteger(b)&&a<=b){
      arr.push([a,b]);
    }
  }
    return arr;
}