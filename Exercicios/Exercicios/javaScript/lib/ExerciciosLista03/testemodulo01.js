export function verificarAnoBissexto(ano) {

    if(ano % 400 === 0) return true;
  
    if(ano % 100 === 0) return false;
  
    if(ano %   4 === 0) return true;
  return false;
    }
  
 export  function classificarAluno(media) {
        if (media >= 7.0) {
          return "Aprovado";
        } else {
          return "Reprovado";
        }
      }