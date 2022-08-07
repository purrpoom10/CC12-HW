function clone(arr){
    return arr.slice()
    
}

let fruit = ['banana','mango']

let arr1 = clone(fruit);

console.log(arr1)