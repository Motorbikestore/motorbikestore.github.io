import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraPasatiempos,
  muestraMotocicletas
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoMotocicleta =
  getFirestore().
    collection("Motocicleta");
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
    forma.addEventListener(
      "submit", guarda);
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
                Pasatiempo} */
    const modelo = {
      marca,
      modelo, 
      year, 
      avatar
    };
    await daoMotocicleta.
      add(modelo);
    muestraMotocicletas();
  } catch (e) {
    muestraError(e);
  }
}



