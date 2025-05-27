function add(a,b)
{
    return a + b;

}
let result = add(10,20)
console.log(result)

let add1 = function(a,b)
{
    return a + b;
}
console.log(add1(20,40))

let add2 =(a,b)=>{
    return  a + b;

}
console.log(add2(40,50))

let add3 = (a,b)=> a+b;
console.log(add3(60,20));

let add4 = (a) => a * 10;
console.log(add4(70))

let add5 = a=>a*20;
console.log(add5(6))

let add6 =()=>console.log('hello from function')
add6()

console.log(newadd(40,70));
function newadd(a,b){
    return a + b;
}

//let add=(10,20)=>console.log(a+b)