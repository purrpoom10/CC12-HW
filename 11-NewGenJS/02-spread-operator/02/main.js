function changeArray(arr){
    let newArr = [...arr];
    newArr[3]=newArr[3]**2
    return newArr;
}

let array1 = [1,2,3,4,5];

console.log(changeArray(array1));

