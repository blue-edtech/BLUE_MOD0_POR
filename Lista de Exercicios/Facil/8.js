// Define a variável que armazenará o valor em real digitado pelo usuário
let valorEmReal = parseFloat(prompt("Digite o valor em reais:"));

// Define as variáveis de cotação das moedas
const cotacaoDolar = 5.23;
const cotacaoEuro = 6.22;
const cotacaoLibraEsterlina = 7.31;
const cotacaoDolarCanadense = 4.19;
const cotacaoPesoArgentino = 0.054;
const cotacaoPesoChileno = 0.007;

// Realiza as conversões do valor em real para as outras moedas e armazena em variáveis
let valorEmDolar = valorEmReal / cotacaoDolar;
let valorEmEuro = valorEmReal / cotacaoEuro;
let valorEmLibraEsterlina = valorEmReal / cotacaoLibraEsterlina;
let valorEmDolarCanadense = valorEmReal / cotacaoDolarCanadense;
let valorEmPesoArgentino = valorEmReal / cotacaoPesoArgentino;
let valorEmPesoChileno = valorEmReal / cotacaoPesoChileno;

// Exibe os valores convertidos no console, formatados para exibir 2 casas decimais
console.log("Valor em dólar: US$" + valorEmDolar.toFixed(2));
console.log("Valor em euro: €" + valorEmEuro.toFixed(2));
console.log("Valor em libra esterlina: £" + valorEmLibraEsterlina.toFixed(2));
console.log("Valor em dólar canadense: CAD$" + valorEmDolarCanadense.toFixed(2));
console.log("Valor em peso argentino: $" + valorEmPesoArgentino.toFixed(2));
console.log("Valor em peso chileno: $" + valorEmPesoChileno.toFixed(2));