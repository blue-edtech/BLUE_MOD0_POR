// Pede o valor do saque para o usuário
let valorSaque = parseInt(prompt("Qual valor você deseja sacar? (Valor mínimo: 10; Valor máximo: 600)"));

// Verifica se o valor de saque é válido
if (valorSaque < 10 || valorSaque > 600) {
  console.log("Valor de saque inválido. O valor mínimo é 10 e o máximo é 600.");
} else {
  // Define as notas disponíveis
  const notas = [100, 50, 10, 5, 2, 1];
  
  // Inicializa o objeto que vai armazenar a quantidade de notas de cada valor
  let notasQuantidade = {
    100: 0,
    50: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0
  };
  
  // Percorre as notas disponíveis e verifica quantas notas são necessárias para o valor do saque
  for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    
    while (valorSaque >= nota) {
      valorSaque -= nota;
      notasQuantidade[nota]++;
    }
  }
  
  // Exibe a quantidade de notas de cada valor
  console.log("Notas fornecidas:");
  for (let nota in notasQuantidade) {
    if (notasQuantidade[nota] > 0) {
      console.log(notasQuantidade[nota] + " nota(s) de R$ " + nota);
    }
  }
}
