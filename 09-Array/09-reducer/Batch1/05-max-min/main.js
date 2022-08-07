let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let initial = {max:arr[0],min:arr[0]}

let result = arr.reduce(function(acc,item){

    if(acc.max<item){
        acc.max=item;
    }
    else if(acc.min>item){
        acc.min=item;
    }

    return acc;

},initial)

console.log(result)

