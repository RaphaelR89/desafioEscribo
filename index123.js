// Altere o valor da váriavel numeroInteiro para um número de sua escolha
let numeroInteiro = 100;

// Todo número divisivel por 15 ele é automaticamente divisivel por 3 e 5.
let res = [];
for (var i = 0; i < numeroInteiro; i++) if (i % 15 == 0) res.push(i);

//Inicio da função 
function total(ar) {
  let soma = 0;
  for (let i = 0; i < ar.length; i++) {
    soma = soma + ar[i];
  }
  return soma;
}
//Chamando a função + passando array como argumento
const resultado = total(res);
console.log("Os números divisíveis por 3 e 5 são: " + res);
console.log(
  "O resultado da soma dos divisivéis do número " +
    numeroInteiro +
    " é " +
    resultado
);
