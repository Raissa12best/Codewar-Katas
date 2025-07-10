function findOdd(A) {
 return A.reduce((acc,num)=>acc^num,0);
}