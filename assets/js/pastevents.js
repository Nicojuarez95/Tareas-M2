import {agregarCartaPast, agregarCategoria, filtrarChecks, filtrarBusqueda, agregarBusquedaPast} from "./module/funciones.js" 

//filtrar 7 cartas
const contenedorCartas = document.getElementById("cont-cartas")

agregarCartaPast(data.events, contenedorCartas)


// filtrar 7 categorias
const contChecks = document.getElementById("cont-check")
const categoriasEventos= data.events.map( evento => evento.category)
const catSinRepetir = [...new Set(categoriasEventos)]

agregarCategoria(catSinRepetir, contChecks)



// filtrado por busqueda
const formulario = document.querySelector("#formulario")
const boton = document.getElementById("boton")
const divContenedor = document.querySelector("#cont-cartas")
const lista = data.events.filter(event => event.date < data.currentDate)

formulario.addEventListener("keyup", function(){
    const filtradosPorCheck = filtrarChecks(lista)
    const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
    agregarBusquedaPast(filtradoPorBusqueda,divContenedor) 
})



//filtrado de checks  2 por categorias
const checks= document.getElementById("cont-check")
const filtrarEventosPast = data.events.filter(event => event.date < data.currentDate)
    
    checks.addEventListener("change", (e) => {
       const filtradosPorCheck = filtrarChecks(filtrarEventosPast)
       const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
       agregarBusquedaPast(filtradoPorBusqueda,divContenedor)
    })
