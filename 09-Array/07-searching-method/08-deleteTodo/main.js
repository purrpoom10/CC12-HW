const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

function deleteTask(id) {
  let result = tasks.findIndex(function (item) {
    return item.id == id;
  });

  delete tasks[result];
}

deleteTask(2);
console.log(tasks);
