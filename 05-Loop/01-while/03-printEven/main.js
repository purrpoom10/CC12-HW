// let i = 1;

// while(i <= 100){

//     if(i % 2 === 0){
//         console.log(i);
//     }
    
//     i++;
// }

let num = +prompt('Enter num : '); //455
let num2;
let count=0;

while(num){
    num2 = num%10; //5
    num = (num-num2)/10; //450/10=45
    count++;
}

alert(count);