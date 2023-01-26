const medida = prompt("Insira a medida em Metros")

const unidadeMedida = prompt("selecione para qual unidade deseja converter:\n a)mm\n b)cm\n c)dm\n d)dam\n e)hm\n f)km")

switch (unidadeMedida) {
    case "mm" :
        alert(medida + " Metros transformando para mm(Milímetro) é = " + medida * 1000 + " mm")
        break
    case "cm" :
        alert(medida + " Metros transformando para cm(Centímetros) é = " + medida * 100 + " cm")
        break
    case "dm" :
        alert(medida + " Metros transformando para dm(Decímetro) é = " + medida * 10 + " dm")
        break
    case "dam" :
        alert(medida + " Metros transformando para dam(Decâmetro) é = " + medida / 10 + " dam")
        break
    case "hm" :
        alert(medida + " Metros transformando para hm(Hectômetro) é = " + medida / 100 + " hm")
        break
    case "km" :
        alert(medida + " Metros transformando para km(Quilometro) é = " + medida / 1000 + " km")
        break
    default:
        alert("Opção inválida")
}