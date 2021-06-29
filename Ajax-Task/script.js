//  Ajax call using HTTP Request

let homebtn = document.getElementById('home')

let result = document.getElementById("result")


homebtn.addEventListener('click', homepageContent());

function homepageContent()
{
let xhr = new XMLHttpRequest();
console.log(xhr)
console.log(xhr.readyState)
xhr.onload = function(){
    console.log(xhr.readyState)
    dynamicTable(JSON.parse(xhr.responseText));
}
xhr.open('Get', "https://fakestoreapi.com/products", true)
console.log(xhr.readyState)
xhr.send()
}

let dynamicTable = (materials) => {  
    let dynTable = `<table>
<thead>
<tr>
<th>Id</th>
<th>Title</th>
<th>Price</th>
<th>Description</th>
<th>Category</th>
<th>Image</th>
</tr>
</thead>
<tbody>
`

for(let i=0;i<materials.length;i++)
{
    dynTable += `<tr><td>${materials[i].id}</td>
    <td>${materials[i].title}</td>
    <td>${materials[i].price}</td>
    <td>${materials[i].description}</td>
    <td>${materials[i].category}</td>
    <td><img src="${materials[i].image}" height="100" width="100"/></td>
    </tr>`
}
dynTable += `</tbody></table>`
result.innerHTML = dynTable;
}


// Contact 

let contactbtn = document.getElementById('contact-btn')
let contact = document.getElementById("contact")

contactbtn.onclick = contactGet();

function contactGet()
{
    let contactXHR = new XMLHttpRequest();
    contactXHR.onload = function(){

        let contactList = JSON.parse(contactXHR.responseText);
        for(let i=0;i<contactList.length;i++)
        {
            let divElement = document.createElement("div");
            divElement.className = "contact-list"
            let h2tag = document.createElement("h2")
            h2tag.innerText = `Name: ${contactList[i].name.firstname} ${contactList[i].name.lastname}`
            let h5tag = document.createElement("h5")
            h5tag.innerText =`Email: ${contactList[i].email}
                              Phone: ${contactList[i].phone}`
            let ptag = document.createElement('p');
            ptag.innerText = `Latitude: ${contactList[i].address.geolocation.lat}
                              Longitude: ${contactList[i].address.geolocation.long}
                              city:${contactList[i].address.city}
                              street: ${contactList[i].address.street}`


            divElement.append(h2tag,h5tag,ptag)
            contact.append(divElement)
             
        }
    }
    contactXHR.open('Get',"https://fakestoreapi.com/users", true)
    contactXHR.send();
}


// pricing 
let pricingbtn = document.getElementById("pricing-btn");
let pricing = document.getElementById("pricing")

pricingbtn.onclick = pricingGet()

function pricingGet()
{

    let pricingXHR = new XMLHttpRequest()

    pricingXHR.onload = function(){

        let pricingList = JSON.parse(pricingXHR.responseText);

        for(let i =0; i<pricingList.length;i++){
        let divElement = document.createElement("div");
        divElement.className = "contact-list"
        let h2tag = document.createElement("h2")
        h2tag.innerText= pricingList[i].date;
        let orderdlist = document.createElement('ol')

        pricingList[i].products.forEach(function (element) {
            console.log(element.productId)
            let liTag = document.createElement('li');
             liTag.innerText = `ProductId: ${element.productId} Quantity: ${element.quantity}`
            orderdlist.append(liTag);
        });
        divElement.append(h2tag,orderdlist)
        pricing.append(divElement)

        }      

    }

    pricingXHR.open("Get", "https://fakestoreapi.com/carts", true)
    pricingXHR.send()


}

// about 

let aboutbtn = document.getElementById("about-btn");
let about =document.getElementById("about");

aboutbtn.addEventListener("click", aboutGet());

function aboutGet(){
    
    let aboutXHR = new XMLHttpRequest()

    aboutXHR.onload = function(){
        about.innerHTML = aboutXHR.responseText;
    }

    aboutXHR.open("Get", "./gridPage.html",true);
    aboutXHR.send();
}








