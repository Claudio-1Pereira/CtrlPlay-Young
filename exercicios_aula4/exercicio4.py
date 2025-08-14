nota = int(input("digite uma nota de 0 a 10: "))
if nota >= 6 and nota <=10:
    print("Aprovado")
elif nota <= 6 and nota >= 0:
    print("reprovado")
else:
    print("nota não esta entre 0 a 10")