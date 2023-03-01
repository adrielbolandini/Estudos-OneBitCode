let palavra = prompt("Insira uma palavra")
let palavraInversa =''
palavra = palavra.toLowerCase()

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInversa += palavra[i]
}

if (palavra === palavraInversa) {
  alert("A palavra " + palavra + " é um palíndromo")
} else {
  alert("A palavra " + palavra + " não é um palíndromo e lida de trás para frente é: " + palavraInversa)
}