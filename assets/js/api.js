let urlApi="https://mindhub-xj03.onrender.com/api/amazing"
import {agregarCarta, agregarCategoria, filtrarChecks, filtrarBusqueda, agregarBusqueda,agregarCartaUp,rellenarCartaUp,agregarCartaPast} from "./module/funciones.js" 
const divContenedor=document.getElementById("cont-cartas")
const contChecks = document.getElementById("cont-check")
const formulario = document.querySelector("#formulario")
const checks= document.getElementById("cont-check")


async function traerDatos(){
    try{
    const response = await fetch(urlApi)
    const datos = await response.json()
    //home
        agregarCarta(datos.events,divContenedor)
        const categoriasEventos= datos.events.map( evento => evento.category)
        const catSinRepetir=[...new Set(categoriasEventos)]
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

        //upcoming
        
        

    } 
    catch(error){
        console.log(`El error es`, error)
    }
}
traerDatos()


 
    // fetch(urlApi)
    // .then(response => response.json())
    // .then(datos=>{
    //     //home
    //     agregarCarta(datos.events, divContenedor)

    //     const categoriasEventos= datos.events.map( evento => evento.category)
    //     const catSinRepetir=[...new Set(categoriasEventos)]
    //     agregarCategoria(catSinRepetir, contChecks)
        

    //     filtrarBusqueda(datos.events, divContenedor)
    //     agregarBusqueda(datos.events, divContenedor)
    //     formulario.addEventListener("keyup", function(){
    //         const filtradosPorCheck = filtrarChecks(datos.events)
    //         const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
    //         agregarBusqueda(filtradoPorBusqueda, divContenedor)
    //         })
    //     checks.addEventListener("change", (e) => {
    //         const filtradosPorCheck = filtrarChecks(datos.events)
    //         const filtradoPorBusqueda = filtrarBusqueda(filtradosPorCheck, divContenedor)
    //         agregarBusqueda(filtradoPorBusqueda, divContenedor)
    //         })
        
       

    //     //upcoming
    //     const filtrarEventosUpComing = datos.events.filter(event => event.date > datos.currentDate)
    //     console.log(filtrarEventosUpComing)
        
        

    //     //past
    //     const filtrarEventosPast = datos.events.filter(event => event.date < datos.currentDate)
    //     console.log(filtrarEventosPast)
        
    // })
    // .catch(error =>{
    //     console.log(`El error es`, error)
    // })   



