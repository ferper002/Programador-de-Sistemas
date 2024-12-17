export function escreverOlaMundo() {
    console.log("Olá, mundo!");
  }
  
  // Exercicio2

  // export function saudacao() {
  //   let nome = prompt("Digite seu nome:");
  //   console.log("Olá, " + Laila + "!");
  // }

  // Exercicio3

  export  function somar(num1, num2) {
    let resultado = Number(num1) + Number(num2);
    return resultado;
  }
  
  // Exercicio4

  export function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    console.log(resultado);
  }
  
  // Exercicio5

   export function calcularMedia(num1, num2, num3) {
    let soma = Number(num1) + Number(num2) + Number(num3);
    let media = soma / 3;
    return media;
  }
  

  // Exercicio6

  export function divisaoInteira(dividendo, divisor) {
    let resultado = Math.floor(dividendo / divisor);
    return resultado;
  }
  

  // Exercicio7

 export function nomeCompleto(nome, sobrenome) {
    return(nome + " " + sobrenome);
  }
  

  // Exercicio8

  export function quadrado(numero) {
    return numero * numero;
  }


  // Exercicio9

   export function restoDivisao(numero1, numero2) {
    return numero1 % numero2;
  }


  // Exercicio10

  export function areaRetangulo(largura, altura) {
    return largura * altura;
}

  // Exercicio11

  export function potencia(base, expoente) {
    return Math.pow(base, expoente);
  }

  // Exercicio12

  export function dobro(numero) {
    console.log(numero * 2);
  }

  // Exercicio13

  export function raizQuadrada(numero) {
    return Math.sqrt(numero);
  }

  // Exercicio14

  export function perimetroCirculo(raio) {
    const pi = 3.14159;
    return 2 * pi * raio;
  }

  // Exercicio15

  export function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }


  // Exercicio16

  export function volumeEsfera(raio) {
    const pi = 3.14159;
    return (4/3) * pi * Math.pow(raio, 3);
  }