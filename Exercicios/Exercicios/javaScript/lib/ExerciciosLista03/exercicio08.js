
function ehVogal(caractere) {
    const vogais = 'aeiou';
    const caractereMinusculo = caractere.toLowerCase(); // Converte para minúsculo para comparação
    return vogais.includes(caractereMinusculo);
  }
  
  function verificarVogalConsoante(caractere) {
    if (ehVogal(caractere)) {
      return "Vogal";
    } else {
      return "Consoante";
    }
  }
  
  // Testando a função com os cenários:
  console.log(verificarVogalConsoante("a"));  // Saída: Vogal
  console.log(verificarVogalConsoante("b"));  // Saída: Consoante
  console.log(verificarVogalConsoante("e"));  // Saída: Vogal
  console.log(verificarVogalConsoante("x"));  // Saída: Consoante
  console.log(verificarVogalConsoante("y"));  // Saída: Consoante