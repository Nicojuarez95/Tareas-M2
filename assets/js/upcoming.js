import {agregarCartaUp, agregarCategoria, filtrarChecks, filtrarBusqueda, agregarBusquedaUp} from "./module/funciones.js" 
let urlApi="https://mindhub-xj03.onrender.com/api/amazing"

const contChecks = document.getElementById("cont-check")
const checks= document.getElementById("cont-check")
const formulario = document.querySelector("#formulario")
const divContenedor = document.querySelector("#cont-cartas")
            

async function traerDatos(){
    try{
    const response = await fetch(urlApi)
    const datos = await response.json()
        
        const filtrarEventosUpComing = datos.events.filter(event => event.date > datos.currentDate)
        const categoriasEventos= datos.events.map( evento => evento.category)
        const catSinRepetir=[...new Set(categoriasEventos)]  

        agregarCartaUp(filtrarEventosUpComing, divContenedor)
        agregarCategoria(catSinRepetir, contChecks)
        filtrarBusqueda(filtrarEventosUpComing, divContenedor)
        agregarBusquedaUp(filtrarEventosUpComing, divContenedor)  
        formulario.addEventListener("keyup", function(){
            const filtradosPorCheck = filtrarChecks(filtrarEventosUpComing)
            const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
            agregarBusquedaUp(filtradoPorBusqueda, divContenedor)
            })
        checks.addEventListener("change", (e) => {
            const filtradosPorCheck = filtrarChecks(filtrarEventosUpComing)
            const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
            agregarBusquedaUp(filtradoPorBusqueda, divContenedor)
            })
    } 
    catch(error){
        console.log(`El error es`, error)
    }
}
traerDatos()



