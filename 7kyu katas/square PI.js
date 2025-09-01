
function squarePi(digits){
 const PI="31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
  const slice=PI.slice(0,digits);
  const sumOfpiSquares = [...slice].reduce((sum, d) => sum + Number(d) ** 2, 0);
  let i = 0;
  while (i * i < sumOfpiSquares) {
     i++;
}
return i;

  
  
}
