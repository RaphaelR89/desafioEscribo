//Função dentro de função

function resultados(numeros) {
  let valorInicial = 0;
  let listaDivisiveis = [];
  for (var i = 0; i < numeros; i++) if (i % 15 == 0) listaDivisiveis.push(i);

  function total(listaDivisiveis) {
    for (let i = 0; i < listaDivisiveis.length; i++) {
      valorInicial = valorInicial + listaDivisiveis[i];
    }
    return valorInicial;
  }
  let resultado = listaDivisiveis;
  return total(resultado);
}

const resposta = resultados(100);

console.log("O resultado da soma dos divisivéis é:  " + resposta);

// Função simples

// Altere o valor da váriavel numeroInteiro para um número de sua escolha
let numeroInteiro = 100;

// Todo número divisivel por 15 ele é automaticamente divisivel por 3 e 5.
let listaDivisiveis = [];
for (var i = 0; i < numeroInteiro; i++)
  if (i % 15 == 0) listaDivisiveis.push(i);

//Inicio da função
function somaDivisivel(ar) {
  let valorInicial = 0;
  for (let i = 0; i < ar.length; i++) {
    valorInicial = valorInicial + ar[i];
  }
  return valorInicial;
}
//Chamando a função + passando array como argumento
somaDivisivel(listaDivisiveis);
console.log("Os números divisíveis por 3 e 5 são: " + listaDivisiveis);
console.log(
  "O resultado da soma dos divisivéis do número " +
    numeroInteiro +
    " é " +
    somaDivisivel(listaDivisiveis)
);
