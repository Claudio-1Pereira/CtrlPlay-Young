import tkinter

#Criar a janela principal
janela = tkinter.Tk()
janela.title('Exemplo Tkinter')
janela.geometry('300x200')

#Função chamada quando o botão é clicaco
def clique():
    label.config(text='Você clicou no botão')

#Criar um label
label = tkinter.Label(janela, text='Olá, Tkinter', font=('Arial',14))
label.pack(pady=20)

#Criar um botão
botao = tkinter.Button(janela, text = 'Clique aqui', command=clique)
botao.pack()

# Iniciar o loop da interface
janela.mainloop()


