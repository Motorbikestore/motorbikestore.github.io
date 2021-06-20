import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraMotocicletas,
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoMotocicleta =
  getFirestore().
    collection("Motocicleta");
const params =
  new URL(location.href).
    searchParams;
const id = params.get("id");
/** @type {HTMLFormElement} */
const forma = document["forma"];

getAuth().onAuthStateChanged(
  protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    busca();
  }
}

/** Busca y muestra los datos que
 * corresponden al id recibido. */
async function busca() {
  try {
    const doc =
      await daoMotocicleta.
        doc(id).
        get();
    if (doc.exists) {
      /**
       * @type {
          import("./tipos.js").
                  Motocicleta} */
      const data = doc.data();
      forma.nombre.value =
        data.nombre || "";
      forma.addEventListener(
        "submit", guarda);
      forma.eliminar.
        addEventListener(
          "click", elimina);
    } else {
      throw new Error(
        "No se encontró.");
    }
  } catch (e) {
    muestraError(e);
    muestraMotocicletas();
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =
      new FormData(forma);
    const marca = getString(
      formData, "marca").trim();
    const modelo = getString(
      formData, "modelo").trim();
    const year = getString(
      formData, "year").trim();
    const avatar = formData.get("avatar")
    /**
     * @type {
        import("./tipos.js").
                Motocicleta} */
    const modelo = {
      marca,
      modelo,
      year,
      avatar
    };
    await daoMotocicleta.
      doc(id).
      set(modelo);
    muestraMotocicletas();
  } catch (e) {
    muestraError(e);
  }
}

async function elimina() {
  try {
    if (confirm("Confirmar la " +
      "eliminación")) {
      await daoMotocicleta.
        doc(id).
        delete();
      muestraMotocicletas();
    }
  } catch (e) {
    muestraError(e);
  }
}
