async function getData(){
    let url = "https://api.imgflip.com/get_memes"
    let gridContainer = document.getElementsByClassName("grid-container")

    try{
        let data = await fetch(url);
        let finalData = await data.json()
        finalData.data.memes.forEach(element => {
            //name url width height
            let divTag = document.createElement('div');
            divTag.className = "grid-item"
            let h3Tag = document.createElement('h3')
            h3Tag.innerText = element.name
            let imgTag = document.createElement('img')
            imgTag.src = element.url;
            divTag.append(h3Tag,imgTag)
            gridContainer[0].appendChild(divTag);
        });
    }
    catch(err){
        console.log(err)
    }
}

getData()
