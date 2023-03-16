VAR
valorSaque, nota, i: Inteiro
notasQuantidade: Vetor [1..100] de Inteiro
notasDisponiveis: Vetor [1..6] de Inteiro

INICIO
notasDisponiveis[1] <- 100
notasDisponiveis[2] <- 50
notasDisponiveis[3] <- 10
notasDisponiveis[4] <- 5
notasDisponiveis[5] <- 2
notasDisponiveis[6] <- 1

escreval("Qual valor você deseja sacar?")
escreval("(Valor mínimo: 10; Valor máximo: 600)")
leia(valorSaque)

// Verifica se o valor de saque é válido
se (valorSaque < 10) ou (valorSaque > 600) entao
escreva("Valor de saque inválido. O valor mínimo é 10 e o máximo é 600.")
senao
// Percorre as notas disponíveis e verifica quantas notas são necessárias para o valor do saque
para i de 1 ate 6 faca
nota <- notasDisponiveis[i]
enquanto (valorSaque >= nota) faca
valorSaque <- valorSaque - nota
notasQuantidade[i] <- notasQuantidade[i] + 1
fimEnquanto
fimPara
// Exibe a quantidade de notas de cada valor
escreva("Notas fornecidas:")
para i de 1 ate 6 faca
se (notasQuantidade[i] > 0) entao
escreva(notasQuantidade[i] , " nota(s) de R$ " , notasDisponiveis[i])
FIMSE
FIMPARA

FIMSE
FIMALGORITMO