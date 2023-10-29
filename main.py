# Base da aplicação
import os
from main_functions import *

## Configurações iniciais

os.system('cls')
herois = random_hero_league(10)


## Listando heróis

print("Bem-vindo ao ranking dos heróis!\nOs heróis disponíveis são:")
for heroi in herois:
    print(heroi[0])


## Input de herói escolhido

while True: 
    
    heroi_escolhido = input("Por favor, escolha um herói da lista para saber o seu nível: ")

    ## Verifica se escolha está na lista

    heroi_na_lista = False

    for heroi in herois:
        if heroi[0] == heroi_escolhido:
            heroi_na_lista = True
            xp_heroi = heroi[1]
            break
    
    if heroi_na_lista:
        break

    else:
        print("Herói inválido")

## Mostrando nível do herói

nivel_heroi = lvl_info(xp_heroi)
print(f"O Herói de nome **{heroi_escolhido}** está no nível de **{nivel_heroi}**")
