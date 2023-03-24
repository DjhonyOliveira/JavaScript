function calcularMedia (a, b) {
    const media = (a + b) / 2
    return media // se usa para retornar valores fora da function
}

const resultado = calcularMedia(7, 2) // precisa ser chamado por meio de uma variavel para conseguir executar o resultado dentro da função, mesmo usando return

console.log(resultado)


// return não rpecisa chamar especificamente uma variavel, o proprio return pode ser o resultado
// pode ser usado para chamar funções dentro de funções
// pode ser usada apenas uma vez por função
// uma vez que é adicionao o return e adicionado codigo a baixo, o que esta a baixo nunca será executado, ele literalmente para a execução


// return pode ser usado mais de uma vez por function apenas usando validação if, exemplo a baixo


function idades (idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(idades(26))  // pode ser chamada a função dentro de outra função nativa