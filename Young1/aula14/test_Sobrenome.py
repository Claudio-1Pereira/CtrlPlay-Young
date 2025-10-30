import unittest
from sobrenome import nomes

class NomeTest(unittest.TestCase):
    #teste para a função sobrenomeNaOrdem

    def test_sobrenomeNaOrdem(self):
        #Nomes como João Madureira Silva funcionam?

        nomeCompleto = nomes('João','Madureira','Silva')
        self.assertEqual(nomeCompleto, "João Silva Madureira")

unittest.main(argv=[''],exit=False)