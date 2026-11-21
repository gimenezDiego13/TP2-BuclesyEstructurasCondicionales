/*
Dificultad:  🟢🟡🔴
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

*/

let numFilas = parseInt(prompt(`Ingresa un número de filas`));
let numColumnas = parseInt(prompt(`Ingresa un número de columnas`));

while (numFilas <= 0 || isNaN(numFilas)) {
  alert(`Ingresaste un valor invalido, intenta nuevamente`);
  numFilas = parseInt(prompt(`Ingresa un número de filas`));
}
while (numColumnas <= 0 || isNaN(numColumnas)) {
  alert(`Ingresaste un valor invalido, intenta nuevamente`);
  numColumnas = parseInt(prompt(`Ingresa un número de columnas`));
}
let multiplicacion = numFilas * numColumnas;
let contador = multiplicacion;

document.write('<table border="1">');
for (let i = numFilas; i >= 1; i--) {
  document.write("<tr>");
  for (let v = numColumnas; v >= 1; v--) {
    document.write(`<td>${contador}</td>`);
    contador--;
  }
  document.write("</tr>");
}
document.write("</table>");
