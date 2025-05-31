function addNumber(firstNumber,secondNumber)
{
    var returnvalue = "Result";
    function add()
    {
        return returnvalue+(firstNumber+secondNumber);

    }
    return add();
}
let result = addNumber(10,20);
console.log(result);