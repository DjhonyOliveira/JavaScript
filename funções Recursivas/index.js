// function recursiva é uma função que chama ela mesma

function dividir(num) {
    console.log(num)
    if(num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

// dividir(40) 

// esta validando se o numero usado para chamar a função é dividido por 2, caso seja ele continua executando a função que é chamada pelo if
// até retornar como false a validação


// fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num) {
    console.log("Numero: " + num)
    if (num == 0) { // caso base
        return 1
    } else if (num == 1) {
        return 1
    } else {
        console.log(num + " * !" + (num -1))
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))