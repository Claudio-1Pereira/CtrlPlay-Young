def soma_imp(lista):
    soma = 0
    for i in range(0, len(lista), 2):
        if lista[i] % 2 != 0:
            soma += lista[i]
    return soma
lista = [2,3,4,5,6,7,8,9,10]
print('lista:',lista)
print(soma_imp(lista))

        
        
