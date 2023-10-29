# Funções da aplicação

import random

def random_hero_name():
    consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
    vogais = ['a', 'e', 'i', 'o', 'u']

    num_silabas = random.choice([2, 3])

    nome = ''
    
    for _ in range(num_silabas):
        consoante_aleatoria = random.choice(consoantes)
        vogal_aleatoria = random.choice(vogais)
        silaba = consoante_aleatoria + vogal_aleatoria
        nome += silaba
    
    return nome.capitalize()


def random_xp(min_number, max_number):
    return random.randint(min_number, max_number)


def random_hero_league(hero_quantity):
    hero_league = []
    for i in range(hero_quantity):
        hero_league.append(random_hero_name())

    return hero_league

