function dontGiveMeFive(start, end)
{
    const arr=[];
    let count=0;
    for(let i=start;i<=end;i++){
    
    arr.push(String(i));
    
    
    
    }
    
  return arr.filter(el=>!el.includes("5")).length;
}