# Base da aplicação
import os
from main_functions import *

## Configurações iniciais

os.system('cls')
herois = random_hero_league(10)


## Listando heróis

print("Bem-vindo ao ranking dos heróis!\n Os heróis disponíveis são:")
for heroi in herois:
    print(heroi)


