function reverseByCenter(s){
  const length=s.length;
  const middle = Math.floor(length/2);
  if(length%2===0){
    //even and then swap halves
    const firstHalf=s.slice(0,middle);
    const secondHalf=s.slice(middle);
    return secondHalf+firstHalf;
  }
  else
  {// keep the middle and swap the rest
    const firstHalf=s.slice(0,middle);
    const middleHalf=s[middle];
    const secondHalf=s.slice(middle+1);
    return secondHalf+middleHalf+firstHalf;
  }
}