function findMax(...num) {
  if (num.length > 4) {
    return 'out of range';
  }

  console.log(Math.max(...num));
}

let maxNum = findMax(6, 8, 'pp', 22);
