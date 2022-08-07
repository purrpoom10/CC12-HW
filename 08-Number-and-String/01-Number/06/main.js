let random = (min, max) => {
  let result = Math.random() * (max - min) + min;
  return result.toFixed();
};

console.log(random(2, 7));
