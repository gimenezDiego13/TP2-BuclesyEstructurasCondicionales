/* Dificultad:  🟢🟡

2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

let ingresarNota = Number(prompt("Ingresa una nota del 0 al 10"));

while (isNaN(ingresarNota)) {
  alert("Ingresaste un valor invalido, intentalo nuevamente");
  ingresarNota = Number(prompt("ingresa una nota del 1 al 10"));
}

while (ingresarNota < 0 || ingresarNota > 10) {
  alert("Introduce un número válido");
  ingresarNota = Number(prompt("Ingresa una nota del 1 al 10"));
}

if (ingresarNota <= 2) {
  document.write("Tu nota es muy deficiente pa, estudia más");
} else if (ingresarNota <= 4) {
  document.write("Tu nota es Insuficiente pa");
} else if (ingresarNota <= 6) {
  document.write("Tu nota es suficiente, pero metele más pila jaja");
} else if (ingresarNota === 7) {
  document.write("Esta bien, pero esforzate más");
} else if (ingresarNota <= 9) {
  document.write("Tu nota es notable, no te falta nada para el 10");
} else {
  document.write("Sobresaliente, nada para decir, es tu deber jaaj");
}
