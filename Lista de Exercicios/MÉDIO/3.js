// solicita o primeiro número ao usuário e converte para número
let num1 = parseFloat(prompt("Digite o primeiro número: "));

// solicita o segundo número ao usuário e converte para número
let num2 = parseFloat(prompt("Digite o segundo número: "));

// verifica se os números são iguais
if (num1 === num2) {
  console.log("Números iguais");
} else if (num1 > num2) {
  console.log(`O maior número é: ${num1}`);
} else {
  console.log(`O maior número é: ${num2}`);
}
