let name1 = prompt('Insira o nome do atacante')
let attackpower = parseFloat(prompt('Insira o poder de ataque do primeiro personagem'))

let name2 = prompt('Insira o nome do defensor')
let defensepower = parseFloat(prompt('Insira o poder de defesa do defensor'))
let lifepoints = parseFloat(prompt('Insira a quantidade de pontos de vida do defensor'))
let shield = confirm('O defensor possui escudo?')

let damage = null;

if (attackpower > defensepower && shield === false) {
    damage = attackpower - defensepower
} else 
if (attackpower > defensepower && shield === true) {
    damage = (attackpower - defensepower)/2
} else
if (attackpower < defensepower){
    damage = 0
} else {
    alert('Valores Inválidos!')
}

if (lifepoints - damage > 0) {
    lifepoints = lifepoints - damage;
    alert(`O defensor continua vivo após receber ${damage} pontos de dano ele possui ${lifepoints} pontos de vida`)
} else if (lifepoints - damage <= 0) {
    alert(`O defensor foi eliminado após receber ${damage} pontos de dano`)
} else {
    alert('Valores Inválidos!')
}