// mesma ideia do if, mas valida em cima de tudo sem usar um else e quando o case for numérico, precisa transformar a constante em numérico também
// pois o sistema sempre vai pegar ou string ou number conforme a sintaxe usada no case

const resultado = ("Escolha entre a)\nb)\nc)")

switch ("b") {
    case "a" :
        alert ("O resulltado é 'A'")
        break
    case "b" :
        alert("O resultado é 'B'")
        break
    case "c" :
        alert("O resultado é 'C'")
        break
    default:
        alert("finalizando...")
}


// exemplo em numérico


const resultado1 = ("Escolha entre a)\nb)\nc)")

const resultadoNumerico = parseFloat(resultado1)

switch ("b") {
    case "a" :
        alert ("O resulltado é 'A'")
        break
    case "b" :
        alert("O resultado é 'B'")
        break
    case "c" :
        alert("O resultado é 'C'")
        break
    default:
        alert("finalizando...")
}