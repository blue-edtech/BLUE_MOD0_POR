const anoNascimento = 1990;
const anoAtual = 2023;
const idade = anoAtual - anoNascimento;

console.log(`Sua idade é ${idade} anos.`);

if (idade >= 18 && idade <= 30) {
  console.log("Você está na flor da idade!");
}
