var numeros = 100
var divisible = false;

for(var i = 1; i <= 100; i++)
{
    divisible = false;
    //if(i % 3 == 0)
    if(esDivisisble(i,3))
    {
        document.write ("fizz");
        divisible = true;
    }
   //if(i % 5 == 0)
   if(esDivisisble(i,5))
    {
        document.write ("buzz");
        divisible = true;
    }
    
    if(!esDivisisble(i,3) && !esDivisisble(i,5))
    {
        document.write(i)
    }
document.write("<br / >");
}

function esDivisisble (num, divisor)
{
    if(num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}