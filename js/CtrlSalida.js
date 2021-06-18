"use stric";

var
    forma = document.getElementById("forma"),
    salidaBoleta = document.getElementById("salidaBoleta"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaGrupo = document.getElementById("salidaGrupo"),
    salidaMateria = document.getElementById("salidaMateria"),
    salidaFecha = document.getElementById("salidaFecha"),
    txtFecha = forma["fecha"];


function procesa() {
    var
        boleta = forma["boleta"].value.trim(),
        nombre = forma['nombre'].value.trim(),
        grupo = forma["grupo"].value.trim(),
        materia = forma["materia"].value.trim(),
        fecha = new Date(txtFecha.value);

    let FMT_DATE = (fecha.getDate() + 1) + "/" +
        (fecha.getMonth() + 1) + "/" +
        fecha.getFullYear();

    salidaBoleta.textContent = "Boleta: " + boleta;
    salidaNombre.textContent = "Nombre: " + nombre;
    salidaGrupo.textContent = "Grupo: " + grupo;
    salidaMateria.textContent = "Materia: " + materia;
    salidaFecha.textContent = "Fecha: " + FMT_DATE;

}