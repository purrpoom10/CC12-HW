// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
//   };

//   function multiplyNumeric(obj,num){
//     for(key in obj){
//         if(typeof(obj[key])=='number'){
//             obj[key]*=num;
//         }
        

//     }
//   }

//   multiplyNumeric(menu,4);
//   console.log(menu)

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  function multiplyNumeric(obj,num){
    const result = {};
    for(let key in obj){
        if(typeof(obj[key])=='number'){
       result[key] = obj[key]*num;
    }
    else{
        result[key] = obj[key];
    }
  }
  
  return result;
}

console.log(multiplyNumeric(menu,3));
