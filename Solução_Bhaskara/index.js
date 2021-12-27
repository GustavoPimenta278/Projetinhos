const inpA = document.getElementById("inpA");
const inpB = document.getElementById("inpB");
const inpC = document.getElementById("inpC");
const divResultado = document.getElementById("resultado");


function calcular () {
    let valorA = Number(inpA.value);
    let valorB = Number(inpB.value);
    let valorC = Number(inpC.value);
    //x = -b +- raiz(b²-4.a.c)
    const delta = (valorB**2) - 4 * valorA * valorC

    //regras de formação
    if (valorA == 0) {
        divResultado.innerHTML = 'O valor de A deve ser diferente de 0'

    } else if (delta < 0) {
        divResultado.innerHTML = 'Essa conta não possui raizes reais'

    } else {
        //resolvendo a conta
        const x1 = (-valorB + delta ** (1/2)) / (2 * valorA) 
        const x2 = (-valorB - delta ** (1/2)) / (2 * valorA)

        return divResultado.innerHTML = `As raizes de sua conta são ${x1.toFixed(4)} e ${x2.toFixed(4)}.`
    }
    
}
