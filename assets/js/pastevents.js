function crearCartasPast(){
    const divContCartas = document.getElementById("cont-cartas")

    for(let event of data.events){
        if (data.currentDate > event.date) {
            let carta = document.createElement("div")
            carta.className= "carta"
            rellenarCartas(carta,event,divContCartas)
            }
        }
    }
crearCartasPast()

function rellenarCartas(carta,event,divContCartas){
    carta.innerHTML = `<div>
            <img class="cont-carta-img" src="${event.image}" alt="">
            </div>
            <div class="cont-carta-titulo">
                <h2 class="tit-carta">${event.name}</h2>
                <h6>${event.description}</h6>
            </div>
            <div class="cont-carta-footer">
                <h6 class="price"><b>Price:</b> ${event.price}</h6>
                <a class="link-detail" href="./details.html">Details</a>
            </div>`
            divContCartas.appendChild(carta)
}

const contChecks = document.getElementById("cont-check")
let categorias = check()


for (let cate of categorias){
    let categoria = document.createElement("div")
    categoria.innerHTML= `<input type="checkbox">
    <label>${cate}</label>`
    contChecks.appendChild(categoria)
}


function check(){
 let array= []

    for (let event of data.events){
        if (array.indexOf(event.category) === -1)
        array.push(event.category)
    }

return(array)
}
