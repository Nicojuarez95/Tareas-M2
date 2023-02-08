//filtrar 14 cartas
function cartasHome(eventos){
const divContenedor = document.getElementById("cont-cartas")
divContenedor.innerHTML=""

for (let event of eventos){
    let cartaContenedor = document.createElement("div")
    cartaContenedor.className = "carta"
    rellenarCartas(cartaContenedor,event, divContenedor)
}
}
cartasHome(data.events)

function rellenarCartas(cartaContenedor,event, divContenedor){
    cartaContenedor.innerHTML = `<div>
        <img class="cont-carta-img" src="${event.image}" alt="">
    </div>
    <div class="cont-carta-titulo">
        <h2 class="tit-carta">${event.name}</h2>
        <h6>${event.description}</h6>
    </div>
    <div class="cont-carta-footer">
        <h6 class="price"><b>Price:</b> ${event.price}</h6>
        <a class="link-detail" href="./assets/details.html?name=${event.name}">Details</a>
    </div>`
    divContenedor.appendChild(cartaContenedor)
}








// filtrado por busqueda input text y submit
const formulario = document.querySelector("#formulario")
const boton = document.getElementById("boton")
const divContenedor = document.querySelector("#cont-cartas") 

function filtrar(){
    
    divContenedor.innerHTML= "";
    let texto = formulario.value.toLowerCase();
    for(let event of data.events){
        let name = event.name.toLowerCase()
        if(name.indexOf(texto) !== -1){
            divContenedor.innerHTML += ` <div class="carta">
            <div> <img class="cont-carta-img" src="${event.image}" alt="">
        </div>
        <div class="cont-carta-titulo">
            <h2 class="tit-carta">${event.name}</h2>
            <h6>${event.description}</h6>
        </div>
        <div class="cont-carta-footer">
            <h6 class="price"><b>Price:</b> ${event.price}</h6>
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
formulario.addEventListener("keyup", filtrar)






// filtrado de 7 categorias checks
const contChecks = document.getElementById("cont-check")
let categorias = check()

for (let cate of categorias){
    let categoria = document.createElement("div")
    categoria.className="inputCheck"
    categoria.innerHTML= `<input type="checkbox" value="${cate}" class="input-check">
    <label class="label">${cate}</label>`
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








//filtrado de checks  2 por categorias
const contenedorChecks= document.getElementById("cont-check")

function filtrarCheck(e) {
   
let aux = []

for(let cont of contenedorChecks.children){
    if (cont.firstChild.checked){
    aux.push(cont.firstChild.value)
    } 
} 
    
    let eventosFiltrados = filtrarEventos(aux)
    cartasHome(eventosFiltrados)
}
contenedorChecks.addEventListener("click", filtrarCheck)


function filtrarEventos(categoria){
    let aux = []

    for (let event of data.events){
        if(categoria.includes(event.category))
        aux.push(event)
    }
    return aux
}




