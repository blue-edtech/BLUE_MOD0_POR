// Lê o número de dias e as quantidades de acessos de cada dia
const n = Number(prompt("Digite o número de dias: "));
const acessosPorDia = [];
for (let i = 0; i < n; i++) {
acessosPorDia.push(Number(prompt(`Digite o número de acessos do dia ${i+1}: `)));
}

// Calcula o total de acessos até o momento e a quantidade de dias necessários
let totalAcessos = 0;
let diasNecessarios = 0;
while (totalAcessos < 1000000) {
totalAcessos += acessosPorDia[diasNecessarios];
diasNecessarios++;
}

// Imprime a quantidade de dias necessários para atingir 1 milhão de acessos
console.log(diasNecessarios);