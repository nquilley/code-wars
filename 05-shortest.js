

function findShort(s){
  
    var split = s.split(" ");
    console.log(split)
    
    var shortest = split[0];
    for(var i=1; i<split.length; i++){  //Start at i=1 so you don't compare split[0] with itself
      if(split[i].length< shortest.length){
        shortest = split[i];
      }
    }
    return shortest.length;
  }

  console.log(findShort("Let's travel abroad shall we"))