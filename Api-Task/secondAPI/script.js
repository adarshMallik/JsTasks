 let mainDiv = document.getElementsByClassName("image-div")
 let imgTag = document.createElement("img");
 imgTag.alt = "https://c.ndtvimg.com/2019-06/s71ihu9_biryani_625x300_05_June_19.jpg"
let biriyaniBtn = document.getElementById("btn-quotes")
// biriyaniBtn.addEventListener("click",function(){
//     let url = "https://biriyani.anoram.com/get"
//     let fetchData = fetch(url);
//     fetchData.then(function(data){
//     data.json().then(function (finalData){         
//         imgTag.src = finalData.image
//         mainDiv[0].append(imgTag)
//     })
    
//     }).catch(function(err){
//         console.log(err)
//     })
// })

function getBiriyani(){
    let url = "https://biriyani.anoram.com/get"
    let fetchData = fetch(url);
    fetchData.then(function(data){
    data.json().then(function (finalData){         
        imgTag.src = finalData.image
        mainDiv[0].append(imgTag)
    })
    
    }).catch(function(err){
        console.log(err)
    })

}


biriyaniBtn.onclick = getBiriyani


