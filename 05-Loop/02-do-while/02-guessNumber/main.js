// let answer = prompt("Player 1 : Enter Number");

// if(+answer < 1 || +answer > 99) {
//     alert("Invalid Range")
// } else {
//     // For Player 2
//     let count = 0;
//     let guess;
//     do {
//     guess = prompt("Player 2 : Enter Number")
//     count++
//     if(guess == answer){
//         alert("Correct");
//         alert(count)
//     } else if (+guess < +answer && +guess > 0){
//         alert("Less than")
//     } else if(+guess > +answer ){
//         alert("More than")
//     } else {
//         alert("Please input number between 1-99")
//     }

//     } while ( guess != answer)

// }

let num1 = prompt("Player1 Enter number : ");

if(num1<1||num1>99){
    alert('Invalid range');
}

else{
let num2;
let count=0;
    do{
    num2 = prompt("player2 Enter number");
    count++;
    }while(num1!=num2)
    alert(`correct in ${count} times`);
}


