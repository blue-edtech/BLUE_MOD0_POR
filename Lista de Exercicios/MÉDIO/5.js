// Pedir para o usuário informar o salário atual
let salario = parseFloat(prompt("Informe o salário atual do colaborador: "));

// Verificar em qual faixa salarial o colaborador se encontra e calcular o valor do aumento
let percentualAumento, valorAumento;

if (salario <= 280) {
  percentualAumento = 20;
  valorAumento = salario * 0.2;
} else if (salario <= 700) {
  percentualAumento = 15;
  valorAumento = salario * 0.15;
} else if (salario <= 1500) {
  percentualAumento = 10;
  valorAumento = salario * 0.1;
} else {
  percentualAumento = 5;
  valorAumento = salario * 0.05;
}

// Calcular o novo salário com o aumento aplicado
let novoSalario = salario + valorAumento;

// Exibir na tela o salário antes do reajuste, o percentual de aumento aplicado, o valor do aumento e o novo salário
console.log(`Salário antes do reajuste: R$ ${salario.toFixed(2)}`);
console.log(`Percentual de aumento aplicado: ${percentualAumento}%`);
console.log(`Valor do aumento: R$ ${valorAumento.toFixed(2)}`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
