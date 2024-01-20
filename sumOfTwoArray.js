function arrayPlusArray(arr1, arr2) {
  let sum =0;
  for(let i in arr1) 
    sum =sum + arr1[i] + arr2[i]; 
  
  return sum;
}