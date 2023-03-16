const valorRefeicao = 42.54;
const taxaServico = 0.1;
const valorTotal = valorRefeicao * (1 + taxaServico);

console.log(`O valor total da conta é: R$ ${valorTotal.toFixed(2)}`);
