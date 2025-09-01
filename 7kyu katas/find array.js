function findArray(arr1, arr2){
  let newArray=[];
  if(arr1.length===0 || arr2.length===0) return [];
  for(let i=0;i<arr2.length;i++){
   if(arr2[i]<arr1.length) {
      newArray.push(arr1[arr2[i]])
  }
    }
  return newArray
}