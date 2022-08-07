function calPoint(sell) {
  let point = Math.floor(sell / 100);
  return point;
}

console.log(calPoint(1657));
