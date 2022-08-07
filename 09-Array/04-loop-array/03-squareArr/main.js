// const arr = [2, 3, 5, 7, 11];

// function readAll(item,index,array){
//     arr[index] = item**2;
// }

// arr.forEach(readAll);
// console.log(arr)
const arr = [2, 3, 5, 7, 11];

arr.forEach(squareArr);

function squareArr(item, index, array) {
  array[index] = item ** 2;
}

console.log(arr);
