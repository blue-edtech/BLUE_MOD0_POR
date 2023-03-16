// Pede ao usuário para inserir um número
const numero = parseInt(prompt("Digite um número: "));

// Verifica se o número é par ou ímpar e exibe a mensagem correspondente
if (numero % 2 === 0) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}
