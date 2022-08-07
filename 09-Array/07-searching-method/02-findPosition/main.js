const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

//#solu1
// let result = [];

// for(let index in alphabets){
//     if(alphabets[index] == 'a'){
//         result.push(index)
//     }
// }

// console.log(result)

//#sol2
// let result = [];
// let foundIndex = alphabets.indexOf('a');

// do{

//     if(foundIndex!=-1){
//         result.push(foundIndex)
//         foundIndex = alphabets.indexOf('a',foundIndex+1)
//     }

// }while(foundIndex!=-1)

// console.log(result)
let result = [];
for (let index in alphabets) {
  if (alphabets[index] == 'a') {
    result.push(index);
  }
}

console.log(result);
