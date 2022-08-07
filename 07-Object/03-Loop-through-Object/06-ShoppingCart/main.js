function createCart() {
  let cart = {};
  let name;
  let amount;
  let price;
  let discount;

  name = prompt('Enter name of product :  ');
  amount = prompt('Enter num of amount :  ');
  price = prompt('Enter price of product :  ');
  discount = prompt('Enter discount of product :  ');

  cart['name'] = name;
  cart['amount'] = amount;
  cart['price'] = price;
  if (discount < 0 || discount == undefined) {
    cart['discount'] = discount;
  }

  return cart;
}

let cart = createCart();
console.log(cart);

function realPrice(arr) {
  let result = 0;
  let sumPrice = 0;
  let sumDiscount = 0;
  sumPrice = arr.amount * arr.price;
  sumDiscount = sumPrice * arr.d;
}

console.log(realPrice(cart));
