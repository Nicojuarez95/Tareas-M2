//filtrar cartas
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


// filtrado de categorias checks
const contChecks = document.getElementById("cont-check")
let categorias = check()

for (let cate of categorias){
    let categoria = document.createElement("div")
    categoria.className="inputCheck"
    categoria.innerHTML= `<input type="checkbox" id="input-check">
    <label id="label">${cate}</label>`
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

//filtrado de checks
const checkbox=document.getElementById("input-check")
const label=document.getElementById("label")

const filtrarCheck = () => {
    
for (even of data.events){
    if ((checkbox.checked) && (even.category === label.innerHTML)){
        divContenedor.innerHTML = ` <div class="carta">
        <div> <img class="cont-carta-img" src="${even.image}" alt="">
    </div>
    <div class="cont-carta-titulo">
        <h2 class="tit-carta">${even.name}</h2>
        <h6>${even.description}</h6>
    </div>
    <div class="cont-carta-footer">
        <h6 class="price"><b>Price:</b> ${even.price}</h6>
        <a class="link-detail" href="./assets/details.html">Details</a>
    </div> 
    </div>` 
    divContenedor.appendChild(carta)
    }
}
}
checkbox.addEventListener("click", filtrarCheck)


// filtrado por busqueda
const formulario = document.getElementById("formulario")
const boton = document.getElementById("boton")
const cartas = data.events
const divContenedor = document.getElementById("cont-cartas") 

const filtrar = () => {

    
    divContenedor.innerHTML= ""
    const texto = formulario.value.toLowerCase()

    for(let carta of cartas){
        let name = carta.name.toLowerCase()
        if(name.indexOf(texto) !== -1){
            divContenedor.innerHTML = ` <div class="carta">
            <div> <img class="cont-carta-img" src="${carta.image}" alt="">
        </div>
        <div class="cont-carta-titulo">
            <h2 class="tit-carta">${carta.name}</h2>
            <h6>${carta.description}</h6>
        </div>
        <div class="cont-carta-footer">
            <h6 class="price"><b>Price:</b> ${carta.price}</h6>
            <a class="link-detail" href="./assets/details.html">Details</a>
        </div> 
        </div>`
        }
    }
    if (divContenedor.innerHTML=== "") {
        divContenedor.innerHTML += `
        <li> Result not found...</li>`
    }
    
}

boton.addEventListener("click", filtrar)



//alert boton submit- contact
const btnsub = document.getElementById("submit")

function enviarDatos() {
    alert("Information received");
  }
btnsub.addEventListener("click", enviarDatos);
