// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// if lowest quantity = true

let currentLowest = inventory[0]; //เริ่มเทียบจาก index 0

for (let i = 1; i < inventory.length; i++){ //index 0 เทียบ 1 เพราะไม่จำเป็นต้องเทียบกับตัวเอง
  if (inventory[i].quantity < currentLowest.quantity){
    currentLowest = inventory[i];
  }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${currentLowest.name} ซึ่งมี ${currentLowest.quantity} ชิ้น`);

