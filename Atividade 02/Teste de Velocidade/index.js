const nome01 = prompt("Qual o nome do primeiro Veiculo:")
const velocidade01 = prompt("Qual a Velocidade do Veiculo?")

const nome02 = prompt("Qual o nome do segundo Veiculo?")
const velocidade02 = prompt("Qual a Velocidade do Veiculo?")

if (velocidade01 > velocidade02){
    alert(nome01 + " é mais rapido que " + nome02)
} else if (velocidade02 > velocidade01){
    alert(nome02 + " é mais rapido que " + nome01)
} else {
    alert(nome01 + " tem a mesma velocidade que " + nome02)
}