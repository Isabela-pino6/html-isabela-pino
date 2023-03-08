document.addEventListener("DOMContentLoaded"), () => { 
  const cardsAdj =  [
    {
      name: 'descarga',
      img:'imagenes/descarga.jpg'
    },
     {
      name: 'fe',
      img:'imagenes/fe.jpg'
     },
     {
      name: 'feid',
      img:'imagenes/feid.jpg'
     },
     {
      name: 'feidd',
      img:'imagenes/feidd.jpg'
     },
     {
      name: 'feiid',
      img:'imagenes/feiid.jpg'
     },
     {
      name: 'ferxxoo',
      img:'imagenes/ferxxoo.jpg'
     },
     {
      name: 'imagen',
      img:'imagenes/imagen.jpg'
     },
     {
      name: 'salomon',
      img:'imagenes/salomon.jpg'
     },
  ];
});

const cuadricula = document.querySelector(".cuadricula");
const resultado = document.querySelector("#resultado");
var cartasEscogidas = [];
var cartasEscogidasId = [];
var cartasGanadas = [];

function crearTablero (){
  for (let i = 0; i < cardAdj.length; i++) {

    var carta = document.createElement('img');
    carta.setAttribute('src', 'imagenes/reverso.png');

    carta.setAttribute('data-id', i);
    carta.addEventListenner('click', voltearCarta);

    cuadricula.appendChild(carta);

    function voltearCarta() {
      var cardId = this.getAttribute("data-id");
      cartasEscogidas.push(cardAdj[cardId].name);
      cartasEscogidasId.push(cardId);
      if (cartasEscogidas.length === 2) {
        setTimeout(verificarPareja, 1000);
      }
    } 

  crearTablero();
});
