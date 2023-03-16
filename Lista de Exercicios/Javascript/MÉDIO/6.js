const numeros = [];

while (true) {
  const numero = Number(prompt('Digite um número (0 para sair): '));
  if (numero === 0) break;
  if (!numeros.includes(numero)) numeros.push(numero);
}

numeros.sort((a, b) => a - b);
console.log(`Valores únicos digitados em ordem crescente: ${numeros.join(', ')}`);
