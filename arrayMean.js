function getAverage(marks){
  let mark = 0;
  let n = marks.length;
  
  for(let i = 0;i<n;i++)
    {
      mark+= marks[i];
    }
  return Math.floor(mark/n);
}