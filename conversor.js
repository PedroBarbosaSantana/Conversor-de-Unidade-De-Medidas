
const measure = prompt("Insira uma medida em metros: ")

const unityMeasurement = prompt("Qual unidade de medida deseja converter?" +
"\n 1) Milímetros (MM)\n" +
"\n 2) Centímetros (CM)\n" +
"\n 3) Decímetros (DM)\n" +
"\n 4) Decâmetro(DAM)\n" +
"\n 5) Hectômetro (HM)\n" +
"\n 6) Quilômetro (KM)\n"

)

switch(unityMeasurement) {
    case "1":
        alert("Resultado: " + measure + "m = " + measure * 1000 + "mm")
        break
    case "2": 
        alert("Resultado: " + measure + "m = " + measure * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + measure + "m = " + measure * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + measure + "m = " + measure /10 + "dam")
        break
    case "5":
        alert("Resultado: " + measure + "m = " + measure /100 + "hm")
        break
    case "6":
        alert("Resultado: " + measure + "m = " + measure / 1000 + "km")
        break
    default:
        alert("Opção inválida.")

}