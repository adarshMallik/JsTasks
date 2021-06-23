// Hoisting

// console.log(variable)
// var variable;

// hoist();
// function hoist(){
//     a=20;
//     console.log(b)
//     var b=100;
//     console.log(b)
// }

// console.log(typeof a);
// // console.log(b)  // Reference error

// hoist()

// // variable assignement  has first preference then function with the same name where as variable decleration like 
// // var double;  has less preference than function with the same name
// var double = 22;

// function double(num){
//     return num*2
// }

// console.log(typeof double)



// carousel

// let arrayOfImages = ['images/cupra5.jpg','images/cupra1.jpg','images/cupra2.jpg','images/cupra4.jpg','images/cupra6.jpg','images/cupra3.jpg']

// let images = document.getElementById('images');

// let i = 0
// setInterval(function(){
//     if(i<arrayOfImages.length)
//     {
//          images.src = arrayOfImages[i]
//          i++;
//     }
//     else{
//         i=0;
//     }
// },2000)


// carousel 

var counter = 1;

setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++
    if(counter > 4){
        counter = 1
    }
},5000 );

