const entrada1 = prompt("Informe o primeiro número:")  /* "prompt" sempre retona em string(texto) */
const entrada2 = prompt("Informe o segundo numero:")

const x = parseFloat(entrada1)  /* parseFloat transforma string em number */ 
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao 
)

/* foi necessário transformar a string em number neste caso pois se não a soma iria concatenar
no caso se pegase 1+1 iria transformar em 11, pois string são apenas concatenadas pois é campo de texto */