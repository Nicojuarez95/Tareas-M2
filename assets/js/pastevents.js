//filtrar cartas
function crearCartasPast(){
    const divContCartas = document.getElementById("cont-cartas")

    for(let event of data.events){
        if (data.currentDate > event.date) {
            let carta = document.createElement("div")
            carta.className= "carta"
            rellenarCartas(carta,event,divContCartas)
            }
        }
    }
crearCartasPast()

function rellenarCartas(carta,event,divContCartas){
    carta.innerHTML = `<div>
            <img class="cont-carta-img" src="${event.image}" alt="">
            </div>
            <div class="cont-carta-titulo">
                <h2 class="tit-carta">${event.name}</h2>
                <h6>${event.description}</h6>
            </div>
            <div class="cont-carta-footer">
                <h6 class="price"><b>Price:</b> ${event.price}</h6>
                <a class="link-detail" href="./details.html">Details</a>
            </div>`
            divContCartas.appendChild(carta)
}


//filtrar checks
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


// filtrado por busqueda
const formulario = document.getElementById("formulario")
const boton = document.getElementById("boton")
const divContenedor = document.getElementById("cont-cartas") 

const filtrar = () => {
    divContenedor.innerHTML= ""
    const texto = formulario.value.toLowerCase()

    for(let carta of data.events){
        let name = carta.name.toLowerCase()
        if(name.indexOf(texto) !== -1 && data.currentDate > carta.date){
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
