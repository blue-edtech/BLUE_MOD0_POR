VAR
salario, novoSalario, percentualAumento, valorAumento: real

INICIO
// Pedir para o usuário informar o salário atual
escreva("Informe o salário atual do colaborador: ")
leia(salario)

// Verificar em qual faixa salarial o colaborador se encontra e calcular o valor do aumento

se (salario <= 280) entao
percentualAumento <- 20
valorAumento <- salario * 0.2
senao
se (salario <= 700) entao
percentualAumento <- 15
valorAumento <- salario * 0.15
senao
se (salario <= 1500) entao
percentualAumento <- 10
valorAumento <- salario * 0.1
senao
percentualAumento <- 5
valorAumento <- salario * 0.05
FIMSE
FIMSE
FIMSE

// Calcular o novo salário com o aumento aplicado
novoSalario <- salario + valorAumento

// Exibir na tela o salário antes do reajuste, o percentual de aumento aplicado, o valor do aumento e o novo salário
escreval("Salário antes do reajuste: R$ ", salario)
escreval("Percentual de aumento aplicado: ", percentualAumento, "%")
escreval("Valor do aumento: R$ ", valorAumento)
escreval("Novo salário: R$ ", novoSalario)

FIMALGORITMO