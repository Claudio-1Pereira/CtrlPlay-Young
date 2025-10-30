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
def salva_sugestao(sugestao):
    with open("base_conhecimento.txt","a+",encoding="utf-8") as conhecimento:
        conhecimento.write("Chatbot: " + sugestao + "\n")
def buscaResposta_GUI(texto):
    with open("base_conhecimento.txt","a+",encoding="utf-8") as conhecimento:
        conhecimento.seek(0)
        while True:
            viu = conhecimento.readline()
            if viu != "":
                if jaccard(texto,viu) > 0.3:
                    proximalinha = conhecimento.readline()
                    if "Chatbot: " in proximalinha:
                        return proximalinha
            else:
                conhecimento.write(texto)
                return "Me desculpe, não sei o que falar"
def jaccard(textoUsuario, textoBase):
    textoUsuario = limpa_frase(textoUsuario)
    textoBase = limpa_frase(textoBase)
    if len(textoBase)<1: return 0
    else:
        palavras_em_comun = 0
        for palavra in textoUsuario.split():
            if palavra in textoBase.split():
                palavras_em_comun += 1
        return palavras_em_comun/(len(textoBase.split()))
def limpa_frase(frase):
    tirar = ["?","!","...",".",",","Cliente: ", "\n"]
    for t in tirar:
        frase = frase.replace(t,"")
    frase = frase.upper()
    return frase