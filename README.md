# README.md

## Introdução
Este projeto é uma aplicação simples escrita em Python que simula um ranking de heróis com diferentes níveis, baseados em sua experiência (XP). Os heróis são gerados aleatoriamente e o usuário pode interagir com o programa para consultar seus níveis ou adicionar novos heróis ao ranking.

O projeto é baseado no desafio da plataforma Dio que pede o seguinte:

```
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante


Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
```


## Estrutura do Projeto
O projeto é dividido em três arquivos principais: `main.py`, `main_functions.py` e `tests_main_functions.py`.

### main.py
Este é o ponto de entrada da aplicação. Aqui, a lógica principal do programa é executada. Os passos são os seguintes:
1. Importa as funções necessárias do arquivo `main_functions.py`.
2. Dá as boas-vindas ao usuário e gera uma liga de heróis aleatórios.
3. Entra em um loop onde:
   - Lista os heróis disponíveis.
   - Permite que o usuário escolha um herói para ver seu nível.
   - Verifica se o herói escolhido está na lista.
   - Mostra o nível do herói escolhido ou permite adicionar um novo herói, caso não esteja na lista.
   - Pergunta ao usuário se deseja continuar ou sair do programa.

### main_functions.py
Este arquivo contém as funções auxiliares utilizadas em `main.py`. As funções são:
- `random_hero_name()`: Gera um nome aleatório para um herói.
- `random_hero_xp(min_number, max_number)`: Gera um valor aleatório de XP para um herói.
- `random_hero_league(hero_quantity)`: Gera uma liga de heróis aleatórios.
- `lvl_info(hero_xp)`: Retorna o nível de um herói baseado em sua XP.

### tests_main_functions.py
Este arquivo contém os testes unitários para as funções definidas em `main_functions.py`. Utiliza a biblioteca `unittest` para validar que:
- Os nomes dos heróis são strings alfabéticas com a primeira letra maiúscula.
- A XP gerada está dentro do intervalo especificado.
- A quantidade de heróis gerados é correta.
- Os níveis retornados estão corretos com base na XP.

## Como Executar
1. Certifique-se de ter Python instalado em sua máquina.
2. Clone o repositório ou baixe os arquivos `main.py`, `main_functions.py` e `tests_main_functions.py`.
3. Execute `main.py` para iniciar a aplicação e seguir as instruções na tela.
4. (Opcional) Execute `tests_main_functions.py` para rodar os testes unitários e validar as funções auxiliares.

## Conclusão
Este projeto é uma maneira divertida e interativa de aprender e aplicar conceitos básicos de programação em Python, incluindo estruturas de controle, manipulação de strings, listas, e testes unitários.