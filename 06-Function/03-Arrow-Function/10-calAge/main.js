let leapYear = (year) => {
  if (year % 100 == 0 && year % 400 != 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  }
  return false;
};

let calAge = (year) => {
  let dayAge = 0;
  for (let i = year; i < 2020; i++) {
    if (leapYear(i)) {
      dayAge += 366;
    } else {
      dayAge += 365;
    }
  }
  return dayAge;
};

console.log(calAge(2019));
