let x = 10;
let y = 20;
console.log( x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y );

// increment decrement operator

let xx = 10;
xx ++
console.log(xx)
xx--
console.log(xx)
xx += 5;
console.log(xx)
xx -= 4
console.log(xx)

console.log(1 === 1)
console.log('1' === 1)
console.log("-------------------------")
console.log(1 == 1)
console.log('1' == 1)
console.log(true == 1)
console.log(false == 1)
console.log(false == 0)

// if else
// switch statement
//ternanry operator

let points = 110;
let type = points > 100? 'Gold Customer': 'Silver Customer'
console.log(type)

// Logical Operator 
//&& => both are true -> true 
// || == either is true -> true else false
// ! => reverse

let highIncome = true;
let creditScore = true;
let approvedLoan = highIncome && creditScore;
console.log('Loan is approved ' + approvedLoan);
let loanReject = !approvedLoan;
console.log('Loan is rejected ' + loanReject);

// false || true => output= true
// false || Subhash => output= Subhash
// false || 1 => output= 1