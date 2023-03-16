// Gerando um número aleatório entre 0 e 10
const numeroAleatorio = Math.floor(Math.random() * 11);

// Pedindo ao usuário para adivinhar o número
const numeroEscolhido = parseInt(prompt('Digite um número entre 0 e 10: '));

// Verificando se o número escolhido é igual ao número aleatório gerado
if (numeroEscolhido === numeroAleatorio) {
  console.log('Parabéns! Você acertou o número.');
} else {
  console.log(`Que pena! O número correto era ${numeroAleatorio}.`);
}
