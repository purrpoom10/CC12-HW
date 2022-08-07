const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5

let result = nums.find(function (item, index, array) {
  // if(item<0){
  //     return true;
  // }
  return item < 0; //shortcut
});

console.log(result);
