Var
// Seção de Declarações das variáveis 
opcao: inteiro
continuar: logico

INICIO
// Seção de Comandos, procedimento, funções, operadores, etc... 
continuar <- verdadeiro
Enquanto continuar faca
// Exibe o menu de opções
escreval("Menu de opções:")
escreval("1 - Cadastrar novo cliente")
escreval("2 - Listar todos os clientes")
escreval("3 - Pesquisar cliente por nome")
escreval("4 - Sair do programa")

// Lê a opção escolhida pelo usuário

leia(opcao)

// Verifica qual opção foi escolhida e executa a ação correspondente
se opcao = 1 ENTAO
escreval("Opção escolhida: Cadastrar novo cliente")
// Aqui ficaria o código para cadastrar um novo cliente
senao
se opcao = 2 ENTAO
escreval("Opção escolhida: Listar todos os clientes")
// Aqui ficaria o código para listar todos os clientes
senao
se opcao = 3 ENTAO
escreval("Opção escolhida: Pesquisar cliente por nome")
// Aqui ficaria o código para pesquisar um cliente por nome
senao
se opcao = 4 ENTAO
escreval("Opção escolhida: Sair do programa")
continuar <- falso
senao
// Se a opção escolhida for inválida, exibe uma mensagem de erro e retorna ao início do loop
escreval("Opção inválida! Escolha uma opção válida.")
FIMSE
FIMSE
FIMSE
FIMSE

FIMENQUANTO
FIMALGORITMO
