import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  cod,
  muestraError
} from "../lib/util.js";
import {
  tieneRol
} from "./seguridad.js";

/** @type {HTMLUListElement} */
const lista = document.
  querySelector("#lista");
const daoAlumno =
  getFirestore().
    collection("Motocicleta");

getAuth().
  onAuthStateChanged(
    protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    ["Cliente"])) {
    consulta();
  }
  // motocicletasCliente.html
}

function consulta() {
  daoAlumno.
    orderBy("nombre")
    .onSnapshot(
      htmlLista, errConsulta);
}

/**
 * @param {import(
    "../lib/tiposFire.js").
    QuerySnapshot} snap */
function htmlLista(snap) {
  let html = "";
  if (snap.size > 0) {
    snap.forEach(doc =>
      html += htmlFila(doc));
  } else {
    html += /* html */
      `<li class="vacio">
        -- No hay Motocicletas
        registrados. --
      </li>`;
  }
  lista.innerHTML = html;
}

/**
 * @param {import(
    "../lib/tiposFire.js").
    DocumentSnapshot} doc */
function htmlFila(doc) {
  /**
   * @type {import("./tipos.js").
                  Motocicleta} */
  const data = doc.data();
  const marca = cod(data.marca);
  const nombre = cod(data.nombre);
  const year = cod(data.year);
  const precio = cod(data.precio);
  const parámetros =
    new URLSearchParams();
  parámetros.append("id", doc.id);
  return ( /* html */

    `<li>
    ${parámetros}
      <strong class="primario">
        ${marca} ${nombre} ${year} ${precio}
      </strong>
    
  </li>`

      `<li>
      <a class="fila" href=
  "motocicleta.html?${parámetros}">
        <strong class="primario">
          ${marca} ${nombre} ${year} ${precio}
        </strong>
      </a>
    </li>`);
}

/** @param {Error} e */
function errConsulta(e) {
  muestraError(e);
  consulta();
}

