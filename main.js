
const btnKick = document.getElementById('btn-kick');
const btnRandomAttack = document.getElementById('btn-random-attack');
const progressbarCharacter = document.getElementById('progressbar-character');
const healthCharacter = document.getElementById('health-character');
const progressbarEnemy = document.getElementById('progressbar-enemy');
const healthEnemy = document.getElementById('health-enemy');
const progressbarBlastoise = document.getElementById('progressbar-blastoise');
const healthBlastoise = document.getElementById('health-blastoise');

let characterHealth = 100;
let enemyHealth = 100;
let blastoiseHealth = 100;

function attackBothEnemies() {

    const damageToEnemy = Math.floor(Math.random() * 20) + 5;  
    const damageToBlastoise = Math.floor(Math.random() * 20) + 5;  

    enemyHealth -= damageToEnemy;
    updateHealth(progressbarEnemy, healthEnemy, enemyHealth);
    checkVictory(enemyHealth, 'Ви перемогли Charmander!');

    blastoiseHealth -= damageToBlastoise;
    updateHealth(progressbarBlastoise, healthBlastoise, blastoiseHealth);
    checkVictory(blastoiseHealth, 'Ви перемогли Blastoise!');
}

function randomAttack() {
    const damage = Math.floor(Math.random() * 15) + 5;  // От 5 до 20
    const target = Math.random() < 0.5 ? 'enemy' : 'blastoise'; 

    if (target === 'enemy') {
        enemyHealth -= damage;
        updateHealth(progressbarEnemy, healthEnemy, enemyHealth);
    } else {
        blastoiseHealth -= damage;
        updateHealth(progressbarBlastoise, healthBlastoise, blastoiseHealth);
    }
    checkVictory(enemyHealth, 'Ви перемогли Charmander!');
    checkVictory(blastoiseHealth, 'Ви перемогли Blastoise!');
}

function updateHealth(progressbar, healthText, health) {
    const healthPercentage = (health / 100) * 100;
    progressbar.style.width = `${healthPercentage}%`;
    healthText.textContent = `${health} / 100`;
}

function checkVictory(health, message) {
    if (health <= 0) {
        alert(message);
        resetGame();
    }
}

function resetGame() {
    setTimeout(function() {
        characterHealth = 100;
        enemyHealth = 100;
        blastoiseHealth = 100;
        updateHealth(progressbarCharacter, healthCharacter, characterHealth);
        updateHealth(progressbarEnemy, healthEnemy, enemyHealth);
        updateHealth(progressbarBlastoise, healthBlastoise, blastoiseHealth);
        alert('Гра скинута! Почніть новий бій!');
    }, 2000);
}

btnKick.addEventListener('click', function() {
    attackBothEnemies();  
});

btnRandomAttack.addEventListener('click', function() {
    randomAttack();  
});
