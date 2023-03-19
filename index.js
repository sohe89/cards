//1  Variable div contenedor EN HTML
const cardContenedor = document.querySelector(".cardContenedor");
//2 crear un array de tarjetas
let cards = [
    {
      "id": Date.now(),
      "name": "Lugar 1 ",
      "img": "https://images.pexels.com/photos/5226950/pexels-photo-5226950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "descripcion": "descripcion 1",
      "poblacion": "Población: 7"
    },
    {
        "id": Date.now(),
        "name": "Lugar 2 ",
        "img": "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "descripcion": "descripcion 2",
        "poblacion": "Población: 32"
      },
      {
        "id": Date.now(),
        "name": "Lugar 3 ",
        "img": "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "descripcion": "descripcion 3",
        "poblacion": "Población: 33"
      },
      {
        "id": Date.now(),
        "name": "Lugar 4 ",
        "img": "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "descripcion": "descripcion 3",
        "poblacion": "Población: 334"
      },
      {
        "id": Date.now(),
        "name": "Lugar 5 ",
        "img": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "descripcion": "descripcion 3",
        "poblacion": "Población: 70"
      },
      {
        "id": Date.now(),
        "name": "Lugar 6 ",
        "img": "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "descripcion": "descripcion 3",
        "poblacion": "Población: 900"
      },
      {
        "id": Date.now(),
        "name": "Lugar 7 ",
        "img": "https://images.pexels.com/photos/1269808/pexels-photo-1269808.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "descripcion": "descripcion 3",
        "poblacion": "Población: 100.000"
      },
      {
        "id": Date.now(),
        "name": "Lugar 8 ",
        "img": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "descripcion": "descripcion 3",
        "poblacion": "Población: 23.000.000"
      },
      {
        "id": Date.now(),
        "name": "Lugar 9 ",
        "img": "https://images.pexels.com/photos/1126382/pexels-photo-1126382.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "descripcion": "descripcion 3",
        "poblacion": "Población: -"
      },
      {
        "id": Date.now(),
        "name": "Lugar 10 ",
        "img": "https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "descripcion": "descripcion 3",
        "poblacion": "Población:23.0000"
      },
  ]
  

  /*3 Funcion*/

  function mostrarenHTML() {
    cardContenedor.innerHTML='';
   
    cards.forEach((item)=>
    {
        const itemCard = document.createElement("div"); //Crear un div
        itemCard.classList.add("card") //Agregar al div la clase card
        itemCard.classList.add("mb-4") //Agregar al div la clase mb-4
        itemCard.innerHTML = `
        <img src= ${item.img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.id}</p>
            <p class="card-text">${item.descripcion}</p>
            <p class="card-text">${item.poblacion}</p>
        </div>
            
        `;
        cardContenedor.appendChild(itemCard) ;
        //console.log(item)
    })
    }

    mostrarenHTML()

    
    
    //console.log(cards);

//   var arrayObj = cards.map(function(bar){
//     return '<div>'+ bar.id + ' '+ bar.name + bar.poblacion + '</div>'
//   })
//   document.getElementById("cardbox").innerHTML = arrayObj;
