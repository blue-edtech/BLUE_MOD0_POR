VAR
    listaItens: vetor[1..100] de inteiro
    tamanho, num, i, j: inteiro
    jaExiste: logico

INICIO
    tamanho <- 0

   repita
        escreva("Digite um número (0 para sair): ")
        leia(num)

        se num=0 entao
           interrompa
           escreval("entrou")
        fimse
        
        jaExiste <- falso
        para i de 1 ate tamanho faca
            se listaItens[i] = num entao
                jaExiste <- verdadeiro
                interrompa
            fimse
        fimpara
        
        se nao jaExiste entao
            tamanho <- tamanho + 1
            listaItens[tamanho] <- num
        fimse

   ate falso



    para i de 1 ate tamanho faca
        para j de i + 1 ate tamanho faca
            se listaItens[j] < listaItens[i] entao
                num <- listaItens[i]
                listaItens[i] <- listaItens[j]
                listaItens[j] <- num
            fimse
        fimpara
    fimpara

    escreva("Valores únicos digitados em ordem crescente: ")
    para i de 1 ate tamanho faca
        escreva(listaItens[i], " ")
    FIMPARA
FIMALGORITMO