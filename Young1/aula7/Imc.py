def imc(peso, altura):
    imc = peso / (altura ** 2)
    return round(imc, 2)

peso = float(input("digite seu peso (kg): "))
altura = float(input("Digite sua altura (m): "))

imc= imc(peso, altura)
print(f'seu IMC é: {imc}')
if imc < 18.5:
    print("abaixo do peso")
elif imc < 24.5:
    print('Peso normal')
elif imc < 29.9:
    print('Sobrepeso')
elif imc < 34.9:
    print('Obesidade grau I')
elif imc < 39.9:
    print('Obesidade grau II')
else:
    print('obesidade grau III')
