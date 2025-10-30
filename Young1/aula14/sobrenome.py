from faker import Faker

fake = Faker('pt_BR')

def nomes(nome,sobrenome1,sobrenome2):
    if (len(sobrenome1)<len(sobrenome2)):
        return nome + ' ' + sobrenome1 + ' ' + sobrenome2
    else:
        return nome + ' ' + sobrenome2 + ' ' + sobrenome1

print(nomes(fake.first_name(), fake.last_name(), fake.last_name()))
print(nomes(fake.first_name(), fake.last_name(), fake.last_name()))

print(fake.first_name())