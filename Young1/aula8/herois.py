import os

if not os.path.exists('herois.txt'):
    with open('herois.txt','w', encoding='utf-8') as hero:
        hero.write('Homen-Aranha - Marvel')
    print('arquivo criado.')
else:
    print('Arquivo existente')
    
with open('herois.txt','a',encoding='utf-8') as hero:
    hero.write('\n')
    hero.write(input('Digite um filme: '))

with open('herois.txt','r',encoding='utf-8') as hero:
    print(hero.readline())
