//details
const contDetalles=document.getElementById("cont-det")

const detalles = location.search //url del navegador
const parametro = new URLSearchParams(detalles) //parametro url del navegador
const nombre = parametro.get("name")//metodos disponibles por el URLSearch (get)


const evento = data.events.find(evento => evento.name == nombre)


contDetalles.innerHTML = `<div class="detail1">
<img src="${evento.image}">                
</div>

<div class="detail2">
    <h2 class="detail-titulo-carta" >${evento.name}</h2>
    <h5><b>Date:</b> ${evento.date}</h5>
    <h5><b>Description:</b> ${evento.description}</h5>
    <h5><b>Category:</b> ${evento.category}</h5>
    <h5><b>Place:</b> ${evento.place}</h5>
    <h5><b>Capacity:</b> ${evento.capacity}</h5>
    <h5><b>Estimate:</b> ${evento.assistance}</h5>
    <h5><b>Price:</b> ${evento.price}</h5>
</div>`
