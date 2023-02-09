const contenedorCartas = document.getElementById("cont-cartas")

const formulario = document.querySelector("#formulario")
const boton = document.getElementById("boton")
const divContenedor = document.querySelector("#cont-cartas")

const contChecks = document.getElementById("cont-check")

const categoriasEventos= data.events.map( evento => evento.category)
const catSinRepetir = [...new Set(categoriasEventos)]



agregarCarta(data.events, contenedorCartas)
agregarCategoria(catSinRepetir, contChecks)



//funciones

//filtrar 14 cartas
function agregarCarta(lista, elemento){
    elemento.innerHTML=""
    let template=""
    for(let event of lista){
       template += rellenarCarta(event)
    }
    elemento.innerHTML += template
}
function rellenarCarta(event){
    return `<div class="carta"> <div>
    <img class="cont-carta-img" src="${event.image}" alt="">
    </div>
    <div class="cont-carta-titulo">
        <h2 class="tit-carta">${event.name}</h2>
        <h6>${event.description}</h6>
    </div>
    <div class="cont-carta-footer">
        <h6 class="price"><b>Price:</b> ${event.price}</h6>
        <a class="link-detail" href="./assets/details.html?name=${event.name}">Details</a>
    </div> </div>`
}

// filtrar 7 categorias
function agregarCategoria(lista, elemento){
    let fragment = document.createDocumentFragment()
    lista.forEach(cate => fragment.appendChild(crearCategorias(cate) ) )
    elemento.appendChild(fragment)
    }
function crearCategorias(cate){
    let categoria = document.createElement(`div`)
    categoria.value = cate
    categoria.innerHTML = `<input value="${cate}" type="checkbox">
    <label>${cate}</label>`

    return categoria
}


// filtrado por busqueda
function filtrarBusqueda(){

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
            <a class="link-detail" href="./assets/details.html?name=${event.name}">Details</a>
        </div>
        </div>`
        }
    }
    if (divContenedor.innerHTML=== "") {
        divContenedor.innerHTML += `
        <li> Result not found...</li>`
    }
}
formulario.addEventListener("keyup", filtrarBusqueda)
// boton.addEventListener("click", filtrar)




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
    agregarCarta(eventosFiltrados, contenedorCartas)

let aux2 = Boolean(...aux)
console.log(aux2)
    if (!aux2){
        agregarCarta(data.events, contenedorCartas)
    }

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





