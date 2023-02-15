import {crearTabla1, ingresos, porcentajeDeAsistUp, porcentajeDeAsistPasado, crearTablaEstadistica} from "./module/funciones.js"
let urlApi="https://mindhub-xj03.onrender.com/api/amazing"

const contTabla= document.querySelector(".tabla")

async function traerDatos(){
    try{
    const response = await fetch(urlApi)
    const datos = await response.json()

    const eventosPasados=datos.events.filter(event => event.date < datos.currentDate)
    const eventosAvenir=datos.events.filter(event => event.date > datos.currentDate)
    
    const masCapacidad = eventosPasados.reduce((a,b)=> a.capacity > b.capacity ? a : b)
    const menosPorcentajeDeAsistencia = eventosPasados.reduce((a,b) => (a.assistance / a.capacity * 100) < (b.assistance / b.capacity * 100) ? a : b)
    const mayorPorcentajeDeAsistencia = eventosPasados.reduce((a,b) => (a.assistance / a.capacity * 100) > (b.assistance / b.capacity * 100) ? a : b)
    console.log(datos)

    //upcoming
    const categoriasUp = eventosAvenir.map(event => event.category)
    const categoriaUnicaUp = [...new Set(categoriasUp)]
    const ingresosUp = ingresos(eventosAvenir, categoriaUnicaUp)
    const porcentajeDeAsistenciaUp = porcentajeDeAsistUp(eventosAvenir, categoriaUnicaUp)
    
    //past
    const categoriasPast = eventosPasados.map(event => event.category)
    const categoriaUnicaPast = [...new Set(categoriasPast)]
    const ingresosPast = ingresos(eventosPasados, categoriaUnicaPast)
    const porcentajeDeAsistenciaPast = porcentajeDeAsistPasado(eventosPasados, categoriaUnicaPast)
    
    let tabla1 = crearTabla1(mayorPorcentajeDeAsistencia,menosPorcentajeDeAsistencia,masCapacidad)
    let tabla2 = crearTablaEstadistica(categoriaUnicaUp, ingresosUp, porcentajeDeAsistenciaUp)
    let tabla3 = crearTablaEstadistica(categoriaUnicaPast, ingresosPast, porcentajeDeAsistenciaPast)   

    let tabla= tabla1 + tabla2 + tabla3
    contTabla.innerHTML=tabla
    } 
    catch(error){
        console.log(`El error es`, error)
    }
}
traerDatos()

