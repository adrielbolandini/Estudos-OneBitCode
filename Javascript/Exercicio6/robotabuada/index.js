let number = parseFloat(prompt("Insira o número para se calcular a tabuada de 1 a 20"))
let multiplicado = ''

for (let i=0; i<=20; i++) {
  multiplicado += `\n${i} x ${number} = ${number*i}`
}

alert("O resultado da multiplicação entre " + number + " de 0 a 20 é:" + multiplicado)