function calSum() {
  let arr = [];
  let inputNum;
  let sum = 0;
  do {
    inputNum = prompt('Enter num : ');
    if (inputNum != 'stop' && isNaN(+inputNum) != true && inputNum != null) {
      arr.push(+inputNum);
    }
  } while (inputNum != 'stop' && isNaN(inputNum) != true && inputNum != null);

  arr.forEach(function (item) {
    sum += item;
  });

  return sum;
}

console.log(calSum());
