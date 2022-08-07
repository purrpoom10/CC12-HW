function rollDice() {
  let result;
  result = Math.ceil(Math.random() * 6);
  return result;
}

console.log(rollDice());
