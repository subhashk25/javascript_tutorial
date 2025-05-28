// while 
// for
// dowhile
//for in
// for of
// for(let i = 0; i < 5; i++)
// {
//     console.log('Hello World!', i)
// }

// let i = 0;
// while(i < 5)
// {
//     console.log('Hello from while', i);
//     i ++;
// }
let i = 0;
do{
    console.log('Hello from dowhile',i);
    i++;
}while(i < 5);

const person = {
    name:'suhash',
    age:32,
    location:'bangalore'
}
for (let key in person)
{
    console.log(key)
}
for (let key in person)
{
    console.log(key ,person[key])
}

let num = [1,2,3,45,67,89]
for(let index in num)
{
    console.log(index,num[index])
}

// let users = {};
// let users = new Object();
// let nums = [];
// let nums = new Array();

for(let key of Object.keys(person))
{
    console.log(key);
}
for(let key of Object.entries(person))
{console.log(key)}