// 1) find "pinaple" in an array

let arr = ["apple", "banana", "mango", "pineapple"]

arr.includes("pineapple") ? console.log(true) : console.log(fasle)

// 2) fibbonaci series from 1-100 

let inputValue = parseInt(prompt("Enter the positive value "))

let firstNumber = 0;
let secondNumber = 1;
let nextNumber = 0;

console.log(firstNumber + ",");
console.log(secondNumber + ",");

nextNumber = firstNumber + secondNumber;
while (nextNumber <= inputValue) {
    console.log(nextNumber + ",")

    firstNumber = secondNumber;
    secondNumber = nextNumber;
    nextNumber = firstNumber + secondNumber;
}


//3) Check the given two numbers if one of the number is 50 or sum is 50 


const inputNum1 = parseInt(prompt("enter first Number"));

const inputNum2 = parseInt(prompt("enter second Number"));

if (inputNum1 === 50 || inputNum2 === 50 || (inputNum1 + inputNum2 === 50)) {
    console.log("Value 50 is present")
} else {
    console.log("Value 50 is NOT present")
}


// 4) convert from celsius and fahrenheit

// using switch case 
// case 1 = celsius-fahrenheit
// case 2 = fahrenheit-celsius

let inputValue = parseInt(prompt("Enter the value of temperature"))
let condition = parseInt(prompt("Enter 1) to convert Celsius to Fahrenheit 2) to convert Fahrenheit to Celsius "))

switch (condition) {
    case 1:
        let result = inputValue * 1.8 + 32
        console.log(`${inputValue} degree Celsius is equal to ${result} degree Fahrenheit`)
        break;
    case 2:
        let result1 = (inputValue - 32) / 1.8
        console.log(`${inputValue} degree Fahrenheit is equal to ${result1} degree Celsius`)
        break;
    case 3:
        console.log("Only 1 and 2 is expected")


}

// 5) program to search particular element in a string

let inputValue = prompt("Enter a string ");
let charSearch = prompt("Enter the character to search")


if (inputValue.includes(charSearch)) {
    console.log(true)
} else {
    console.log(false)
}

// 6) first and last value of an array

var arr = [23, 24, 45, 456, 561, 567]

let firstElement = arr[0]
let lastElement = arr[arr.length - 1]

console.log(firstElement + ", " + lastElement)

// or another way 

let firstEle = arr.shift()
let lastEle = arr.pop()

console.log(firstEle + ", " + lastEle)

//7) find two numbers whose sum should be 10 in the given array

var arr = [2, 3, 5, 7, 9, 0]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let sum = arr[i] + arr[j]
        if (sum === 10) {
            console.log(arr[i] + "," + arr[j])
        }
    }
}
