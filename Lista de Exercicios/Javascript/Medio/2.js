let valor = prompt("Digite um número: ");

// Converte o valor digitado para um número inteiro
valor = parseInt(valor);

if (valor > 0) {
  console.log("O número é positivo.");
} else if (valor < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número digitado é inválido.");
}
