VAR
valorEmReal, cotacaoDolar, cotacaoEuro, cotacaoLibraEsterlina, cotacaoDolarCanadense, cotacaoPesoArgentino, cotacaoPesoChileno, valorEmDolar, valorEmEuro, valorEmLibraEsterlina, valorEmDolarCanadense, valorEmPesoArgentino, valorEmPesoChileno: real

INICIO

escreva("Digite o valor em reais: ")
leia(valorEmReal)

// Define as variáveis de cotação das moedas
cotacaoDolar <- 5.23
cotacaoEuro <- 6.22
cotacaoLibraEsterlina <- 7.31
cotacaoDolarCanadense <- 4.19
cotacaoPesoArgentino <- 0.054
cotacaoPesoChileno <- 0.007

// Realiza as conversões do valor em real para as outras moedas e armazena em variáveis
valorEmDolar <- valorEmReal / cotacaoDolar
valorEmEuro <- valorEmReal / cotacaoEuro
valorEmLibraEsterlina <- valorEmReal / cotacaoLibraEsterlina
valorEmDolarCanadense <- valorEmReal / cotacaoDolarCanadense
valorEmPesoArgentino <- valorEmReal / cotacaoPesoArgentino
valorEmPesoChileno <- valorEmReal / cotacaoPesoChileno

// Exibe os valores convertidos no console, formatados para exibir 2 casas decimais
Escreval("Valor em dólar: US$", valorEmDolar:2:2)
Escreval("Valor em euro: €", valorEmEuro:2:2)
Escreval("Valor em libra esterlina: £", valorEmLibraEsterlina:2:2)
Escreval("Valor em dólar canadense: CAD$", valorEmDolarCanadense:2:2)
Escreval("Valor em peso argentino: $", valorEmPesoArgentino:2:2)
Escreval("Valor em peso chileno: $", valorEmPesoChileno:2:2)

FIMALGORITMO