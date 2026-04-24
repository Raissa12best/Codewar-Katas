function jumpingNumber(n){
 
  let str = n.toString()
  for(let i = 0; i<str.length -1 ; i++){
    const difference = Math.abs(str[i] - str[i+1])
  
    if(difference !== 1){
    return "Not!!"
    }
   } 
      return "Jumping!!"
    
    
}