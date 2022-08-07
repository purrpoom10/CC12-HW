//1
// const nums = [-3, 2, 11, -7, 4, 6];
// let result = nums.reduce((mul,current)=>mul*current,1)
// console.log(result)


//2
const nums = [-3, 2, 11, -7, 4, 6];

let result = nums.reduce(function(acc,item,index,array){
    acc*=item;
    return acc;
},1)

console.log(result)