// let john = { name: 'John', age: 27 };
// let jo = { name: 'Jo', age: 21 };
// let jin = { name: 'Jin', age: 25 };

// let arr = [john, jo, jin];



// function getAverageAge(array){
//     let result = arr.reduce((acc,item)=>acc+item.age,0)/array.length
//     console.log(result) 
// }

// getAverageAge(arr)

let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(array){

        let sumAge = array.reduce(function(acc,item,index,array){
        acc+=item.age;
        return acc;
    },0)

    return (sumAge/array.length).toFixed(2);
}

console.log(getAverageAge(arr));

