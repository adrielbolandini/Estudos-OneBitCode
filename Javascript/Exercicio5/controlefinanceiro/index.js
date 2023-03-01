let opcao = ""
let saldo, operacao = null

saldo = parseFloat(prompt("Insira o saldo inicial (R$)"))

do {
    opcao = prompt(
        "Seja bem-vindo(a) ao Banco Mundial!\n" +
        "\nVocê possui atualmente " + saldo + " reais" + 
        "\nEscolha uma das opções abaixo:" +
        "\n1 - Depositar" +
        "\n2 - Sacar" +
        "\n3 - Encerar"
    )
    switch (opcao) {
        case "1":
          operacao = parseFloat(prompt("Quanto reais você vai depositar?"))
          saldo = saldo + operacao
          alert(`Você possui ${saldo} reais`)
          break
        case "2":
          operacao = parseFloat(prompt("Quanto reais você vai retirar?"))
          saldo = saldo - operacao
          alert(`Você possui ${saldo} reais`)
          break
        case "3":
          alert("Você encerrou o programa")
          break
        default:
          alert("Entrada inválida! Escolha uma das cinco opções.")
    }
} while (opcao !== "3");

