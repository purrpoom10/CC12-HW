function checkEmptyObj(obj) {
  if (Object.keys(obj).length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEmptyObj({ name: 'John' }));
console.log(checkEmptyObj({}));
