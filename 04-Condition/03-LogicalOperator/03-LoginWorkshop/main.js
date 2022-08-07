let user = prompt('Enter Username : ');
let pwd;
if(user===null||user.trim()==''){
    user = 'guest';
}
else if(user=='codecamp'){
    pwd = prompt('Enter Password : ');
    if(pwd!='123456'){
        alert('Wrong password');
        user = 'guest';
    }
}
else{
    user = 'guest';
}

alert(`Welcome ${user}`);