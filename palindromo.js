
// Solução 1:
function verificaPalindromo(string) {
  // Verifica se é empty, null ou undefined
  if(!string) return "string inexistente";

  // Separa as letras, como se transforma em um array
  // podemos usar o reverse e depois junta tudo no join
  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("cara"));

// Solução 2:
function verificaPalindromo2(string) {
  if (!string) return "string inexistente";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificaPalindromo2("abba"));
console.log(verificaPalindromo2("teste"));