function getAges(sum,difference){
  if (sum<0 || difference<0 || difference>sum)
    return null
   const x=(sum+difference)/2
   const y=(sum-difference)/2
  if(x<0 || y<0) 
    return null;
  return[x,y];
};