                                                          //Array Methods

// 1) indexOf and includes

let arr = new Array(10, 20, 30, 40, 50);

console.log("Index of array: " + arr.indexOf(10)); // index 0
console.log("Index of array: " + arr.indexOf(50)); // index 4
console.log("Index of array: " + arr.indexOf(70)); // index -1 as the element is not present

console.log(arr.includes(30)); // true
console.log(arr.includes(80)); // false

// 2) Push and Pop

let arr1 = new Array(); 

arr1.push(10);
arr1.push(15);
arr1.push(20);
arr1.push(25);
arr1.push(30);

console.log(arr1)  // [10,15,20,25,30]

console.log(arr1.pop())  // 30
// after Pop
console.log(arr1)  // [10,15,20,25]

arr1.pop()
console.log(arr1)  // [10,15,20]

//3) shift and unshift

let arr2 = new Array();

arr2.unshift(10);
arr2.unshift(15);
arr2.unshift(20);
arr2.unshift(25);
arr2.unshift(30);

console.log(arr2)  // [30,25,20,15,10]

arr2.shift()  //[25,20,15,10]
arr2.shift()  //[20,15,10]

console.log(arr2)

// 4) length and sort

let arr3 = [15, 10, 30, 25, 40, 5, 45];

Array.prototype.getlength= (arr) => {
return arr.length
}

console.log(arr3.getlength(arr3));

Array.prototype.sortArray = (arr) => {
   return arr.sort()
}

console.log(arr3.sortArray(arr3))

// 5) Fill concat and join

let firstArray = [10,20,30]
let lastArray = [40,50,60]

let newArray = firstArray.concat(lastArray)

console.log(newArray)

let arrString = newArray.join("+");
console.log(typeof arrString)    // string
console.log(arrString);          // "10+20+30+40+50+60"

let arr4 = Array(6);

arr4.fill("value-1",0,3)
arr4.fill("value-2",3,6)

console.log(arr4)  //["value-1", "value-1", "value-1", "value-2", "value-2", "value-2"]

// 6) slice and splice

let arr5 = ["apple", "banana", "grapes", "orange", "lemon"];

let citrusFruit = arr5.slice(3, 5);
console.log(citrusFruit); //[orange,lemon]

// delete grapes in arr5

arr5.splice(2, 1); // grapes in index 2 and only one element to delete so count 1
console.log(arr5);

// add two more fruits at index 3

arr5.splice(3, 0, "fig", "chiku");
console.log(arr5);

// delete last two elements from array

arr5.splice(4, 2);
console.log(arr5);
