function points(games) {
  let cnt = 0;
  for(let i in games)
    {
      let match = games[i];
      
      let scores = match.split(":");
      
      if(scores[0]>scores[1])
        cnt+=3;
      else if(scores[0]==scores[1])
        cnt+=1;
      
    }
  return cnt;
}