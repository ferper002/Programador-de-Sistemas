function encontrarMenor(num1, num2, num3) {
    let menor = num1;
  
    // Compara o primeiro número com o segundo
    if (num2 < menor) {
      menor = num2;
    }
  
    // Compara o menor até agora com o terceiro
    if (num3 < menor) {
      menor = num3;
    }
  
    return menor;
  }
  
  // Testando a função com os cenários:
  console.log(encontrarMenor(3, 7, 5));  // Saída: 3
  console.log(encontrarMenor(-1, -5, -3)); // Saída: -5
  console.log(encontrarMenor(8, 2, 10));  // Saída: 2

// Podendo resumir como ;

//Funtion obterMenor(a,b,c) {
// let menor = a; {

// if (menor > b) menor = b;
// if (menor > c) menor = c

// return menor;
// }
// console.log(obterMenor(3, 7, 5));  // Saída: 3
// console.log(obterMenor(-1, -5, -3)); // Saída: -5
// console.log(obterMenor(8, 2, 10));  // Saída: 2