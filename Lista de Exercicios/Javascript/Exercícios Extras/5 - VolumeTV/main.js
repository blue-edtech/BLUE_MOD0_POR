// Função que recebe um array de modificação no volume e retorna o volume final
function calculateFinalVolume(modifications) {
    let volume = 0;
    let T = modifications.length;
    
    // Loop que percorre cada modificação e atualiza o volume final de acordo com o valor
    for (let i = 0; i < T; i++) {
    volume += modifications[i];
    // Verifica se o volume ficou abaixo de 0 e atualiza para 0 caso afirmativo
        if (volume < 0) {
            volume = 0;
        } else if (volume > 100) {
            // Verifica se o volume ficou acima de 100 e atualiza para 100 caso afirmativo
            volume = 100;
        }
    }
    
// Retorna o volume final após as modificações
return volume;
}

// Array de modificações no volume
const modifications = [50, 4, 11, 20, -15, -13];

// Calcula o volume final a partir das modificações e imprime o resultado
const finalVolume = calculateFinalVolume(modifications);
console.log(`O volume final é: ${finalVolume}`); 