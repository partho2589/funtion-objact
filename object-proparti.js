var computer = {
    price:50000,
    keyBoard:600,
    proceser:'itel i5'
}
// console.log(computer);
// console.log(computer.price);
//cete a object proparti valu.
var computerPrice=(computer.proceser);
// console.log(computerPrice);
var priceProparti=['price'];

computer.price = 35000;
computer['price']= 40000;
computer[priceProparti]=30000;

console.log( computer);


