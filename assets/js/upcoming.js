import {agregarCartaUp, agregarCategoria, filtrarChecks, filtrarBusqueda, agregarBusquedaUp} from "./module/funciones.js" 

//filtrar 7 cartas
const contenedorCartas = document.getElementById("cont-cartas")


agregarCartaUp(data.events, contenedorCartas)


// filtrar 7 categorias
const contChecks = document.getElementById("cont-check")
const categoriasEventos= data.events.map( evento => evento.category)
const catSinRepetir = [...new Set(categoriasEventos)]

agregarCategoria(catSinRepetir, contChecks)



// filtrado por busqueda
const formulario = document.querySelector("#formulario")
const boton = document.getElementById("boton")
const divContenedor = document.querySelector("#cont-cartas")
const lista = data.events.filter(event => event.date > data.currentDate)

formulario.addEventListener("keyup", function(){
    const filtradosPorCheck = filtrarChecks(lista)
    const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck,divContenedor)
    agregarBusquedaUp(filtradoPorBusqueda, divContenedor)
})



//filtrado de checks  2 por categorias
const checks= document.getElementById("cont-check")
const filtrarEventosUpComing = data.events.filter(event => event.date > data.currentDate)
    
    checks.addEventListener("change", (e) => {
       const filtradosPorCheck = filtrarChecks(filtrarEventosUpComing)
       const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck,divContenedor)
       agregarBusquedaUp(filtradoPorBusqueda, divContenedor)
    })



