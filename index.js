/*
Dificultad:  🟢🟡
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

let ingresarNumero = parseInt(prompt("Ingresa un número no mayor de 50"));

while (ingresarNumero > 50 || isNaN(ingresarNumero) || ingresarNumero <= 0) {
  alert(`Ingresaste un valor erroneo, intentalo nuevamente`);
  ingresarNumero = parseInt(prompt("Ingresa un número no mayor de 50"));
}

for (let i = ingresarNumero; i >= 1; i--) {
  for (let v = i; v >= 1; v--) {
    document.write(i);
  }
  document.write("<br>");
}
