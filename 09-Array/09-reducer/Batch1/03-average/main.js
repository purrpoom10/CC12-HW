const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];
  // expected result: 89

  let initial = {sumScore : 0,sumWeight : 0}

let sum = scores.reduce(function(acc,item,index,array){
  initial.sumScore+=item.score*item.weight;
  initial.sumWeight+=item.weight;

  return acc;

},initial)

let result = sum.sumScore/sum.sumWeight;

console.log(result)


  