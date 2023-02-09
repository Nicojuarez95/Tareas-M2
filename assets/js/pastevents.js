//filtrar 14 cartas
const contenedorCartas = document.getElementById("cont-cartas")

function agregarCarta(lista, elemento){
    elemento.innerHTML=""
    let template = ""              //reflow
    for(let event of lista){
        if (data.currentDate > event.date)
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
agregarCarta(data.events, contenedorCartas)




// filtrar 7 categorias
const contChecks = document.getElementById("cont-check")
const categoriasEventos= data.events.map( evento => evento.category)
const catSinRepetir = [...new Set(categoriasEventos)]

function agregarCategoria(lista, elemento){
    let fragment = document.createDocumentFragment()
    lista.forEach(cate => fragment.appendChild(crearCategorias(cate) ) )
    elemento.appendChild(fragment)     
    }
function crearCategorias(cate){
    let categoria = document.createElement(`div`)
    categoria.innerHTML = `<input value="${cate}" type="checkbox">
    <label>${cate}</label>`
    
    return categoria
}
agregarCategoria(catSinRepetir, contChecks)




// filtrado por busqueda
const formulario = document.querySelector("#formulario")
const boton = document.getElementById("boton")
const divContenedor = document.querySelector("#cont-cartas")
const lista = data.events.filter(event => event.date < data.currentDate)

function filtrarBusqueda(lista){
    divContenedor.innerHTML= "";
    let texto = formulario.value.toLowerCase();
    let eventos = []
    for(let event of lista){
        let name = event.name.toLowerCase()
        if(name.includes(texto) && data.currentDate > event.date){
            eventos.push(event)
        }
    } 
    return eventos
}
function agregarBusqueda(lista){
    if (lista.length == 0){
        divContenedor.innerHTML += `
        <li> Result not found...</li>`
    }else {
        agregarCarta(lista, divContenedor)
    }   
}

formulario.addEventListener("keyup", function(){
    const filtradosPorCheck = filtrarChecks(data.events)
    const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck)
    agregarBusqueda(filtradoPorBusqueda) 
})




//filtrado de checks  2 por categorias
const checks= document.getElementById("cont-check")
const filtrarEventosPast = data.events.filter(event => event.date < data.currentDate)

function filtrarChecks(lista){
    const checkbox= document.querySelectorAll("input[type=checkbox]:checked")//recuperar todos los checkbox checked
    const arrayCheckbox = [...checkbox]//fijarme cual esta checked y meterlo en un array
    constValueChecks= arrayCheckbox.map(e => e.value)//quedarme con el value de los que estan checked
    if(constValueChecks.length == 0){
        return lista
    } else {
        return lista.filter((event) => {
            return constValueChecks.includes(event.category)
        })//filtrar lista y devolverla
    }
    }
    
    
    checks.addEventListener("change", (e) => {
       const filtradosPorCheck = filtrarChecks(filtrarEventosPast)
       const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck)
       agregarBusqueda(filtradoPorBusqueda)
    })
