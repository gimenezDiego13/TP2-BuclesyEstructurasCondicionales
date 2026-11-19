/*Dificultad:  🟢🟡
 
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
 */

let cadenaDeTexto = prompt(`Ingresa cualquier texto`);
if (cadenaDeTexto !== null) {
  let nuevaCadenaDeTexto = confirm(
    `Apreta "Aceptar" para agregar un nuevo texto \nApreta "Cancelar" para concatenar los textos que ingresaste`,
  );
  while (nuevaCadenaDeTexto) {
    let nuevoTexto = prompt("Ingresa un nuevo texto");
    if (nuevoTexto === null) {
      break;
    }
    cadenaDeTexto += "-" + nuevoTexto;
    nuevaCadenaDeTexto = confirm(
      `Apreta "Aceptar" para agregar un nuevo texto \nApreta "Cancelar" para concatenar los textos que ingresaste`,
    );
  }
  document.write(cadenaDeTexto);
} else {
  document.write("No ingresaste ningun texto");
}
