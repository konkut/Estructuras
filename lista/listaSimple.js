
let modalFondo = document.querySelector(".modalBackground");
let modal = document.querySelector(".modal");
let modalMensaje = document.querySelector(".modalMensaje");
let mensaje = document.querySelector(".modal p");
let mensajeError = document.querySelector(".modalMensaje p");
let textMax = document.querySelector(".text");


let EliminarButton = 0;
let maximoValorCola;
let adiciono = false;


let contenedorLista = document.querySelector(".shadow");
let contenedor = document.querySelector(".draw");

let max = document.querySelector(".form__numero");
let limites = document.querySelector(".form__limites");
let inicio = document.querySelector(".inicio");

let flecha;
let dato;
let next;
let nodo;


let nombreBoton;
let msg;
let arrayCola;
let arrayPrin;
let arrayFin;
let arrayColaData;
let encontrarFin;
let encontrarPrin;
let funcionDeAvance = 0;
let funcionDeAvance2 = 0;

let incrementarPadding = 0;
let listaNodos = {
  dato: [],
  indiceL: [],
  indiceR: [],
  indiceW: [],
  indiceQ: []
};
let array = [];
let sw = false;
let valorAux;
let obtenerElemento;
let indicebuscarX;
let indiceDato;
let indiceBuscarQ;
let padre;
let contenedorQ;

let NodoContenedor;
let NodosIndice;
let NodoL;
let NodoR;
let NodoW;
let NodoQ;

let contenedorQClass = document.querySelector(".contenedorQ");

document.addEventListener("click", (e) => {

  if (e.target.matches("[value='Adicionar Adelante']")) {
    borrarInput();
    vaciarInput();
    limites.style.display = "none";
    nombreBoton = "Adicionar Nodo Adelante";
    crearBotonAccion(nombreBoton);
    msg = "Elemento adicionar es: ";
    mostrarMensaje(msg);
  }
  if (e.target.matches("[value='Adicionar Final']")) {
    borrarInput();
    vaciarInput();
    limites.style.display = "none";
    nombreBoton = "Adicionar Nodo Final";
    crearBotonAccion(nombreBoton);
    msg = "Elemento adicionar es: ";
    mostrarMensaje(msg);

  }
  if (e.target.matches("[value='Adicionar Antes']")) {
    borrarInput();
    vaciarInput();
    limites.style.display = "block";
    limites.placeholder = "Antes de ...";
    nombreBoton = "Adicionar Nodo Antes";
    crearBotonAccion(nombreBoton);
    msg = "Elemento adicionar es: ";
    mostrarMensaje(msg);
  }
  if (e.target.matches("[value='Adicionar Despues']")) {
    borrarInput();
    vaciarInput();
    limites.style.display = "block";
    limites.placeholder = "Despues de ...";
    nombreBoton = "Adicionar Nodo Despues";
    crearBotonAccion(nombreBoton);
    msg = "Elemento adicionar es: ";
    mostrarMensaje(msg);
  }

  if (e.target.matches("[value='Limpiar Lista']")) {
    vaciarLista();
    array = [];
  }


  if (e.target.matches("[value='Adicionar Nodo Adelante']")) {
    e.preventDefault();
    try {
      let regex = /[\s]+/ig;
      if (regex.test(max.value) || max.value == "") {
        vaciarLista();
        crearLista();
        throw "GRACIOSO";
      }

      borrarRyQyW();
      crearListaInicio();
      vaciarLista();
      crearLista();

    } catch (e) {
      console.log(e);
    }
  };
  if (e.target.matches("[value='Adicionar Nodo Final']")) {
    e.preventDefault();
    try {
      let regex = /[\s]+/ig;
      if (regex.test(max.value) || max.value == "") {
        vaciarLista();
        crearLista();
        throw "GRACIOSO";
      }
      borrarRyQyW();
      crearListaFinal();
      vaciarLista();
      crearLista();

    } catch (e) {
      console.log(e);
    }
  };
  if (e.target.matches("[value='Adicionar Nodo Antes']")) {
    e.preventDefault();
    try {
      let regex = /[\s]+/ig;
      if (regex.test(max.value) || max.value == "" || limites.value == "" || regex.test(limites.value)) {
        vaciarLista();
        crearLista();
        throw "GRACIOSO";
      }
      borrarRyQyW();
      validarNodos = contenedorLista.hasChildNodes;
      if (!validarNodos) {
        console.log("no hay nodos");
      } else {
        indiceDato = listaNodos["dato"].indexOf(limites.value);
        if (indiceDato !== -1) {
          if (listaNodos["dato"].indexOf(limites.value) == 0) {
            crearListaInicio();
            vaciarLista();
            crearLista();
            // obtenerArrayLista("indiceW").splice(indiceDato, 0, "W");
          } else {
            obtenerArrayLista("dato").splice(indiceDato, 0, max.value);
            obtenerArrayLista("indiceL").splice(indiceDato, 0, "");
            obtenerArrayLista("indiceR").splice(indiceDato + 1, 0, "R");
            obtenerArrayLista("indiceW").splice(indiceDato - 1, 0, "W");
            obtenerArrayLista("indiceQ").splice(indiceDato, 0, "Q");
            for (let i = 0; i < listaNodos["indiceL"].length; i++) {
              if (i == 0) {
                listaNodos["indiceL"][i] = "L";
              } else {
                listaNodos["indiceL"][i] = "";
              }
            }
            vaciarLista();
            crearLista();
          }
        } else {
          vaciarLista();
          crearLista();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (e.target.matches("[value='Adicionar Nodo Despues']")) {
    e.preventDefault();
    try {
      let regex = /[\s]+/ig;
      if (regex.test(max.value) || max.value == "" || limites.value == "" || regex.test(limites.value)) {
        vaciarLista();
        crearLista();
        throw "GRACIOSO";
      }
      borrarRyQyW();
      validarNodos = contenedorLista.hasChildNodes;
      if (!validarNodos) {
        console.log("no hay nodos");
      } else {
        indiceDato = listaNodos["dato"].indexOf(limites.value);
        if (indiceDato !== -1) {
          if (listaNodos["dato"].indexOf(limites.value) == (listaNodos["dato"].length) - 1) {
            crearListaFinal();
            console.log("no")
            vaciarLista();
            crearLista();
          } else {
            obtenerArrayLista("dato").splice(indiceDato + 1, 0, max.value);
            obtenerArrayLista("indiceL").splice(indiceDato, 0, "");
            obtenerArrayLista("indiceW").splice(indiceDato, 0, "W");
            obtenerArrayLista("indiceR").splice(indiceDato + 2, 0, "R");
            obtenerArrayLista("indiceQ").splice(indiceDato + 1, 0, "Q");
            for (let i = 0; i < listaNodos["indiceL"].length; i++) {
              if (i == 0) {
                listaNodos["indiceL"][i] = "L";
              } else {
                listaNodos["indiceL"][i] = "";
              }
            }
            vaciarLista();
            crearLista();
            console.log("si")
          }
        } else {
          vaciarLista();
          crearLista();
        }
      }
    } catch (e) {
      console.log(e);
    }

  };


  if (e.target.matches("[value='Eliminar']")) {

    if (ingreso == true && adiciono == true) {

      maximoValorCola = document.querySelector("[type='hidden']").value;
      let tamaño = arrayColaData.length;

      encontrarFin = arrayFin.indexOf("FIN");
      encontrarPrin = arrayPrin.indexOf("PRIN");
      if (encontrarFin == encontrarPrin) {
        msg = "Cola Circular Vacia";
        mostrarMensajeError(msg);
        temporizadorMensaje();
      } else {
        if (funcionDeAvance2 == maximoValorCola - 1) {
          arrayPrin.splice(funcionDeAvance2, 1, "");
          arrayPrin.splice(0, 1, "PRIN");
        } else {
          arrayPrin.splice(funcionDeAvance2, 2, "", "PRIN");
        }
        let numeroEliminado = arrayColaData[funcionDeAvance2];
        msg = `Elemento eliminado es: ${numeroEliminado}`;
        mostrarMensajeError(msg);
        temporizadorMensaje();
        arrayColaData.splice(funcionDeAvance2, 1, "");
        funcionDeAvance2 = (encontrarPrin + 1) % maximoValorCola;
        modal.style.display = "none";
        limpiarCola();
        crearCola();

      }
    }
  }
});

const contarElementos = () => {
  return [...contenedorLista.childNodes].length;
}

const borrarRyQyW = () => {
  for (let i = 0; i < listaNodos["indiceR"].length; i++) {
    listaNodos["indiceR"][i] = "";
  }
  for (let i = 0; i < listaNodos["indiceQ"].length; i++) {
    listaNodos["indiceQ"][i] = "";
  }
  for (let i = 0; i < listaNodos["indiceW"].length; i++) {
    listaNodos["indiceW"][i] = "";
  }
}

const crearListaInicio = () => {
  obtenerArrayLista("dato").unshift(max.value);
  obtenerArrayLista("indiceL").unshift("L");
  obtenerArrayLista("indiceR").unshift("");
  obtenerArrayLista("indiceW").unshift("");
  obtenerArrayLista("indiceQ").unshift("Q");
  if (sw == true) {
    indicebuscarX = listaNodos["indiceL"].lastIndexOf("L");
    obtenerArrayLista("indiceL").splice(indicebuscarX, 1, "");
    obtenerArrayLista("indiceQ").splice(indicebuscarX, 1, "");
  } else { sw = true }
  inicio.style.visibility = "hidden";
}

const crearListaFinal = () => {
  let validarNodos = contenedorLista.hasChildNodes();
  if (!validarNodos) {
    crearListaInicio();
  } else {
    obtenerArrayLista("dato").push(max.value);
    obtenerArrayLista("indiceL").push("");
    obtenerArrayLista("indiceW").push("");
    obtenerArrayLista("indiceR").push("");
    obtenerArrayLista("indiceQ").push("Q");
    obtenerArrayLista("indiceR").splice((listaNodos["dato"].lastIndexOf(max.value)) - 1, 1, "R");
  }
}

const obtenerArrayLista = (valor) => {
  return listaNodos[valor];
}
const vaciarLista = () => {
  let nodos = document.querySelectorAll(".nodo");
  let flechas = document.querySelectorAll(".flecha");
  for (let nodo of nodos) {
    contenedorLista.removeChild(nodo);
  }
  for (let itemflecha of flechas) {
    contenedorLista.removeChild(itemflecha);
  }
  modalFondo.style.display = "none";

}

const crearLista = () => {
  for (let i = 0; i < listaNodos["dato"].length; i++) {

    NodosIndice = document.createElement("DIV");
    NodosIndice.classList.add("nodosIndice");

    NodoL = document.createElement("DIV");
    NodoL.textContent = `${listaNodos['indiceL'][i]}`;
    NodoL.classList.add(`indiceL-${i}`);

    NodoR = document.createElement("DIV");
    NodoR.textContent = `${listaNodos['indiceR'][i]}`;
    NodoR.classList.add(`indiceR`, `indiceR-${i}`);

    NodoW = document.createElement("DIV");
    NodoW.textContent = `${listaNodos['indiceW'][i]}`;
    NodoW.classList.add(`indiceW-${i}`);

    NodosIndice.appendChild(NodoW);
    NodosIndice.appendChild(NodoR);
    NodosIndice.appendChild(NodoL);


    dato = document.createElement("DIV");
    dato.textContent = listaNodos["dato"][i];
    dato.classList.add(`dato-${i}`, "dato");

    next = document.createElement("DIV");
    next.innerHTML = "n<br>e<br>x<br>t";
    next.classList.add("next");

    NodoContenedor = document.createElement("DIV");
    NodoContenedor.classList.add("nodosContenedor");
    NodoContenedor.appendChild(dato);
    NodoContenedor.appendChild(next);

    flecha = document.createElement("DIV");
    flecha.innerHTML = "&#8594; ";
    flecha.classList.add(`flecha-${i}`, "flecha");

    nodo = document.createElement("DIV");
    nodo.classList.add("nodo", `nodo-${i}`);
    nodo.appendChild(NodosIndice);
    nodo.appendChild(NodoContenedor);

    contenedorQ = document.createElement("DIV");
    contenedorQ.textContent = listaNodos["indiceQ"][i];
    contenedorQ.classList.add("contenedorQ");
    nodo.appendChild(contenedorQ);

    contenedorLista.appendChild(nodo);
    contenedorLista.appendChild(flecha);
  }
}


const mostrarMensaje = (msg) => {
  mensaje.textContent = msg;
  modalFondo.style.display = "flex";
}
const mostrarMensajeError = (msg) => {
  mensajeError.textContent = msg;
  mensajeError.style.lineHeight = "8.0rem";
  modalFondo.style.display = "flex";
}
const borrarInput = () => {
  const items = modal.children;
  for (let item of items) {
    if (item.classList.contains("action")) {
      modal.removeChild(item);
    }
  }
}
const crearBotonAccion = (nombre) => {
  let input = document.createElement("input");
  input.value = nombre;
  input.classList.add("action");
  input.type = "submit";
  modal.appendChild(input);
}
const vaciarInput = () => {
  max.value = "";
  limites.value = "";
}







