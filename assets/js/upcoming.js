const contenedorCartas = document.getElementById("cont-cartas")

const formulario = document.getElementById("formulario")
const boton = document.getElementById("boton")
const divContenedor = document.getElementById("cont-cartas") 

const contChecks = document.getElementById("cont-check")

const categoriasEventos= data.events.map( evento => evento.category)
const catSinRepetir = [...new Set(categoriasEventos)]



agregarCarta(data.events, contenedorCartas)
agregarCategoria(catSinRepetir, contChecks)



//funciones

//filtrar 14 cartas
function agregarCarta(lista, elemento){
    elemento.innerHTML=""
    let template = ""              //reflow
    for(let event of lista){
        if (data.currentDate < event.date)
        template += rellenarCarta(event)
    }
    elemento.innerHTML += template //reflow
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
        <a class="link-detail" href="./details.html?name=${event.name}">Details</a>
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
    categoria.innerHTML = `<input type="checkbox">
    <label>${cate}</label>`
    
    return categoria
}


// filtrado por busqueda
function filtrarBusqueda(){
    divContenedor.innerHTML= ""
    const texto = formulario.value.toLowerCase()

    for(let carta of data.events){
        let name = carta.name.toLowerCase()
        if(name.indexOf(texto) !== -1 && data.currentDate < carta.date){
            divContenedor.innerHTML += ` <div class="carta">
            <div> <img class="cont-carta-img" src="${carta.image}" alt="">
        </div>
        <div class="cont-carta-titulo">
            <h2 class="tit-carta">${carta.name}</h2>
            <h6>${carta.description}</h6>
        </div>
        <div class="cont-carta-footer">
            <h6 class="price"><b>Price:</b> ${carta.price}</h6>
            <a class="link-detail" href="./details.html?name=${carta.name}">Details</a>
        </div> 
        </div>`
        }
    }
    if (divContenedor.innerHTML=== "") {
        divContenedor.innerHTML += `
        <li> Result not found...</li>`
    }
    
}
boton.addEventListener("click", filtrarBusqueda)
formulario.addEventListener("keyup", filtrarBusqueda)




//filtrado de checks  2 por categorias
const contenedorChecks= document.getElementById("cont-check")
const filtrarEventosUpComing = data.events.filter(event => event.date > data.currentDate)

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

    for (let event of filtrarEventosUpComing){
        if(categoria.includes(event.category))
        aux.push(event)
    }
    return aux
}



