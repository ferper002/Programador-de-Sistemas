function imprimirTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
    return console.log();
  }
  
  // 
  imprimirTabuada(2); // Imprime a tabuada do 2
  imprimirTabuada(10); // Imprime a tabuada do 10