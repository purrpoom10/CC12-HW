let num = +prompt('Enter num : '); //455
let num2;
let sum=0;

while(num){
    num2 = num%10; //5
    num = (num-num2)/10; //450/10=45
    sum+=num2
}

alert(sum);