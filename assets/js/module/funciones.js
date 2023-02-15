export function agregarCarta(lista, elemento){
    elemento.innerHTML=""
    let template=""
    for(let event of lista){
       template += rellenarCarta(event)
    }
    elemento.innerHTML += template
}
export function rellenarCarta(event){
    return `<div class="carta"> <div>
    <img class="cont-carta-img" src="${event.image}" alt="">
    </div>
    <div class="cont-carta-titulo">
        <h2 class="tit-carta">${event.name}</h2>
        <h6>${event.description}</h6>
    </div>
    <div class="cont-carta-footer">
        <h6 class="price"><b>Price:</b> ${event.price}</h6>
        <a class="link-detail" href="./assets/details.html?name=${event.name}">Details</a>
    </div> </div>`
}
export function agregarCategoria(lista, elemento){
    lista.forEach(cate => elemento.appendChild(crearCategorias(cate) ) )
    }
export function crearCategorias(cate){
    let categoria = document.createElement(`div`)
    categoria.className="contenedor-checkbox"
    categoria.innerHTML = `<input value="${cate}" id="checkbox" type="checkbox">
    <label>${cate}</label>`

    return categoria
}
export function filtrarBusqueda(lista, contenedor){
    contenedor.innerHTML= "";
    let texto = formulario.value.toLowerCase();
    let eventos = []
    for(let event of lista){
        let name = event.name.toLowerCase()
        if(name.includes(texto)){
            eventos.push(event)
        }
    } 
    return eventos
}
export function agregarBusqueda(lista, contenedor){
    if (lista.length == 0){
        contenedor.innerHTML += `
        <li> Result not found...</li>`
    }else {
        agregarCarta(lista,contenedor)
    }   
}
export function agregarBusquedaUp(lista, contenedor){
    if (lista.length == 0){
        contenedor.innerHTML += `
        <li> Result not found...</li>`
    }else {
        agregarCartaUp(lista,contenedor)
    }   
}
export function agregarBusquedaPast(lista, contenedor){
    if (lista.length == 0){
        contenedor.innerHTML += `
        <li> Result not found...</li>`
    }else {
        agregarCartaPast(lista,contenedor)
    }   
}
export function filtrarChecks(lista){
    const checkbox= document.querySelectorAll("input[type=checkbox]:checked")
    const arrayCheckbox = [...checkbox]
    const valueChecks= arrayCheckbox.map(e => e.value)
    if(valueChecks.length == 0){
        return lista
    } else {
        return lista.filter((event) => {
            return valueChecks.includes(event.category)
        })
    }
}
export function agregarCartaUp(lista, elemento){
    elemento.innerHTML=""
    let template = ""              //reflow
    for(let event of lista){
        template += rellenarCartaUp(event)
    }
    elemento.innerHTML += template //reflow
}
export function agregarCartaPast(lista, elemento){
    elemento.innerHTML=""
    let template = ""              //reflow
    for(let event of lista){
        template += rellenarCartaPast(event)
    }
    elemento.innerHTML += template //reflow
}
export function rellenarCartaUp(event){
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
export function rellenarCartaPast(event){
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
export function crearDetail(event, contenedor){
    contenedor.innerHTML = `<div class="detail1">
    <img src="${event.image}">                
    </div>
    <div class="detail2">
        <h2 class="detail-titulo-carta" >${event.name}</h2>
        <h5><b>Date:</b> ${event.date}</h5>
        <h5><b>Description:</b> ${event.description}</h5>
        <h5><b>Category:</b> ${event.category}</h5>
        <h5><b>Place:</b> ${event.place}</h5>
        <h5><b>Capacity:</b> ${event.capacity}</h5>
        <h5><b>${event.assistance !== undefined ? "Assistance: " : "Estimate: "}</b>${event.assistance !== undefined ? event.assistance : event.estimate}</h5>
        <h5><b>Price:</b> ${event.price}</h5>
    </div>`
}

//tabla
export function crearTabla1(mayorPorcentajeDeAsistencia,menosPorcentajeDeAsistencia,masCapacidad){
    return `<table>
    <thead>
    <tr>
    <th scope="col" colspan="3" class="title-table1">Event statistics</th>
    </tr>
    <tr>
    <th>Event with the highest persentage of attendance</th>
    <th>Event with the lowest percentage of attendance</th>
    <th>Event with larger capacity</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <th>${mayorPorcentajeDeAsistencia.name} ${(mayorPorcentajeDeAsistencia.assistance / mayorPorcentajeDeAsistencia.capacity * 100).toFixed(2)}%</th>
    <th>${menosPorcentajeDeAsistencia.name} ${(menosPorcentajeDeAsistencia.assistance / menosPorcentajeDeAsistencia.capacity * 100).toFixed(2)}%</th>
    <th>${masCapacidad.name} ${masCapacidad.capacity}</th>
    </tr>
    </tbody>
    </table>
    `
}
export function ingresos(lista, listaSinRepetir){
    let ingresos=[]
    for(let i = 0; i < listaSinRepetir.length; i++){
        let ganancia = 0
        for(let list of lista){
            if (list.category === listaSinRepetir[i]){
                if (list.estimate !== undefined){
                    ganancia += list.price * list.estimate
                }else{
                    ganancia += list.price * list.assistance
                }
            }
        }
        ingresos.push(ganancia)
    }
    return ingresos
}
export function porcentajeDeAsistUp(lista, listaSinRepetir){
    let arrayPorcentaje=[]
    for(let i = 0; i < listaSinRepetir.length; i++){
        let estimado = 0
        let capacidad = 0
        for(let list of lista){
            if (list.category === listaSinRepetir[i]){
               estimado += list.estimate
               capacidad += list.capacity
            }
        }
        arrayPorcentaje.push(estimado / capacidad * 100 )
    }
    return arrayPorcentaje 
}
export function porcentajeDeAsistPasado(lista, listaSinRepetir){
    let arrayPorcentaje=[]
    for(let i = 0; i < listaSinRepetir.length; i++){
        let asistencia = 0
        let capacidad = 0
        for(let list of lista){
            if (list.category === listaSinRepetir[i]){
                capacidad += (list.capacity)
                asistencia += (list.assistance)
            }
        }
        arrayPorcentaje.push(asistencia / capacidad * 100)
    }
    return arrayPorcentaje 
}

export function crearTablaEstadisticaUp(listaSinRepetir, ingresos, porcentajeDeAsistencia){
    let estadistica = estadisticas(listaSinRepetir, ingresos, porcentajeDeAsistencia)
    
    return `
    <table>
    <thead>
    <tr>
    <th scope="col" colspan="3" class="title-table1">Upcoming events statistics by category</th>
    </tr>
    <tr>
    <th>Categories</th>
    <th>Revenues</th>
    <th>Persentage of attendance</th>
    </tr>
    </thead>
    <tbody>
    ${estadistica}
    </tbody
    </table>
    `
}
export function crearTablaEstadisticaPast(listaSinRepetir, ingresos, porcentajeDeAsistencia){
    let estadistica = estadisticas(listaSinRepetir, ingresos, porcentajeDeAsistencia)

    return `
    <table>
    <thead>
    <tr>
    <th scope="col" colspan="3" class="title-table1">Past events statistics by category</th>
    </tr>
    <tr>
    <th>Categories</th>
    <th>Revenues</th>
    <th>Persentage of attendance</th>
    </tr>
    </thead>
    <tbody>
    ${estadistica}
    </tbody
    </table>
    `
}
export function estadisticas(listaSinRepetir, ingresos, porcentajeDeAsistencia){
    let estadisticas = ""
    for(let i = 0; i<listaSinRepetir.length; i++){
        estadisticas += `
        <tr>
        <td>${listaSinRepetir[i]}</td>
        <td>$${ingresos[i]}</td>
        <td>${porcentajeDeAsistencia[i].toFixed(2)}%</td>
        </tr>
        `
    }
    return estadisticas
}
// export function imprimirCategorias(array){
//     let aux = []
//     for (let i = 0; i < array.length; i++) {
//         aux.push(array[i]);
//     }
//     return aux
// }