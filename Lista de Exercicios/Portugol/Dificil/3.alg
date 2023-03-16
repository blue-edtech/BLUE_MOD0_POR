VAR
numeroAleatorio, numeroEscolhido : inteiro

INICIO
// Gerando um número aleatório entre 0 e 10
numeroAleatorio <- randi(10)

// Pedindo ao usuário para adivinhar o número
escreva("Digite um número entre 0 e 10: ")
leia(numeroEscolhido)

// Verificando se o número escolhido é igual ao número aleatório gerado
se (numeroEscolhido = numeroAleatorio) então
escreva("Parabéns! Você acertou o número.")
senão
escreva("Que pena! O número correto era ", numeroAleatorio, ".")
FIMSE

FIMALGORITMO