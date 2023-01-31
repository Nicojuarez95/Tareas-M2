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








