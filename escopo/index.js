let pokemon = "Charmander"

function evoluir() {
    pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// variaveis fora de funções podem ser manipuladas posteriormente dentro de funções
// porém variaveis criadas dentro de escopos internos (if, for, function) não conseguem ser usadas no escopo mais externo
// variaveis declaradas como "var" quando declaradas dentro de um "if" por ex, são as unicas que consegue usar no escopo mais esterno, por conta disso não é recomendada

function avaliarNota () {
    if (nota > 60) {
        var aprovado = true
        let situacao = "Aprovado"
    } else {
        var aprovado = false
        let situacao = "reprovado"
    }

    console.log(nota)
    console.log(aprovado) // irá retornar certinho por ter usado um "var" na declaração
    console.log(situacao) // não irá retornar pois a declaração esta dentro de uma condição onde este console.log esta fora do "if" (escopo externo)
}

avaliarNota(70)
avaliarNota(49)

// diferença entre "let" e "var"


console.log(nome) // irá retornar como undefined
console.log(nome) // irá gerar erro

var nome = "Djonatan"  // "var" pode ser declarado após uma solicitação de execução, porém irá retornar como undefined
let sobrenome = "Oliveira" // "let" não pode ser declarado depois da solicitação de retorno, irá gerar erro

console.log(nome) // retorno normal
console.log(nome) // retorno normal