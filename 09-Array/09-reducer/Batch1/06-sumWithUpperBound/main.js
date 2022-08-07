let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let result = names.reduce(function(acc,item,index,array){

   let currentKey = acc[item]
   if(!currentKey){
    acc[item] = 1;
   }
   else{
    acc[item]=acc[item]+1;
   }
   return acc;

},{})

console.log(result)

