const employees = {
  john: {
    salary: 1000,
    address: { district: 'Ratchathewi', province: 'Bangkok' },
  },
  peter: {
    salary: 1500,
    address: { district: 'Pathumwan', province: 'Bangkok' },
  },
  mike: {
    salary: 800,
    address: { district: 'Pakkret', province: 'Nonthaburi' },
  },
  sarah: {
    salary: 2200,
    address: { district: 'Sriraja', province: 'Chonburi' },
  },
};

//input name
//loop check input name in array employees
//if input name == keyin employees array log

let employeeName = prompt('Enter employee namem : ');

for (let key in employees) {
  if (employeeName == key) {
    console.log(
      `Name:${[key]}, salary: ${employees[key].salary}, address: ${
        employees[key].address.district
      }, ${employees[key].address.province}`
    );
  } else {
    console.log('Not found');
  }
}
