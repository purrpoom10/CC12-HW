let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']


let result = alphabets.reduce(function(acc,item){

    if(!acc.includes(item)){
        acc.push(item)
    }
    
    return acc;
    

},[])

console.log(result)