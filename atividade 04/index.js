const nome = prompt("Qual seu nome?")
let visitou = prompt("Você visitou alguma cidade? (Sim/Não)")

let cidades = []


while (visitou === 'Sim') {
  var cidade = prompt("Qual o nome da cidade?")
  cidades.push(cidade)
  visitou = prompt("Você visitou mais alguma cidade? (Sim/Não)")  
}

alert(nome + " Visitou " + cidades.length + " Cidades, sendo elas: " + cidades)