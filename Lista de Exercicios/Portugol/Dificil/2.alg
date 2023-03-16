funcao verificarVoto(anoNascimento: inteiro) : caractere
VAR
anoAtual, idade: inteiro
inicio
anoAtual <- 2023
idade <- anoAtual - anoNascimento
se (idade < 16) entao
    retorne "NEGADO"
senao
se (idade >= 18) e (idade <= 70) entao
    retorne "OBRIGATÓRIO"
senao
    retorne "OPCIONAL"
FIMSE
FIMSE
FIMFUNCAO

// Exemplo de uso
VAR
anoNascimento: inteiro
situacaoVoto: caractere

INICIO

anoNascimento <- 2000
situacaoVoto <- verificarVoto(anoNascimento)
escreva("Situação de voto: ", situacaoVoto)

FIMALGORITMO