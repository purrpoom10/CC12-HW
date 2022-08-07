let num1 = prompt('Enter num1 : ');
let num2 = prompt('Enter num2 : ');
let num3 = prompt('Enter num3 : ');

let ans1,ans2,ans3;

if(num1>num2&&num1>num3){
    ans1 = num1;
    if(num2>num3){
        ans2 = num2;
        ans3 = num3
    }
    else{
        ans2 = num3;
        ans3 = num2;
    }
}
else if(num2>num1&&num2>num3){
    ans1 = num2;
    if(num1>num3){
        ans2 = num1;
        ans3 = num3;
    }
    else{
        ans2 = num3;
        ans3 = num1;
    }

}
else if(num3>num1&&num3>num2){
    ans1 = num3;
    if(num1>num2){
        ans2 = num1;
        ans3 = num2;
    }
    else{
        ans2= num2;
        ans3 = num1;
    }
}

alert(`${ans1} ${ans2} ${ans3}`);
