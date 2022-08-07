let sumAll=0;
let sumEven=0;
let sumOdd=0;
let sumTwo=0;
let sumThree=0;

for(let i = 1;i<=100;i++){
    sumAll+=i;
    if(i%2==0){
        sumEven+=i;
        sumTwo+=i**2;
    }
    else{
        sumOdd+=i;
        if(i%3==0){
            sumThree+=i**2;
        }
    }
}

console.log(sumAll);
console.log(sumEven);
console.log(sumOdd);
console.log(sumTwo-sumThree);
