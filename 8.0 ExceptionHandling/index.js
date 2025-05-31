try{
    document.writeln(sayHello());
    document.writeln("this mehtod is not called");

}catch(e)
{
    document.writeln("Description of event "+e.description+"</br>");
    document.writeln("Description of event "+e.message+"</br>");
    document.writeln("Stacktrace "+e.stack+"</br>")
}
finally{
    document.writeln("This method will be called");
}