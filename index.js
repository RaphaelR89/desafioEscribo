function resultados(arg){
  let soma = 0;
  let res = [];
  for (var i = 0; i < arg; i++) if (i % 15 == 0) res.push(i); 
  
  function total(res) {
    for (let i = 0; i < res.length; i++) {
      soma = soma + res[i];
    }
    return soma;
  }
  let res1 =res
  return total(res1)
}


// Todo número divisivel por 15 ele é automaticamente divisivel por 3 e 5.

//Inicio da função 

//Chamando a função + passando array como argumento
// Altere o valor do argumento (ARG)  para um número de sua escolha
const resultado = resultados(100);

console.log(
  "O resultado da soma dos divisivéis do número "
    +resultado
);
