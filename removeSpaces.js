function noSpace(x){
  
  let ans = '';
  for(let i=0;i<x.length;i++)
    {
      if(x[i]!=" ")
        ans+=x[i];
    }
  return ans;
}