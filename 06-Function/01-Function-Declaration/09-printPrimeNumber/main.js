function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

// console.log(checkPrime(2));

function printPrime(num) {
  let result = [];
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

let arrPrime = printPrime(22);
console.log(arrPrime);
