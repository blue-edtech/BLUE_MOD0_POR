// Função recursiva para calcular o número de pedaços de um chocolate
// L é o tamanho do lado do quadrado de chocolate

function countChocolatePieces(L) {
    // Caso base: se o tamanho do lado do quadrado for menor do que 2, retorna 1
    if (L < 2) {
        return 1;
    }
    // Caso contrário, chama a função recursivamente com metade do tamanho do lado
    // e multiplica o resultado por 4 (já que o chocolate é dividido em 4 pedaços iguais a cada corte)
    return 4 * countChocolatePieces(L/2);
}
    
// Lê o tamanho do lado do quadrado de chocolate a partir de uma entrada do usuário
const L = parseInt(prompt("Informe o número de centímetros do lado do quadrado: "));

// Chama a função para calcular o número de pedaços de chocolate e armazena o resultado na variável pieces
const pieces = countChocolatePieces(L);

// Exibe o resultado na tela
console.log(`O número de pedaços ao final do processo é: ${pieces}`);