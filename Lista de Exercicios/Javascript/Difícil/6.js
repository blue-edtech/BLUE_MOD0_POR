function jogarDados() {
    const numRodadas = prompt("Quantas rodadas você quer jogar?");
    const numJogadores = prompt("Quantos jogadores vão jogar?");
    const jogadores = [];
  
    // Loop para criar um objeto para cada jogador, com o nome e um array vazio para os resultados de cada rodada
    for (let i = 0; i < numJogadores; i++) {
      const nome = prompt(`Nome do jogador ${i + 1}:`);
      jogadores.push({ nome, resultados: [] });
    }
  
    // Loop para jogar o dado em cada rodada para cada jogador
    for (let i = 0; i < numRodadas; i++) {
      console.log(`\nRodada ${i + 1}:`);
  
      for (let j = 0; j < numJogadores; j++) {
        const resultado = Math.floor(Math.random() * 6) + 1;
        jogadores[j].resultados.push(resultado);
        console.log(`${jogadores[j].nome} jogou o dado e tirou ${resultado}.`);
      }
    }
  
    // Ordena os jogadores de acordo com a soma dos resultados de cada rodada
    jogadores.sort((a, b) =>
      b.resultados.reduce((acc, cur) => acc + cur, 0) -
      a.resultados.reduce((acc, cur) => acc + cur, 0)
    );
  
    console.log("\nResultados finais:");
  
    jogadores.forEach(jogador => {
      const total = jogador.resultados.reduce((acc, cur) => acc + cur, 0);
      console.log(`${jogador.nome} tirou ${total} pontos.`);
    });
  
    // Mostra o nome do jogador com o maior total de pontos como o grande campeão
    console.log(`${jogadores[0].nome} é o grande campeão!`);
  }
  
  // Chama a função jogarDados para iniciar o jogo
  jogarDados();
  