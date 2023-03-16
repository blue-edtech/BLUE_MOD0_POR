const input = prompt('Digite os valores de Cv, Ce, Cs, Fv, Fe e Fs separados por espaço:');
const [Cv, Ce, Cs, Fv, Fe, Fs] = input.split(' ').map(Number);

// Calcula a pontuação de cada time
const CP = Cv * 3 + Ce;
const FP = Fv * 3 + Fe;

// Se a pontuação do Cormengo é maior, então ele é o melhor classificado
if (CP > FP) {
  console.log('C');
}
// Se a pontuação do Flaminthians é maior, então ele é o melhor classificado
else if (FP > CP) {
  console.log('F');
}
// Se as pontuações são iguais, verifica o saldo de gols
else {
  if (Cs > Fs) {
    console.log('C');
  } else if (Fs > Cs) {
    console.log('F');
  } else {
    console.log('=');
  }
}
