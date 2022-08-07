const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

function updateTask(id, newName) {
  let result = tasks.findIndex(function (item, index, array) {
    return item.id == id;
  });

  tasks[result].name = newName;
}

updateTask(1, 'Sleeping');
console.log(tasks);
