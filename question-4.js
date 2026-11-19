// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// if lowest quantity = true

let currentLowest = inventory[0].quantity; //เริ่มเทียบจาก index 0

for (i = 0; i < inventory.length; i++){
  if (inventory[i].quantity < currentLowest){ //รอบแรก ถ้าตัวที่เทียบตอนนี้มากกว่าตัว index 0 ให้ update value นั้นแทน index 0
    currentLowest = inventory[i].quantity;
  }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี ${currentLowest} ชิ้น`);

