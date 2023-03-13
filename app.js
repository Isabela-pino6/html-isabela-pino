document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "descarga",
      img: "imagenes/descarga.jpg"
    },
    {
      name: "fe",
      img: "imagenes/fe.jpg"
    },
    {
      name: "feid",
      img: "imagenes/feid.jpg"
    },
    {
      name: "feidd",
      img: "imagenes/feidd.jpg"
    },
    {
      name: "feiid",
      img: "imagenes/feiid.jpg"
    },
    {
      name: "ferxxoo",
      img: "imagenes/ferxxoo.jpg"
    },
    {
      name: "descarga",
      img: "imagenes/descarga.jpg"
    },
    {
      name: "fe",
      img: "imagenes/fe.jpg"
    },
    {
      name: "feid",
      img: "imagenes/feid.jpg"
    },
    {
      name: "feidd",
      img: "imagenes/feidd.jpg"
    },
    {
      name: "feiid",
      img: "imagenes/feiid.jpg"
    },
    {
      name: "ferxxoo",
      img: "imagenes/ferxxoo.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  //---------------------------lecture04--------------------------//
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }

  crearTablero();
});
