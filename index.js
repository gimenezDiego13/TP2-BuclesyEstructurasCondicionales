/*Dificultad:  🟢
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

let ingresarEdad = parseInt(
  prompt("Ingresa tu edad para ver si podes manejar"),
);

while (isNaN(ingresarEdad)) {
  ingresarEdad = parseInt(
    prompt("Ingresaste caracteres invalidos. Ingresa nuevamente tu edad"),
  );
}
if (ingresarEdad < 18) {
  document.write("Sos menor de edad pa, jodete jajajja");
} else {
  document.write("Sos meyor de edad, disfruta de tu vehiculo ");
}
