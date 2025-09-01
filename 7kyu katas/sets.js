function inter(s1, s2){
  let intersection=[...s1].filter((item)=>s2.has(item));
  return new Set(intersection);
}
function union(s1, s2){
  let union=[...s1,...s2]
    return new Set(union);
}
function areEqual(s1, s2){
   if(s1.size!==s2.size)return false;
   for(let item of s1){
    if(!s2.has(item))return false;
    }
  return true
}

function notEqual(s1, s2){
  return !areEqual(s1,s2);
}
function uniqueSum(lst){
  const uniqueNum=[...new Set(lst)];
 const sum=uniqueNum.length?uniqueNum.reduce((a,b)=>a+b,0):null;
  return sum;
}