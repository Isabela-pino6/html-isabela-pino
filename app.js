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

  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/blank.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      cards[opcionUnoId].removeEventListenner("click", voltearCarta);
      cards[opcionDosId].removeEventListenner("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
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
