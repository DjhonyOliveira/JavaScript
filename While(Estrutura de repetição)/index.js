let velocidade = 80

while (velocidade > 0) {  // gera um looping no codigo até o resultado da considção ser falso ou encontrar uma proxima condição encerando o loop
    alert("O carro esta a " + velocidade + " km/h")
    velocidade -= 20
    alert("Diminuindo 20 km/h")
}

alert("O carro parou.")



while (velocidade > 0) {  
    alert("O carro esta a " + velocidade + " km/h")
    velocidade -= 20
    alert("Diminuindo 20 km/h")

    if (velocidade === 40) { // condição adicionada dizendo que quando chegar em 40 o loop deve parar 
        break
    }
}

alert("O carro parou.")

