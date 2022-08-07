// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' }
//   ];

// function updateTask(id,newName){
//     const newTask = [...tasks] //const newTask = tasks.slice(0)
//     let foundIndex = newTask.findIndex(function(item){
//         return item.id == id;
//     })

//     if(foundIndex!=-1){
//         newTask.splice(foundIndex,1,{id:id,name:newName})
//     }
//     return newTask;
// }

// console.log(updateTask(2,"ppActivity"))

const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

let index = tasks.findIndex(function (item, index, array) {
  return item.id == 2;
});

console.log(index);
