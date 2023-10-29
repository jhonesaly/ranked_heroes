# Base da aplicação
import os
from main_functions import *

os.system('cls')

herois = random_hero_league(10)

print("Bem-vindo ao ranking dos heróis!\n Os heróis disponíveis são:")

for heroi in herois:
    print(heroi)
