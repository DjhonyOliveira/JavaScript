function triangulo() {
    let area = ""
    const base = parseFloat(prompt("Qual a medida da base do triangulo?"))
    const altura = parseFloat(prompt("Qual a medida da altura do triangulo?"))

    area = (base * altura) / 2
    alert("A área do triangulo é igual a: " + area)
}


function retangulo() {
    let area = ""
    const base = parseFloat(prompt("Qual é a medida da base do retângulo?"))
    const altura = parseFloat(prompt("Qual é a medida da altura do retângulo?"))

    area = base * altura
    alert("A área do retângulo é igual a: " + area)
}

function quadrado(){
    let area = ""
    const lado = parseFloat(prompt("Qual a medida da lateral do quadrado?"))

    area = lado * lado
    alert("A área do quadrado é igual a: " + area)
}

function trapezio (){
    let area = ""
    const baseMaior = parseFloat(prompt("Qual o tamanho da maior base do trapézio?"))
    const baseMenor = parseFloat(prompt("Qual o tamanho da menor base do trapézio?"))
    const altura = parseFloat(prompt("Qual a altura do trapézio?"))

    area = (baseMaior + baseMenor) * altura / 2
    alert("A área do trapezio é igual a: " + area)

}

function circulo (pi) {
    let area = ""
    const raio = parseFloat(prompt("Qual o raio do quadrado?"))

    area = pi * (raio * 2)
    alert("A área do círculo é igual a: " + area)

}

let menu = ""

do {

    menu = prompt(
        "Bem vindo ao calculo de area de forma geométricas, para dar sequencia escolha uma das opções a baixo:\n" +
        "\nPara calcular a área de um triângulo, digite 1;" +
        "\nPara calcular a área de um retângulo, digite 2;" +
        "\nPara calcular a área de um quadrado, digite 3;" +
        "\nPara calcular a área de um trapézio, digite 4;" +
        "\nPara calcular a área de um círculo, digite 5;" +
        "\nPara sair, digite 6" 
    )

    switch (menu) {
        case "1": 
            triangulo()
            break
        case "2":
            retangulo()
            break
        case "3":
             quadrado()
             break
         case "4": 
            trapezio()
            break
        case "5": 
            circulo(3.14)
            break
        case "6":
            alert("Saindo...")
            break
        default :
            alert("Opção incoreta, tente novamente!!!") 

    }

} while (menu != 6)