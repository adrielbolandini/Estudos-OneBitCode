let name = window.prompt("Insira o nome")
let surname = window.prompt("Insira o sobrenome")
let area = window.prompt("Insira o campo de estudo")
let birthYear = window.prompt("Insira o ano de nascimento")

let year = new Date(); 

let age = parseFloat(year.getFullYear()) - parseFloat(birthYear);

window.confirm(`Você é ${name} ${surname}, com ${age} anos e da area ${area}`)