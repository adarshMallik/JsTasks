//  Function Task


//1) difference between function declaration and function expression

/* a) function-declaration = function can be declared anywhwere and can be used anytime 

 function declare()
 {
     return value;
 }

function has to be called after decleration
 declare() */

/* b) function-expression = function is defined as a expression

var x = function(a,b) {return a*b}

this function does not need function name the variable name acts as a function name 

function declarations load before any code is executed while expression load only when the interpreter reaches the line of code */

// 2)  Function to check number is palindrome

function checkPalindrome(inputNumber)
{
    let sum =0;
    let temp = inputNumber

    while(inputNumber > 0)
    {
    let reminder = inputNumber%10  // 1
    sum= sum*10 + reminder  //  1*10 + 5
    inputNumber = parseInt(inputNumber/10)
    }  
    if(sum === temp)
    {
        return ("Palindrome")
    }
    else
    {
        return ("Not Palindrome")
    }
     
  
}

let retValue = checkPalindrome(151)
console.log(retValue)

// 3) Pattern using Javascript

let n = 5;

let pattern ="";

for(let i= 1; i<=n;i++)
{
    for(j=0; j<i;j++)
    {
        pattern += "* "
    }
    pattern += "\n"
}

console.log(pattern)

// 4)  GST Calculator default value is 18 

function gstCalculator(amount, gstPercent=18)
{
    let totalAmount = amount + (amount * gstPercent)/100
    return totalAmount;
}

let returnValue = gstCalculator(1000)
console.log(returnValue)

// 5) BMI calculator for john and mark

function BMIcalculator (bodyMass,bodyHeight)
{
    let BMI = bodyMass/(bodyHeight*bodyHeight)
    return BMI
}

let johnMass = 65, johnHeight = 1.65, markMass = 85, markHeight=1.7
let johnBMI = BMIcalculator(johnMass,johnHeight);
let markBMI = BMIcalculator(markMass,markHeight);

(johnBMI > markBMI) ? console.log("John BMI higher than Mark") : console.log("Mark BMI higher than John")

// 6) function to display elements less than 30 in an array

function lessThenThirty (arrayValue) {

    for(let i=0; i<arrayValue.length; i++)
    {
        if(arrayValue[i] < 30)
        {
            console.log(arrayValue[i])
        }
    }
}

let arr = [23,45,67,89,12,34,30,22];
lessThenThirty(arr)

// 7)  Longest word in a string 

let longestWord = function(inputString)
{
    // converts dtring into array ["web","development","tutorial"]
    let stringArray = inputString.split(' ')

    let longestWordLength = 0
    let word=""
     
    // iterate array till the end
    for(let i=0 ; i<stringArray.length;i++)
    {
        // compare string with its length
        if(stringArray[i].length > longestWordLength)
        {
            longestWordLength = stringArray[i].length
            word = stringArray[i]
            
        }
    }
    return word

}

let inputValue = 'Web Development Tutorial'
let returnString = longestWord(inputValue)

console.log(returnString);



