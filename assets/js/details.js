import {crearDetail} from "./module/funciones.js"
let urlApi="https://mindhub-xj03.onrender.com/api/amazing"


const detalles = location.search 
const parametro = new URLSearchParams(detalles) 
const nombre = parametro.get("name")


async function traerDatos(){
    try{
    const response = await fetch(urlApi)
    const datos = await response.json()
    
    const contDetalles=document.getElementById("cont-det")
    const evento = datos.events.find(evento => evento.name == nombre)
    crearDetail(evento,contDetalles)

    }
    catch(error){
        console.log(`El error es`, error)
    }
}
traerDatos()



