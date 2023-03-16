// Lê os valores de entrada para cada régua de tomadas, separados por espaço, e atribui a cada um deles a uma variável
const [t1, t2, t3, t4] = prompt('Digite o número de tomadas em cada régua, separados por espaço.').split(' ').map(Number);

// Realiza a soma de todos os valores lidos e subtrai três, pois as três primeiras réguas são conectadas em outra régua,
// portanto, não serão utilizadas separadamente, e assim a quantidade total de tomadas é a soma de todas as tomadas menos três.
const total = t1 + t2 + t3 + t4 - 3;

// Imprime o resultado da soma acima calculada, que representa o número máximo de notebooks que podem ser conectados simultaneamente.
console.log(total);