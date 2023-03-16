VAR
    numRounds, playerChoice, computerChoice, winner, playerWins, computerWins: inteiro
    playAgain: caractere

funcao getComputerChoice(): caractere
    var choices: vetor[0..2] de caractere
        randomIndex: inteiro
    inicio
        choices[0] <- "pedra"
        choices[1] <- "papel"
        choices[2] <- "tesoura"
        randomIndex <- aleatorio(0, 2)
        retorne choices[randomIndex]
    fimfuncao

funcao getPlayerChoice(): caractere
    var playerChoice: caractere
    inicio
        escreva("Escolha pedra, papel ou tesoura: ")
        leia(playerChoice)
        retorne playerChoice
    fimfuncao

funcao playRound(playerChoice: caractere, computerChoice: caractere): caractere
    inicio
        se playerChoice = computerChoice entao
            retorne "empate"
        senao
        se (playerChoice = "pedra" e computerChoice = "tesoura") ou
                (playerChoice = "papel" e computerChoice = "pedra") ou
                (playerChoice = "tesoura" e computerChoice = "papel") entao
            retorne "jogador"
        senao
            retorne "computador"
        fimse
    fimfuncao

procedimento playGame(numRounds: inteiro)
    inicio
        playerWins <- 0
        computerWins <- 0
        para i <- 1 ate numRounds faca
            playerChoice <- getPlayerChoice()
            computerChoice <- getComputerChoice()
            escrevaL("Rodada ", i, ":")
            escrevaL("Jogador escolheu: ", playerChoice)
            escrevaL("Computador escolheu: ", computerChoice)
            winner <- playRound(playerChoice, computerChoice)
            se winner = "jogador" entao
                escrevaL("Jogador venceu a rodada!")
                playerWins <- playerWins + 1
            senao
            se winner = "computador" entao
                escrevaL("Computador venceu a rodada!")
                computerWins <- computerWins + 1
            senao
                escrevaL("A rodada empatou!")
            fimse
        fimpara
        escrevaL("Resultados após ", numRounds, " rodadas:")
        escrevaL("Jogador: ", playerWins, " vitória(s)")
        escrevaL("Computador: ", computerWins, " vitória(s)")
        se playerWins > computerWins entao
            escrevaL("O jogador é o grande campeão!")
        senao
        se playerWins < computerWins entao
            escrevaL("O computador é o grande campeão!")
        senao
            escrevaL("A competição terminou empatada!")
        fimse
    fimfuncao

// Início do jogo
repita
    escreva("Quantas rodadas deseja jogar? ")
    leia(numRounds)
    playGame(numRounds)
    escreva("Deseja jogar novamente? (s/n) ")
    leia(playAgain)
ate playAgain <> "s"

FIMALGORITMO