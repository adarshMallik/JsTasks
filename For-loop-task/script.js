// EvenNumbers from 1 to 100

for(let i=2; i<=100;i++)
{
      if(i%2 == 0 )
      {
          console.log("Even Number: "+ i)
      }
}

// Armstromg Number


let inputValue = prompt("Please enter a value");
const value = parseInt(inputValue);

// // armstrong number if 153 =  1*1*1+5*5*5+3*3*3 = 1+125+27 = 153 

let sum = 0
let temp = value 

while(temp > 0)
{
   let reminder = temp % 10;  // 153%10 = 3 
   sum = sum+reminder*reminder*reminder;  // 0+3*3*3
   temp = parseInt(temp/10)     // 153/10 =15

}

if(sum == value )
{
    console.log("Entered Number is a Armstorng Number")

}
else{
    console.log("Entered Number is NOT a Armstorng Number")
}

// Prime Numer 


const inputvalue = parseInt(prompt("Enter a positive value"))
let primeNumber = true

for(let i=2; i<inputvalue ; i++)
{
     if(inputvalue%i == 0)
     {
         primeNumber= false;
         // if one condition matches then there is no need to check further so break the loop
         break;
     }

}

if(primeNumber)
{
    console.log("Input value is a prime Number")
}
else{
    console.log("Input value is NOT a prime Number")
}
