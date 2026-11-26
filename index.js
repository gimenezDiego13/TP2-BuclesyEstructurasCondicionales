/*
Dificultad:  🟢🟡
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let ingresarNombre = prompt("Ingresa tu nombre");
while (ingresarNombre === null || ingresarNombre.trim() === "") {
  alert("Ingresaste un valor erroneo, intentalo nuevamente");
  ingresarNombre = prompt("Ingresa tu nombre");
}

let ingresarEdad = parseInt(prompt(`Hola ${ingresarNombre}, ingresa tu edad`));
while (ingresarEdad <= 0 || isNaN(ingresarEdad) || ingresarEdad >= 130) {
  alert("Ingresaste un valor erroneo, intentalo nuevamente");
  ingresarEdad = parseInt(prompt("Ingresa tu edad"));
}

let ingresarNombre2 = prompt("Ingresa tu nombre");
while (ingresarNombre2 === null || ingresarNombre2.trim() === "") {
  alert("Ingresaste un valor erroneo, intentalo nuevamente");
  ingresarNombre2 = prompt("Ingresa tu nombre");
}

let ingresarEdad2 = parseInt(
  prompt(`Hola ${ingresarNombre2}, ingresa tu edad`),
);
while (ingresarEdad2 <= 0 || isNaN(ingresarEdad2) || ingresarEdad2 >= 130) {
  alert("Ingresaste un valor erroneo, intentalo nuevamente");
  ingresarEdad2 = parseInt(prompt("Ingresa tu edad"));
}

let ingresarNombre3 = prompt("Ingresa tu nombre");
while (ingresarNombre3 === null || ingresarNombre3.trim() === "") {
  alert("Ingresaste un valor erroneo, intentalo nuevamente");
  ingresarNombre3 = prompt("Ingresa tu nombre");
}

let ingresarEdad3 = parseInt(
  prompt(`Hola ${ingresarNombre3}, ingresa tu edad`),
);
while (ingresarEdad3 <= 0 || isNaN(ingresarEdad3) || ingresarEdad3 >= 130) {
  alert("Ingresaste un valor erroneo, intentalo nuevamente");
  ingresarEdad3 = parseInt(prompt("Ingresa tu edad"));
}

let edadMaxima = Math.max(ingresarEdad, ingresarEdad2, ingresarEdad3);

if (edadMaxima === ingresarEdad) {
  document.write(`${ingresarNombre} es mayor con ${ingresarEdad} años`);
} else if (edadMaxima === ingresarEdad2) {
  document.write(`${ingresarNombre2} es mayor con ${ingresarEdad2} años`);
} else {
  document.write(`${ingresarNombre3} es mayor con ${ingresarEdad3} años`);
}

document.write("<br>");
document.write(`${ingresarNombre} tiene ${ingresarEdad} años`);
document.write("<br>");
document.write(`${ingresarNombre2} tiene ${ingresarEdad2} años`);
document.write("<br>");
document.write(`${ingresarNombre3} tiene ${ingresarEdad3} años`);
