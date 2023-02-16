//le as entradas do usuario
const n = Number(prompt("Digite o tamanho da sequência:"));
const sequencia = prompt("Digite a sequência de 0s e 1s:").split(" ").map(Number);

let padrao100 = 0;

//conta quantas vezes o padrao aparece e armazena na variavel padrao100
for (let i = 0; i < n - 2; i++) {
  if (sequencia[i] === 1 && sequencia[i + 1] === 0 && sequencia[i + 2] === 0) {
    padrao100++;
  }
}

//exibe o numero de vezes
console.log(padrao100);