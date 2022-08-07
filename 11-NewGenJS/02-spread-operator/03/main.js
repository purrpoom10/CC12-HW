function getPerson(firstName, lastName, ...hobbies) {
  return {
    firstName,
    lastName,
    hobbies,
    numHobbies: hobbies.length,
  };
}


