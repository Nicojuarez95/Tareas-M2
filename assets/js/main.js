import {agregarCarta, agregarCategoria, filtrarChecks, filtrarBusqueda, agregarBusqueda} from "./module/funciones.js" 
let urlApi="https://mindhub-xj03.onrender.com/api/amazing"

const contChecks = document.getElementById("cont-check")
const checks= document.getElementById("cont-check")
const formulario = document.querySelector("#formulario")
const divContenedor = document.querySelector("#cont-cartas")


async function traerDatos(){
    try{
    const response = await fetch(urlApi)
    const datos = await response.json()

        const categoriasEventos= datos.events.map( evento => evento.category)
        const catSinRepetir=[...new Set(categoriasEventos)]    

        agregarCarta(datos.events,divContenedor)
        agregarCategoria(catSinRepetir, contChecks)
        filtrarBusqueda(datos.events, divContenedor)
        agregarBusqueda(datos.events, divContenedor) 
        formulario.addEventListener("keyup", function(){
            const filtradosPorCheck = filtrarChecks(datos.events)
            const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
            agregarBusqueda(filtradoPorBusqueda, divContenedor)
            })
        checks.addEventListener("change", (e) => {
            const filtradosPorCheck = filtrarChecks(datos.events)
            const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
            agregarBusqueda(filtradoPorBusqueda, divContenedor)
            })
    } 
    catch(error){
        console.log(`El error es`, error)
    }
}
traerDatos()




