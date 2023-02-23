let array = []

// adicionar elementos
// push -- adiciona sempre no final do array
array.push()



//unshift -- adiciona sempre no inicio do array
array.unshift()



// remover elementos
// pop -- remove o ultimo elemento do array
const ultimoElemento = array.pop()
console.log(array)
console.log(ultimoElemento)



// shift -- remove elementos no inicio do array
const primeiroElemento = array.shift()
console.log(array)
console.log(primeiroElemento)



// pesquisar elementos
// includes
const inclui = array.includes("") // valida se o valor dentro da string existe no array, retorna entre false ou true



// indexof -- retorna o N° do indice do array
const indice = array.indexOf("") // pega o numero do indice da string ou number dentro da função (caso exista)


// cortar e concatenar
// slice
const hobbits = array.slice(0, 4)
const outros = array.slice(-4)
console.log(array)
console.log(hobbits)


// concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)



// substituição dos elementos
// splice
const removidos = sociedade.splice(indice, 1, "Gandolf, o Cinzento")
console.log(sociedade)
console.log(removidos)



// iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " Se encontra na possição " + indice)
}