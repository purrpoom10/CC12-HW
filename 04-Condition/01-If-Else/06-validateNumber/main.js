let num1 = prompt('Enter num1 : ');
let num2 = prompt('Enter num2 : ');
if((num1 === null || num1 ===  '' || num1.trim() === '' || isNaN(num1))||(num2 === null || num2 ===  '' || num2.trim() === '' || isNaN(num2))){
    alert('Invalid number');
}
else{
    alert(+num1+(+num2));
}