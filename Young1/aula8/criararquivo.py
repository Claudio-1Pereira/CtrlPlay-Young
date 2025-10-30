with open('teste1.txt','w', encoding='utf-8') as boas_viandas:
    print('Arquivo criado com sucesso!')
    boas_viandas.write('Hello World! My name is "Claudio"\nAre you ready?')

with open('teste1.txt','r',encoding='utf-8') as ler_msg:
    print(ler_msg.read())

with open('teste1.txt','a',encoding='utf-8') as acrescentar:
    acrescentar.write('\nEssa linha foi acrescentada depois!')