let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

let flatarray = flattened.reduce(function(acc,item){
    // acc.push(...item)
    // return acc;
    
    return acc.concat(item);
    
},[])

console.log(flatarray)