def menor(lista):
    menorValor = lista[0]
    for x in lista:
        if(x<menorValor):
            menorValor=x
    return menorValor
def maior(lista):
    maiorVAlor = lista[0]
    for x in lista:
        if(x>maiorVAlor):
            maiorVAlor=x
    return maiorVAlor

def maiorEMenor(lista):
    print(f'Maior: {maior(lista)}')
    print(f'Menor: {menor(lista)}')

maiorEMenor([4,5,6,2,1,3])