function RemoveNb(n){
    const result=[];
    const S= n*(n+1)/2;

    for(let a=1;a<=n; a++){
    const b=(S-a)/(a+1);
    
    if(Number.isInteger(b) && b<=n && b>0){
       result.push([a,b]);
    }
    }
    return result;
}
console.log(RemoveNb(100));