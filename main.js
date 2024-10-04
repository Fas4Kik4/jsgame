

const btnKick = document.getElementById('btn-kick');
const btnRandomAttack = document.getElementById('btn-random-attack');
const progressbarCharacter = document.getElementById('progressbar-character');
const healthCharacter = document.getElementById('health-character');
const progressbarEnemy = document.getElementById('progressbar-enemy');
const healthEnemy = document.getElementById('health-enemy');
const progressbarBlastoise = document.getElementById('progressbar-blastoise');
const healthBlastoise = document.getElementById('health-blastoise');

const character = {
    health: 100,
    progressbar: progressbarCharacter,
    healthText: healthCharacter,
    updateHealth: function() {
        const healthPercentage = (this.health / 100) * 100;
        this.progressbar.style.width = `${healthPercentage}%`;
        this.healthText.textContent = `${this.health} / 100`;
    }
};

const enemy = {
    health: 100,
    progressbar: progressbarEnemy,
    healthText: healthEnemy,
    updateHealth: function() {
        const healthPercentage = (this.health / 100) * 100;
        this.progressbar.style.width = `${healthPercentage}%`;
        this.healthText.textContent = `${this.health} / 100`;
    }
};

const blastoise = {
    health: 100,
    progressbar: progressbarBlastoise,
    healthText: healthBlastoise,
    updateHealth: function() {
        const healthPercentage = (this.health / 100) * 100;
        this.progressbar.style.width = `${healthPercentage}%`;
        this.healthText.textContent = `${this.health} / 100`;
    }
};

function attackBothEnemies() {
    const damageToEnemy = Math.floor(Math.random() * 20) + 5;
    const damageToBlastoise = Math.floor(Math.random() * 20) + 5;

    enemy.health -= damageToEnemy;
    enemy.updateHealth();
    checkVictory(enemy.health, 'Ви перемогли Charmander!');

    blastoise.health -= damageToBlastoise;
    blastoise.updateHealth();
    checkVictory(blastoise.health, 'Ви перемогли Blastoise!');
}

function randomAttack() {
    const damage = Math.floor(Math.random() * 15) + 5;
    const target = Math.random() < 0.5 ? enemy : blastoise;

    target.health -= damage;
    target.updateHealth();
    checkVictory(target.health, `Ви перемогли ${target === enemy ? 'Charmander' : 'Blastoise'}!`);
}

function checkVictory(health, message) {
    if (health <= 0) {
        alert(message);
        resetGame();
    }
}

function resetGame() {
    setTimeout(function() {
        character.health = 100;
        enemy.health = 100;
        blastoise.health = 100;
        character.updateHealth();
        enemy.updateHealth();
        blastoise.updateHealth();
        alert('Гра скинута! Почніть новий бій!');
    }, 2000);
}

btnKick.addEventListener('click', function() {
    attackBothEnemies();
});

btnRandomAttack.addEventListener('click', function() {
    randomAttack();
});
