let createObject = function () {
  let result = {};
  let key;
  let value;
  do {
    key = prompt('Enter type of fruit : ');
    value = prompt('Enter num of fruit : ');
    if (key !== null && key.trim() !== '' && key != 'stop' && value != 'stop') {
      if (value > 1) {
        key += 's';
      }
      result[key] = value;
    }
  } while (key !== 'stop' && value !== 'stop');
  return result;
};

let newArr = createObject();
console.log(newArr);
