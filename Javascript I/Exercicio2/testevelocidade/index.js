let name1 = prompt('Insira o nome do primeiro veículo')
let speed1 = prompt('Insira a velocidade do primeiro veículo')

let name2 = prompt('Insira o nome do segundo veículo')
let speed2 = prompt('Insira a velocidade do segundo veículo')

if (speed1 > speed2 ) {
    alert(`O ${name1} está mais rápido que o ${name2}`)
} else
if (speed2 > speed1 ) {
    alert(`O ${name2} está mais rápido que o ${name1}`)
} else
if (speed1 == speed2 ) {
    alert(`Os veículos ${name1} e ${name2} possuem a mesma velocidade`)
} else {
    alert ('Insira os dados corretamente')
}