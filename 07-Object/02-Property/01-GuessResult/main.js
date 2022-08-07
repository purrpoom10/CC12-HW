const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // *isActive change to false
  user = {}; //reassign
  console.log(user); // **Uncaught