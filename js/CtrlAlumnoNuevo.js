import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraAlumnos
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoAlumno =
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
    const nombre = getString(formData, "nombre").trim();
    const year = getString(formData, "year").trim();
    const precio = getString(formData, "precio").trim();
    const fecha = getString(formData, "fecha").trim();
    /**
     * @type {
        import("./tipos.js").
                Motocicleta} */
    const modelo = {
      marca,
      nombre,
      year,
      precio, 
      fecha 
    };
    await daoAlumno.
      add(modelo);
    muestraAlumnos();
  } catch (e) {
    muestraError(e);
  }
}

