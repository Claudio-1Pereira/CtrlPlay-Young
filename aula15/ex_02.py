try:
    f = open('arquivo.txt', 'w')
    f.write('Tente escrever isto')
except IOError:
    #Isso so ira verificar se ha uma exceção IOError e em seguida,
    #executar essa declaração impressa
    print('Não foi possivel localizar o arquivo')
else:
    print('Texto escrito com sucesso!')
    f.close()
finally:
    print('Sempre executa os comandos do bloco finally')