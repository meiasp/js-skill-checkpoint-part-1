// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory[0].quantity = 200;
inventory.push(
  { name: "Orange", price: 20, quantity: 300},
)

//คำนวณ มูลค่ารวม ของจำนวนสินค้าทั้งหมดในสต็อก

let valueApple = 0;
let valueBanana = 0;
let valueOrange = 0;

valueApple = inventory[0].price*inventory[0].quantity;
valueBanana = inventory[1].price*inventory[1].quantity;
valueOrange = inventory[2].price*inventory[2].quantity;

totalValue = valueApple + valueBanana + valueOrange;
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalValue} บาท`);
