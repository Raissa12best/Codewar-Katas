function highAndLow(numbers){
  
        let result=[];
     const arr=numbers.split(" ").map(Number)
      const highest=Math.max(...arr);
      const lowest=Math.min(...arr);
     result.push(highest,lowest);
     return result.join(" ")
}