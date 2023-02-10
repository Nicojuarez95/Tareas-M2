import {agregarCarta, agregarCategoria, filtrarChecks, filtrarBusqueda, agregarBusqueda} from "./module/funciones.js" 

//filtrar 14 cartas
const contenedorCartas = document.getElementById("cont-cartas")

agregarCarta(data.events, contenedorCartas)



// filtrar 7 categorias
const contChecks = document.getElementById("cont-check")
const categoriasEventos= data.events.map( evento => evento.category)
const catSinRepetir = [...new Set(categoriasEventos)]

agregarCategoria(catSinRepetir, contChecks)



// filtrado por busqueda
const formulario = document.querySelector("#formulario")
const divContenedor = document.querySelector("#cont-cartas")
const lista = data.events

formulario.addEventListener("keyup", function(){
const filtradosPorCheck = filtrarChecks(data.events)
const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
agregarBusqueda(filtradoPorBusqueda, divContenedor)
})



//filtrado de checks  2 por categorias
const checks= document.getElementById("cont-check")

checks.addEventListener("change", (e) => {
   const filtradosPorCheck = filtrarChecks(data.events)
   const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
   agregarBusqueda(filtradoPorBusqueda, divContenedor)
})






