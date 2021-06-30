let tableDiv = document.getElementById("table")

//table 

let table = document.createElement('table');
table.className = "dynamicTable"

async function getCars(){
 
     let url = "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    try{
        let strings = await fetch(url)
        let jsonStrings = await strings.json()

        
        jsonStrings.forEach(function(element,index) {
          
            var row = table.insertRow(index);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
             cell1.innerHTML = element.nome;
             cell2.innerHTML = element.codigo; 
        });
        
        tableDiv.append(table);
        
    }
    catch(err)
    {
        console.log(err)
    }
    

}

getCars()