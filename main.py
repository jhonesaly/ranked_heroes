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
        ## Mostrando nível do herói
        nivel_heroi = lvl_info(xp_heroi)
        print(f"O Herói de nome **{heroi_escolhido}** está no nível de **{nivel_heroi}**")

    else:
        print("Herói não está na lista.")
        novo_heroi = input("Deseja adicionar um novo herói? [s/n] ")
        
        if novo_heroi.lower() == 's':
            novo_nome = input("Digite o nome do herói: ")
            novo_xp = int(input(f"Digite o xp do herói {novo_nome}: "))
            herois.append([novo_nome, novo_xp])
            
            continue
        else:
            continue

    fim = input("Deseja parar [s/n]? ")
    
    if fim.lower() == 's':
        print("Até a próxima!")
        break

    elif fim.lower() == 'n':
        print("Continuando...")

    else:
        print("Resposta inválida.\nContinuando...")

