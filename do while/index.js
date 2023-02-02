let velocidade = 0

do { // irá retornar pelo menos uma vez o primeiro bloco de regra mesmo o while sendo false
    alert("A velocidade do veiculo é " + velocidade + " Km/h")
    velocidade -= 20
} while (velocidade > 0)

alert("Velocidade final: " + velocidade + " Km/h")