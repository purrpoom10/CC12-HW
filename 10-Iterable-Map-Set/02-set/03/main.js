const values = [1, 4, 8, 2, 1, 3, 3, 8];
// [1, 4, 8, 2, 3]

function unique(arr) {
  const set = new Set(arr);
  const newArray = Array.from(set);

  return newArray;
}

console.log(unique(values));
