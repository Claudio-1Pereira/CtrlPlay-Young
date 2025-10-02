import random
def saudacoes(nome):
    frases = [f'Bom dia! Meu nome é {nome}. Como vai você?','Olá!','Oi, tudo bem?']
    print(random.choice(frases))
def receberTexto():
    palavraProibida = ['Bocó', 'Andrew']
    while True: 
        texto = input('Cliente: ')
        if any(p in texto for p in palavraProibida):
            print('Não vem não! Me respeite!')
        else:
            return texto
def buscaResposta(nome, texto):
    with open('base_conhecimento.txt', 'a+', encoding='utf-8') as conhecimento:
        conhecimento.seek(0)
        if texto.strip() == 'Tchau':
            return 'fim'
        while True:
            viu = conhecimento.readline()
            if viu:
                if viu.strip() == f'Cliente: {texto.strip()}':
                    proximalinha = conhecimento.readline()
                    if proximalinha.startswith('Chatbot: '):
                        return proximalinha.strip()
            else:
                print('Me desculpe, não sei o que falar')
                conhecimento.write(f'\nCliente: {texto.strip()}')
                resposta_user = input('O que esperava?\n')
                conhecimento.write(f'\nChatbot: {resposta_user.strip()}')
                return 'Hum...'
def exibeResposta(resposta, nome):
    if resposta == 'fim':
        print(f'{nome}: volte sempre!')
        return 'fim'
    else:
        print(resposta.replace('Chatbot', nome))
        return 'continua'
def exibeResposta_GUI(texto, resposta, nome):
    return resposta.replace("Chatbot",nome)
def saudacao_GUI(nome):
    frases = [f'Bom dia! Meu nome é {nome}. Como vai você?','Olá!','Oi, tudo bem?']
    return random.choice(frases)