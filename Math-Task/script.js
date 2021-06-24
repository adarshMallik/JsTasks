//   Random Number Displaying random number in a  Text box


let inputTag = document.getElementById("random-number");
let btnClick = document.getElementById("random-button");

btnClick.addEventListener("click", function(){
let randomWithDecimal = Math.random() * 100000;
let randomNumber = Math.floor(randomWithDecimal);
inputTag.value = randomNumber
});

//  Displaying maximum and minimum number from an im=nput value

let maxminInput = document.getElementById("maxmin-number");
let maxminBtn = document.getElementById("maxmin-button");
let output = document.getElementById("DisplayOutput")


maxminBtn.addEventListener("click", function(){
let enteredValue = maxminInput.value;
let arrayofValues = enteredValue.split(" ")
let intArray = new Array()

arrayofValues.forEach(function(values){
   intArray.push(parseInt(values))
})

let MaxValue = Math.max(...intArray);
let MinValue = Math.min(...intArray);

output.innerText = `The Maximum value is:  ${MaxValue} and the Minimum value is : ${MinValue}`

})


// Floor round and ceil operators
let inputValue = 13.43;

console.log(Math.floor(inputValue))
console.log(Math.ceil(inputValue))
console.log(Math.round(inputValue))

//  display the square root of an input value

let sqrtInput = document.getElementById("sqrt-number");
let sqrtBtn = document.getElementById("sqrt-button");
let sqrtoutput = document.getElementById("sqrt-output")

sqrtBtn.addEventListener("click", function(){

    let inputValue = sqrtInput.value;
     
    let sqrtValue = Math.sqrt(inputValue);
    sqrtoutput.value = sqrtValue;

})

//  power of a number 

let numberInput = document.getElementById("number");
let powerInput = document.getElementById("powerof");
let powerOutput = document.getElementById("pow-output")
let powerButton = document.getElementById("pow-button")

powerButton.addEventListener("click", function(){

    let inputValue = numberInput.value;
    let powerValue = powerInput.value;

    let powValue = Math.pow(inputValue,powerValue);
    powerOutput.value = powValue;

})






