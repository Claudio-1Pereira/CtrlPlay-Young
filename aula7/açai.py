def prepara_acai(*ingredientes, tamanho='medio'):
    print(f'\n Preparando um Açai {tamanho} com os seguintes ingredientes: ')
    for ingredientes in ingredientes:
        print(f'- {ingredientes}')

prepara_acai('banana','granola')
prepara_acai('morango','kiwi','leite em pó',tamanho='grande')
prepara_acai('banana', tamanho="pequeno")
prepara_acai()