/*
Dificultad:  🟢🟡
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/

let ingresarNumero = parseInt(prompt(`Ingresa un número no mayor de 50`));

while (ingresarNumero > 50 || ingresarNumero <= 0 || isNaN(ingresarNumero)) {
  alert("Ingresaste un número invalido");
  ingresarNumero = parseInt(prompt(`Ingresa un número no mayor a 50`));
}

for (let i = 1; i <= ingresarNumero; i++) {
  for (let v = 1; v <= i; v++) {
    document.write(v);
  }
  document.write("<br>");
}
