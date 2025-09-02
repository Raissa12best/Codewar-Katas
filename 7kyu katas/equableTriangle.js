function equableTriangle(a,b,c) {
  let perimeter= a+b+c;
  const s=perimeter/2;
  const area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
 
  return(perimeter==area)

  
}