class carro():
    def __init__(self,marca,modelo,ano):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
    def exbir_dados(self):
        return "todos os dados: "+ self.marca +  self.modelo + self.ano
    def getIdade(self):
        return self.ano
    

modelo = input('')
    
carro1 = carro( modelo,' urus ','2020 ')
carro2 = carro('jeep ','comppass ', '2015 ')
print(carro1.exbir_dados())
print(carro2.exbir_dados())
print(carro1.getIdade())
print(carro2.getIdade())