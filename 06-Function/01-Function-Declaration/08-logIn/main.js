function login(username, password) {
  if (username == 'admin' && password == 'P@ssw0rd') {
    alert('Success');
  } else {
    alert('Fail');
  }
}

let username = prompt('Enter username : ');
let password = prompt('Enter password : ');

login(username, password);
