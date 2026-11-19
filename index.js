/*Dificultad:  🟢🟡
4- Realiza un script que pida números hasta que se pulse “cancelar”.
 Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let pedirNumeros = prompt(`Ingresa un número`);
let sumaTotalDeNumeros = 0;

while (pedirNumeros !== null) {
  if (pedirNumeros.trim() === "" || isNaN(pedirNumeros)) {
    alert(`Ingresaste un valor erroneo, intentalo nuevamente`);
  } else {
    sumaTotalDeNumeros += Number(pedirNumeros);
  }
  pedirNumeros = prompt(
    "Ingresa otro número o presiona Cancelar para finalizar",
  );
}

alert(`La suma total de los números ingresados es ${sumaTotalDeNumeros}`);
