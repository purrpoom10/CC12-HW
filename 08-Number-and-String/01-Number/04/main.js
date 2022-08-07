function changeNum(num) {
  let result = (Math.floor(num * 100) / 100).toFixed(2);
  return result;
}

console.log(changeNum(3.1289));
