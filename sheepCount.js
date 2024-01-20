function countSheeps(sheep) {
  let cnt = 0;
  
  for(let i = 0;i<sheep.length;i++)
    {
      if(sheep[i] == true)
        cnt++;
    }
  
  return cnt;
}