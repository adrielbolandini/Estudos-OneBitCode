let opcao = ""

do {
    opcao = prompt(
        "Seja bem-vindo(a)!\n" +
        "\nEscolha uma das opções abaixo:" +
        "\n1 - Opção Um" +
        "\n2 - Opção Dois" +
        "\n3 - Opção Três" +
        "\n4 - Opção Quatro" +
        "\n5 - Encerar"
    )
    switch (opcao) {
        case "1":
          alert("Você escolheu a opção 1.")
          break
        case "2":
          alert("Você escolheu a opção 2.")
          break
        case "3":
          alert("Você escolheu a opção 3.")
          break
        case "4":
          alert("Você escolheu a opção 4.")
          break
        case "5":
          alert("Você encerrou o programa")
          break
        default:
          alert("Entrada inválida! Escolha uma das cinco opções.")
    }
} while (opcao !== "5");

