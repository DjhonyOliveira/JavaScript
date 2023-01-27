const nome = prompt("Qual seu nome?")
let visitou = prompt("Você visitou alguma cidade? (Sim/Não)")

let array = []


while (visitou === 'Sim') {
  var cidade = prompt("Qual o nome da cidade?")
  array.push(cidade)
  visitou = prompt("Você visitou alguma cidade? (Sim/Não)")  
}
nu
