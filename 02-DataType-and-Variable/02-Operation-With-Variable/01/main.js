// let a = 0;
// a++; // 1
// a+=3; // 4
// a*=17; // 68
// a/=7; // 9.714
// console.log(a)

let a = 1;
let b = 2;
let c = a++; // b=2 c=1 a=2
let d = ++c; //d=2 c=2
let e = ++d + d++ + d; //2+3+4

console.log(a) //2
console.log(b) //2
console.log(c) //2
console.log(d) //4
console.log(e)