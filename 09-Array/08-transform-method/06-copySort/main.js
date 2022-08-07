let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

function copySorted(array){
    const clone = array.slice()
    return clone.sort()
    
}

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)