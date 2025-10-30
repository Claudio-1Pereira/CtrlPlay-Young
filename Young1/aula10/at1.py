n = input('digite um numero inteiro: ')

contador = 0

for digito in str(n):
    if int(digito) % 2 == 0:
        contador += 1
print(contador)

