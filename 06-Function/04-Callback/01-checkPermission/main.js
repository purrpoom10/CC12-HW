function checkAdmin(role, yes, no) {
  if (role == 'ADMIN') yes();
  else no();
}

function isAdmin() {
  alert('ACCESS GRANTED');
}

function notAdmin() {
  alert('ACCESS DENIED');
}

checkAdmin('ADMIN', isAdmin, notAdmin);
