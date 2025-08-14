def add_filme():
    while True:
        filme = input("digite um filme: ('sair' para volta para o menu principal)")
        with open('filmes.txt','a',encoding="utf-8") as filmes:
            if filme.lower() == 'sair':
                break
            else:
                filmes.write(filme + '\n')
def ler_filme():
    with open('filmes.txt','r',encoding="utf-8") as ler:
        ler.read()
        input('')
def limpar_filme():
    with open('filmes.txt','w',encoding="utf-8")as limpar:
        limpar.write('')

while True:
    print()


        
        
        
        
