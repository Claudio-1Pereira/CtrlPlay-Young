'''
string1 = "Oi!"
string2 = "Oi, tudo bem"
string3 = "Ctrl+play - escola de programação e robótica"

print(string1)
print (string2)
print(string3)

print(len(string3))

senha = input("Digite sua senha: ")

if len(senha) < 8:
    print('Senha menor que 8 digitos')
else:
    print('Senha cadastrada com sucesso')


nome = 'Fulano da Silva Sauro'
print (nome[5])
#imprimir partir de um caractere
print (nome[7:])
print (nome[:7])
print (nome[10:15])
print (nome[-1])
print (nome[:-1])

email = "fulano@ctrlplay.com.br"

print(email.find("@"))
print(email.count('.'))

teste = 'imunidade'
teste[0] = 'm'
'''
nome= "claudio"
sobrenome = "pereira\n"
print(nome+sobrenome)


print(sobrenome*7+'')