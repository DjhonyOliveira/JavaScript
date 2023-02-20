function tabuada(){ 

    let valor = document.getElementById("number").value
    let resultado = []

    for (i = 1; i <=20; i++) {
        resultado.push(i * valor)
    } 

    console.log(resultado)
}