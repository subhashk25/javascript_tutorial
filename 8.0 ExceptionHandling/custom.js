function divide()
{
   let numerator=Number( prompt("Enter the numerator "));
   let denominator=Number( prompt("Enter the denominator "));
   try{
    if(denominator == 0)
    {
        //custom exception
        throw{
            error:"Divide by zero error",
            message:"cannot divide by zero"
        }
    }else
    {
        document.writeln("Result = " +numerator/denominator);
    }
   }catch(e)
   {
    console.log(e.message      
    );
    console.log(e.error)
   }
}