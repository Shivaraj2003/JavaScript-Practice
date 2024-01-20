function getCount(str) {
  
let arr = str.split("");
  let cnt = 0;
  
  for(let i=0;i<arr.length;i++)
    {
      switch(arr[i])
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
              cnt++;
        }
    }
  return cnt;
}