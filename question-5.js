// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
//function (products,promotionalCode) > ifelse discount code > return calculated total quantity

/*
without discount = 85
with SALE20 = 68
with SALE50 = 42.5
*/

let productTShirt = products[0].price * products[0].quantity;
let productJeans = products[1].price * products[1].quantity;
let productShirt = products[2].price * products[2].quantity;
let sumOrder = productTShirt+productJeans+productShirt;

function calculatedTotalPrice (products, promotionalCode){
  if (promotionalCode === "SALE50"){
    return sumOrder-(sumOrder*0.5);
  } else if (promotionalCode === "SALE20"){
    return sumOrder-(sumOrder*0.2);
  } else if (promotionalCode === ""){
    return sumOrder;
  }
}

console.log(calculatedTotalPrice(products,""));
console.log(calculatedTotalPrice(products,"SALE20"));
console.log(calculatedTotalPrice(products,"SALE50"));

console.log(calculatedTotalPrice(products,"discount 20%"));
