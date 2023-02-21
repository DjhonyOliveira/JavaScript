function tabuada(){ 

    let valor = document.getElementById("number").value
    let resultado = []

    for (i = 1; i <=20; i++) {
        resultado.push(i * valor)
    } 

    alert(
        "\n1 x " + valor + "= " + resultado[0] +
        "\n2 x " + valor + "= " + resultado[1] + 
        "\n3 x " + valor + "= " + resultado[2] + 
        "\n4 x " + valor + "= " + resultado[3] + 
        "\n5 x " + valor + "= " + resultado[4] + 
        "\n6 x " + valor + "= " + resultado[5] + 
        "\n7 x " + valor + "= " + resultado[6] + 
        "\n8 x " + valor + "= " + resultado[7] + 
        "\n9 x " + valor + "= " + resultado[8] + 
        "\n10 x " + valor + "= " + resultado[9] + 
        "\n11 x " + valor + "= " + resultado[10] +
        "\n12 x " + valor + "= " + resultado[11] + 
        "\n13 x " + valor + "= " + resultado[12] +
        "\n14 x " + valor + "= " + resultado[13] +
        "\n15 x " + valor + "= " + resultado[14] + 
        "\n16 x " + valor + "= " + resultado[15] + 
        "\n18 x " + valor + "= " + resultado[17] + 
        "\n19 x " + valor + "= " + resultado[18] + 
        "\n20 x " + valor + "= " + resultado[19] 
    )
}


// corrigido

const numero = promp("Escolha um numero")
let resultado = []

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da tabuada de  " + numero + ":\n\n" + resultado)