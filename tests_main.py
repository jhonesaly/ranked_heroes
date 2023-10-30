import unittest
from main_functions import *

class TestMainFunctions(unittest.TestCase):

    def test_random_hero_name(self):
        name = random_hero_name()
        self.assertTrue(name.isalpha())  # Verifica se o nome contém apenas letras
        self.assertTrue(name[0].isupper())  # Verifica se a primeira letra é maiúscula

