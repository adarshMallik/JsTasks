// check Number is odd or even

let valueEntered = prompt("Please enter a number");
let inputValue = parseInt(valueEntered);

if (inputValue > 1) {
  if (inputValue % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
} else {
  console.log("Enter value grater than 1");
}

//Entered value is string or not

let valueEntered = prompt("Please enter a number");
let inputValue = parseInt(valueEntered);

if (isNaN(inputValue)) {
  console.log("Input value is a String");
} else {
  console.log("Input Value is a Number");
}

// diplay the age category according to input age value

let valueEntered = prompt("Please enter the age");
let inputValue = parseInt(valueEntered);

if (inputValue < 3) {
  console.log("INFANT");
} else if (inputValue > 3 && inputValue < 12) {
  console.log("CHILD");
} else if (inputValue > 12 && inputValue < 19) {
  console.log("TEEN AGE");
} else if (inputValue > 19 && inputValue < 40) {
  console.log("ADULT");
} else {
  console.log("OLD AGE");
}
