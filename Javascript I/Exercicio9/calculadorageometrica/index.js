let opcao, base,raio,lado,altura, baseMaior, baseMenor = ""

function areaTriangulo(base,altura) {
  return ((base*altura)/2)
}

function areaRetangulo(base,altura) {
  return (base*altura)
}

function areaQuadrado(lado) {
  return (lado*lado)
}

function areaTrapezio(baseMaior,baseMenor, altura) {
  return ((baseMaior+baseMenor)*altura/2)
}

function areaCirculo(raio) {
  return (Math.PI*raio*raio)
}

do {
  opcao = prompt(
    "Bem-vindo a Calculadora Geométrica." +
    "\n\nEscolha uma opção:\n1. Área do triângulo\n2. Área do Retângulo\n3. Área do Quadrado" +
    "\n4. Área do trapézio\n5. Área do Círculo\n6. Sair"
  )

  switch (opcao) {
    case "1":
      base = parseFloat(prompt("Insira a base"))
      altura = parseFloat(prompt("Insira a altura"))
      alert("A área do triângulo de base "+ base +" e altura "+ altura + " é " + areaTriangulo(base,altura))
      break
    case "2":
      base = parseFloat(prompt("Insira a base"))
      altura = parseFloat(prompt("Insira a altura"))
      alert("A área do retângulo de base "+ base +" e altura "+ altura + " é " + areaRetangulo(base,altura))
      break
    case "3":
      lado = parseFloat(prompt("Insira a lado"))
      alert("A área do quadrado de lado "+ lado + " é " + areaQuadrado(lado))
      break
    case "4":
      baseMaior = parseFloat(prompt("Insira a Base Maior"))
      baseMenor = parseFloat(prompt("Insira a Base Menor"))
      altura = parseFloat(prompt("Insira a altura"))
      alert("A área do trapézio de Base Maior "+ baseMaior + ", Base Menor "+ baseMenor + " e altura "+ altura + " é " + areaTrapezio(baseMaior,baseMenor, altura))
      break
    case "5":
      raio = parseFloat(prompt("Insira a raio"))
      alert("A área do círculo de raio "+ raio + " é " + areaCirculo(raio))
      break  
    case "6":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "6");