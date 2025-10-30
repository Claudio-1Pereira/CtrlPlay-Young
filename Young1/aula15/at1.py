try:
    entrada = int(input("escreva um numero entre 1 a 1000: "))
    if entrada < 1000 and entrada > 1:
        saida = entrada*entrada
        print(entrada)
        print(saida)
        print(saida*entrada)
    elif entrada > 1000:
        print('o numero esta fora dos limites')
    else:
        print('O numero é negativo ou 0')
       
except:
    print("foi digitado uma letra")

