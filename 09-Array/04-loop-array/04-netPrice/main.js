// const sales = [
//     { price: 1000, discount: 0.1 },
//     { price: 500, discount: 0.05 },
//     { price: 100 }
//   ];
// const summary = sales;
//   function calSummary(item,index){

//     if(item.discount){

//     }

//   }

//   sales.forEach(calSummary)
//   console.log(summary)

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

let summary = sales;
summary.forEach(calPrice);

function calPrice(item, index, array) {
  if (item.discount) {
    item.price -= item.price * item.discount;
    delete item.discount;
  }
}

console.log(summary);
