// Possivelmente este arquivo contem muitas falhas de calculo devido a falta de conhecimento do desenvolvedor na área, porém o código funciona perfeitamente :)

var salario = window.prompt("Informe o valor de seu salário.");

function calcularsalarioliquido(salario) {
  if (salario <= 900) {
    
    return salario;

  } else if (salario <= 1500) {
      var porcentagemdesconto = salario * 0.05;
      var resultado = salario -  porcentagemdesconto;
      return resultado;

    }  else if (salario <= 2500) {
                porcentagemdesconto = salario * 0.1;
                resultado = salario -  porcentagemdesconto;
                return resultado;

            }else {
                porcentagemdesconto = salario * 0.2;
                resultado = salario -  porcentagemdesconto;
                return resultado;

            }
        }

        document.write("Seu salário liquido é de: " , calcularsalarioliquido(salario) , " reais.");

        console.log(calcularsalarioliquido(salario));
