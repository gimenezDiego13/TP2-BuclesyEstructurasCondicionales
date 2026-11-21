/*
Dificultad:  🟢🟡🔴
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10


*/

for (let num = 1; num <= 500; num++) {
  document.write(num + "\n");

  if (num % 4 === 0) {
    document.write("(Múltiplo de 4)");
  }
  if (num % 9 === 0) {
    document.write("(Múltiplo de 9)");
  }
  if (num % 5 === 0) {
    document.write("<hr>");
  }
  document.write("<br>");
}
