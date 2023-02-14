// Função para gerar escolha aleatória do computador
function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  // Função para obter a escolha do jogador
  function getPlayerChoice() {
    const playerChoice = prompt("Escolha pedra, papel ou tesoura: ");
    return playerChoice.toLowerCase();
  }
  
  // Função para jogar uma rodada
  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "empate";
    } else if (
      (playerChoice === "pedra" && computerChoice === "tesoura") ||
      (playerChoice === "papel" && computerChoice === "pedra") ||
      (playerChoice === "tesoura" && computerChoice === "papel")
    ) {
      return "jogador";
    } else {
      return "computador";
    }
  }
  
  // Função para jogar várias rodadas
  function playGame(numRounds) {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 1; i <= numRounds; i++) {
      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
      console.log(`Rodada ${i}:`);
      console.log(`Jogador escolheu: ${playerChoice}`);
      console.log(`Computador escolheu: ${computerChoice}`);
      const winner = playRound(playerChoice, computerChoice);
      if (winner === "jogador") {
        console.log("Jogador venceu a rodada!");
        playerWins++;
      } else if (winner === "computador") {
        console.log("Computador venceu a rodada!");
        computerWins++;
      } else {
        console.log("A rodada empatou!");
      }
    }
    console.log(`Resultados após ${numRounds} rodadas:`);
    console.log(`Jogador: ${playerWins} vitória(s)`);
    console.log(`Computador: ${computerWins} vitória(s)`);
    if (playerWins > computerWins) {
      console.log("O jogador é o grande campeão!");
    } else if (playerWins < computerWins) {
      console.log("O computador é o grande campeão!");
    } else {
      console.log("A competição terminou empatada!");
    }
  }
  
  // Início do jogo
  let playAgain = true;
  while (playAgain) {
    const numRounds = parseInt(prompt("Quantas rodadas deseja jogar? "));
    playGame(numRounds);
    const playAgainResponse = prompt("Deseja jogar novamente? (s/n) ");
    playAgain = (playAgainResponse.toLowerCase() === 's');
  }
  