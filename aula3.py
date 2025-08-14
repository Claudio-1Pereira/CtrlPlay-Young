convidados = ['José','Lucas','Ana','Enzo','Valentina','Claudio','Trump']
'''
print(convidados)
print(f'A primeira pessoa da lista é {convidados[0]}')
print(convidados[-2])

convidados[0] = 'Beatriz'
print(convidados)

convidados.append("Joaquim")
print(convidados)

convidados.insert(0, 'João')
print(convidados)

del convidados[3]
print(convidados)

convidadoRemovido = convidados.pop()

print(convidadoRemovido)
print(convidados)

convidadoRemovido2 = convidados.pop(1)
print(convidados)

viajando = "Enzo"
convidados.remove(viajando)

print(f'{viajando} não vai pois esta viajando')
'''

print(sorted(convidados))
print(convidados)


convidados.sort()
print(convidados)

convidados.sort(reverse=True)
print(convidados)

print(sorted(convidados))

convidados.reverse
print(convidados)


