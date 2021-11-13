valorA = float(input("Informe o valor de A: "))
valorB = float(input("Informe o valor de B: "))
valorC = float(input("Informe o valor de C: "))

#Definindo Delta
delta = (valorB**2) - 4 * valorA * valorC

print("\n*******************************\n")

#regras de formatação para a conta
if valorA == 0:
    print("O valor de A, deve ser diferente de 0")

elif delta < 0:
    print("Sem raizes reais")

else:
    #Resolvendo a conta
    X1 = (-valorB + delta ** (1 / 2)) / (2 * valorA)
    X2 = (-valorB - delta ** (1 / 2)) / (2 * valorA)

    print(f'As raizes de sua conta são {X1} e {X2}')
