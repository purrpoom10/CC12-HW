// function truncate(str, length) {
//   let modifystring;
//   if (str.length > length - 1) {
//     strtrun = str.slice(0, length);
//     return modifystring + '...';
//   }
//   return str;
// }
// console.log(truncate('babybigboy', 5));

function truncate(str, length) {
  let result;

  if (str.length > length) {
    result = str.slice(0, length) + '...';
  } else {
    result = str;
  }

  return result;
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); // What I'd like to te…
console.log(truncate('Hi everyone!', 20)); // Hi everyone!
