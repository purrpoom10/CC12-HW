let money = 100000;

for(let i = 1;i<=10;i++){
    money+=money*0.025;
}

console.log(money.toFixed(2));