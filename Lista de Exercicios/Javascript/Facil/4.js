// Cria um loop infinito para que o usuário possa escolher as opções várias vezes
while (true) {
  // Exibe o menu de opções
  console.log("Menu de opções:");
  console.log("1 - Cadastrar novo cliente");
  console.log("2 - Listar todos os clientes");
  console.log("3 - Pesquisar cliente por nome");
  console.log("4 - Sair do programa");

  // Lê a opção escolhida pelo usuário
  const opcao = parseInt(prompt("Escolha uma opção:"));

  // Verifica qual opção foi escolhida e executa a ação correspondente
  if (opcao === 1) {
    console.log("Opção escolhida: Cadastrar novo cliente");
    // Aqui ficaria o código para cadastrar um novo cliente
  } else if (opcao === 2) {
    console.log("Opção escolhida: Listar todos os clientes");
    // Aqui ficaria o código para listar todos os clientes
  } else if (opcao === 3) {
    console.log("Opção escolhida: Pesquisar cliente por nome");
    // Aqui ficaria o código para pesquisar um cliente por nome
  } else if (opcao === 4) {
    console.log("Opção escolhida: Sair do programa");
    // Encerra o loop e finaliza o programa
    break;
  } else {
    // Se a opção escolhida for inválida, exibe uma mensagem de erro e retorna ao início do loop
    console.log("Opção inválida! Escolha uma opção válida.");
  }
}
