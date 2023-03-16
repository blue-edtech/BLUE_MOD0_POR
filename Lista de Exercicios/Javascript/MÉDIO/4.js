const nota = parseFloat(prompt("Digite a nota do aluno: "));

if (nota < 0 || nota > 10) {
  console.log("Nota inválida! A nota deve estar entre 0.0 e 10.0");
} else if (nota < 6.0) {
  console.log("Nota F");
} else if (nota < 7.0) {
  console.log("Nota D");
} else if (nota < 8.0) {
  console.log("Nota C");
} else if (nota < 9.0) {
  console.log("Nota B");
} else {
  console.log("Nota A");
}
