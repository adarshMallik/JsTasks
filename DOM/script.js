// getElementById() id is unique
// getElementsByClassName()
// getElementByName()
// getElementByTagname()
//querySelector('#title')
//querySelectorAll()


//DomManipulation


//getElementById

let result = document.getElementById('list1');

console.log(result.innerHTML) // reult returns as first element with Id List


// get element By tag name
let listValue = document.getElementsByTagName('UL')[0];

listValue.getElementsByTagName('LI')[0].innerHTML = "Four"

console.log(listValue)


// this tagname gets the second UL tag 
let emptyList = document.getElementsByTagName("UL")[1];

emptyList.innerHTML = '<li>Added Value</li>';

console.log(emptyList)

// get element by class Name class name is considered as an array to access the element we have to use className[0] or classname[1]

let classValue = document.getElementsByClassName('emptyDiv');
classValue[0].innerHTML = '<h1>Added Heading</h1>'
classValue[1].innerHTML = listValue.innerHTML,
    console.log(classValue[0].innerHTML)


// GetElement by name 
// 
let valueByName = document.getElementsByName('nameList')
console.log(valueByName[0]);

valueByName[0].innerHTML = "Changed Name"

// queryselector

let queryValue = document.querySelector("p.samePara")
queryValue.innerHTML = "paragraph is changed using DOM"

// queryselectALL

let allQuery = document.querySelectorAll(".samePara")

// values of having class=samePara is stored in an array
// to check length of an that array
console.log(allQuery.length)

// to change the background color of all the values
for (let i = 0; i < allQuery.length; i++) {
    allQuery[i].style.backgroundColor = "yellow";
}