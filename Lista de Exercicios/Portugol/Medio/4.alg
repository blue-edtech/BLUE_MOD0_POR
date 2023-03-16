VAR
nota: real

INICIO
escreva("Digite a nota do aluno: ")
leia(nota)

se (nota < 0) ou (nota > 10) entao
escreva("Nota inválida! A nota deve estar entre 0.0 e 10.0")
senao
se (nota < 6.0) entao
escreva("Nota F")
senao
se (nota < 7.0) entao
escreva("Nota D")
senao
se (nota < 8.0) entao
escreva("Nota C")
senao
se (nota < 9.0) entao
escreva("Nota B")
senao
escreva("Nota A")

FIMSE
FIMSE
FIMSE
FIMSE
FIMSE
FIMALGORITMO