function verificarVoto(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
  
    if (idade < 16) {
      return "NEGADO";
    } else if (idade >= 18 && idade <= 70) {
      return "OBRIGATÓRIO";
    } else {
      return "OPCIONAL";
    }
  }
  
  // Exemplo de uso
  const anoNascimento = 2000;
  const situacaoVoto = verificarVoto(anoNascimento);
  console.log(`Situação de voto: ${situacaoVoto}`);
  