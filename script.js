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
