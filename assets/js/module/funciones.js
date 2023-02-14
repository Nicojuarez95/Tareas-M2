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


