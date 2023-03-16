VAR
// Seção de Declarações das variáveis 
valorRefeicao: real
taxaServico: real
valorTotal: real

INICIO

valorRefeicao <- 42.54
taxaServico <- 0.1
// Seção de Comandos, procedimento, funções, operadores, etc... 
// Cálculo do valor total da conta
valorTotal <- valorRefeicao + ( valorRefeicao * taxaServico )

// Exibição do resultado
escreva("O valor total da conta é: R$ ")
escreval(valorTotal)

FIMALGORITMO