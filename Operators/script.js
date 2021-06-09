// OPERATORS IN JAVASCRIPT

// arithemetic operator

let firstNumber = 12;
let secondNumber = 5;

let sum = firstNumber + secondNumber;
let difference= firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;
let reminder = firstNumber % secondNumber;

console.log('sum = ' + sum,'difference = ' +difference,'product = ' +product,'quotient = ' +quotient,'reminder = ' +reminder,'reminder = ' +reminder )

let increment = firstNumber;

// value incremented but not reflected
increment++

// value reflected when it is called again
let post_increment = increment
let pre_increment = ++increment 

let decrement = firstNumber;

// value incremented but not reflected
decrement--

// value reflected when it is called again
let post_decrement = decrement
let pre_decrement = --decrement

console.log('Post-increment = ' + post_increment,'Pre-increment = ' +pre_increment,'Post-decrement = ' +post_decrement,'Pre_decrement = ' +pre_decrement )


// Assignment Operator

// asigning value to a variable using = sign
let value1 = 10
let value2 = 3

// value1 = value1+value2
value1 += value2;

let value3 = 10
let value4 = 3
// value1 = value1-value2
value3 -= value4;

let value5 = 10
let value6 = 3
// value1 = value1*value2
value5 *= value6;

let value7 = 10
let value8 = 3
// value1 = value1/value2
value7 /= value8;

let value9 = 10
let value10 = 3
// value1 = value1%value2
value9 %= value10;

console.log("Updated values are= "+value1,value3,value5,value7,value9 )

// Comparision Operator

let result1 = 10;
let result2 = 20;

result1 > result2 ? console.log("result1 is greater") : console.log("result2 is greater")

result1 < result2 ? console.log("result2 is greater") : console.log("result1 is greater")

result1 >= 10 ? console.log("result1 is greater or equal to 10") : console.log("result1 is not greater or equal to 10")

result1 <= 12 ? console.log("result1 is not lesser or equal to 12") : console.log("result1 is lesser or equal to 12")

"10" == 10 ? console.log("Values are equal") : console.log("Values are not equal")

12 != 10 ? console.log("Values are not equal") : console.log("Values are equal")

"10" === 10
 ? console.log("Values are equal") : console.log("Values are not equal")

// logical operator 

// check value is greater than 10 and less than 15 using && 

let givenValue = 12
if((givenValue>10) && (givenValue<15))
{
    console.log(true)
}
else{
    console.log(false)
}

// IF one condition is true then the  value is true in OR operator
if ((givenValue == 12) || (givenValue  < 10))
{
    console.log(true)
}
else{
    console.log(false)
}

//N0T operator
if(givenValue == 12)
{
    console.log(!false)
}
else{
    console.log(!true)
}







