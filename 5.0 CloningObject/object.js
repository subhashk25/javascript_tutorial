let user ={
    id:1,
    name:"Subhash",
    age:32
}
console.log(user)
//cloning the value using for loops
// let another = {}
// for (let key in user)
// {
//     another[key] = user[key];

// }
// console.log(another)

//cloning the object using assign method

// const newUser = Object.assign({color:'fair'},user)
// console.log(newUser)

//using spread operator
const another ={... user};
console.log(another)
