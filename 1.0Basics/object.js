// let person = {}; //empty object
// console.log(person)

let person =
{
    name:'subhash',
    age:30
};
console.log(person)

let users = [];//empty array
let user = [
    {id:1,name:"subhash",age:30},
    {id:2,name:"kumar",age:28},
    {id:3,name:"abhi",age:25},
    {id:4,name:"putty",age:8},
    {id:5,name:"advik",age:4}
];
//dot notation
console.log(user.name);
console.log(user.id);
console.log(user.age);
//bracket notation
console.log(user['name']);
console.log(user['age']);
console.log(user['id']);

console.log(`Name of the user is ${user.name} Age:${user.age} ID:${user.ID}`)