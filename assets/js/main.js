function cartasHome(){
const divContenedor = document.getElementById("cont-cartas")
let cartasInfo = data.events

for (let cartaInfo of cartasInfo){
    let cartaContenedor = document.createElement("div")
    cartaContenedor.className = "carta"
    cartaContenedor.innerHTML = `<div>
        <img class="cont-carta-img" src="${cartaInfo.image}" alt="">
    </div>
    <div class="cont-carta-titulo">
        <h2 class="tit-carta">${cartaInfo.name}</h2>
        <h6>${cartaInfo.description}</h6>
    </div>
    <div class="cont-carta-footer">
        <h6 class="price"><b>Price:</b> ${cartaInfo.price}</h6>
        <a class="link-detail" href="./assets/details.html">Details</a>
    </div>`
    divContenedor.appendChild(cartaContenedor)
    }
}
cartasHome()


const contChecks = document.getElementById("cont-check")
let categorias = check()


for (let cate of categorias){
    let categoria = document.createElement("div")
    categoria.innerHTML= `<input type="checkbox">
    <label>${cate}</label>`
    contChecks.appendChild(categoria)
}


function check(){
 let array= []

    for (let event of data.events){
        if (array.indexOf(event.category) === -1)
        array.push(event.category)
    }

return(array)
}





