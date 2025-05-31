// function Mobile(){

// }
// let redmi = new Mobile();
// console.log(redmi.a)

// function Mobile(){
//     this.a = 10;

// }
// let redmi = new Mobile();
// console.log(redmi.a)

// function Mobile(){

// }
// Mobile.prototype.a = 20
// let redmi = new Mobile();
// console.log(redmi.a)
// console.log(Mobile.a)

// let Mobile = function()
// {
//     this.a = 10;
// }
// Mobile.prototype.c=50;
// let lg = new Mobile();

// let samsung = function()
// {
//     Mobile.call(this);
//     this.b = 20;
// }
// samsung.prototype = Object.create(Mobile.prototype);
// //samsung.prototype = Object.create(Object.prototype);/,./
// let s = new samsung();
// console.log(s.a);
// console.log(s.b);
// console.log(s.c);
// let m = new Mobile();
// console.log(m.a);
// console.log(m.b);
// console.log(m.c);

//2.
let Mobile = function(){

}
let lg = function(model,price)
{
    this.model = model;
    this.price = price;
}
let redmi = function(model)
{
    this.model = model;
}
let lg1 = new Mobile('galaxy',5000);
