class AnimalSelvagem():
    def mover(self):
        print("estou correndo")

    def come(self):
        print("Comendo")

class AnimalDomestico():
    def mover():
        print("estou andando")
    def getDono(self):
        return self.dono
    
class Cachorrro(AnimalSelvagem,AnimalDomestico):
    def __init__(self,dono):
        self.dono = dono

    def late(self):
        print("Auau!")

c = Cachorrro("Luis")
print(c.getDono())
c.come()
c.late()
c.mover()