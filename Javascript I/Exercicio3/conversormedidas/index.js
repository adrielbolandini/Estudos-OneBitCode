let value = prompt('Insira o valor em metros')

let conversor = parseFloat(prompt(
    'Selecione a unidade a ser convertida:\n 1- milimetro (mm)\n 2- cetimetro (cm)\n 3- decímetro (dm)\n 4- decâmetro (dam)\n 5- hectômetro (hm)\n 6- quilômetro (km)'))

switch (conversor){
    case 1:
        value = value*1000
        break
    case 2:
        value = value*100
        break
    case 3:
        value = value*10
        break
    case 4:
        value = value*0,1
        break
    case 5:
        value = value*0,01
        break
    case 6:
        value = value*0,001
        break
    default:
        value = "Opção Inválida"
}

alert(`O valor da conversão é: ${value}`)