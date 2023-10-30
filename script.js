// Funções da aplicação
function randomHeroName() {
    const consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    const numSilabas = Math.random() < 0.5 ? 2 : 3;

    let nome = '';

    for (let i = 0; i < numSilabas; i++) {
        const consoanteAleatoria = consoantes[Math.floor(Math.random() * consoantes.length)];
        const vogalAleatoria = vogais[Math.floor(Math.random() * vogais.length)];
        const silaba = consoanteAleatoria + vogalAleatoria;
        nome += silaba;
    }

    return nome.charAt(0).toUpperCase() + nome.slice(1);
}

function randomHeroXp(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function randomHeroLeague(heroQuantity) {
    const heroLeague = [];
    for (let i = 0; i < heroQuantity; i++) {
        const heroName = randomHeroName();
        const heroXp = randomHeroXp(1, 11000);
        heroLeague.push([heroName, heroXp]);
    }

    return heroLeague;
}

function lvlInfo(heroXp) {
    if (heroXp < 1000) return "Ferro";
    if (heroXp <= 2000) return "Bronze";
    if (heroXp <= 5000) return "Prata";
    if (heroXp <= 6000) return "Ouro";
    if (heroXp <= 7000) return "Platina";
    if (heroXp <= 8000) return "Ascendente";
    if (heroXp <= 9000) return "Imortal";
    return "Radiante";
}

// Base do código

console.log("Bem-vindo ao ranking dos heróis!");
let herois = randomHeroLeague(10);

while (true) {
    // Limpar a tela pode ser feito de maneiras diferentes em diferentes ambientes,
    // então esta linha pode precisar ser modificada
    console.clear();

    // Listando heróis
    console.log("Os heróis disponíveis são:");
    herois.forEach(heroi => {
        console.log(heroi[0]);
    });

    // Input de herói escolhido
    let heroiEscolhido = prompt("Por favor, escolha um herói da lista para saber o seu nível: ");

    // Verifica se escolha está na lista
    let heroiNaLista = false;
    let xpHeroi;
    
    herois.forEach(heroi => {
        if (heroi[0] === heroiEscolhido) {
            heroiNaLista = true;
            xpHeroi = heroi[1];
        }
    });
    
    if (heroiNaLista) {
        // Mostrando nível do herói
        let nivelHeroi = lvlInfo(xpHeroi);
        console.log(`O Herói de nome **${heroiEscolhido}** está no nível de **${nivelHeroi}**`);
    } else {
        console.log("Esse herói não está na lista.");
        let novoHeroi = prompt("Deseja adicioná-lo? [s/n] ");
        
        if (novoHeroi.toLowerCase() === 's') {
            let novoXp = parseInt(prompt(`Digite o xp do herói ${heroiEscolhido}: `));
            herois.push([heroiEscolhido, novoXp]);
            continue;
        } else {
            continue;
        }
    }

    let fim = prompt("Deseja parar [s/n]? ");
    
    if (fim.toLowerCase() === 's') {
        console.log("Até a próxima!");
        break;
    } else if (fim.toLowerCase() === 'n') {
        console.log("Continuando...");
    } else {
        console.log("Resposta inválida.\nContinuando...");
    }
}
