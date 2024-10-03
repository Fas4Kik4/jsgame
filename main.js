// Селекторы элементов на странице
const btnKick = document.getElementById('btn-kick');
const btnRandomAttack = document.getElementById('btn-random-attack');
const progressbarCharacter = document.getElementById('progressbar-character');
const healthCharacter = document.getElementById('health-character');
const progressbarEnemy = document.getElementById('progressbar-enemy');
const healthEnemy = document.getElementById('health-enemy');
const progressbarBlastoise = document.getElementById('progressbar-blastoise');
const healthBlastoise = document.getElementById('health-blastoise');

// Начальные значения здоровья
let characterHealth = 100;
let enemyHealth = 100;
let blastoiseHealth = 100;

// Функция для атаки на Charmander и Blastoise
function attackBothEnemies() {
    // Случайный урон для каждого врага
    const damageToEnemy = Math.floor(Math.random() * 20) + 5;  // Урон для Charmander (5-25)
    const damageToBlastoise = Math.floor(Math.random() * 20) + 5;  // Урон для Blastoise (5-25)

    // Уменьшение здоровья Charmander
    enemyHealth -= damageToEnemy;
    updateHealth(progressbarEnemy, healthEnemy, enemyHealth);
    checkVictory(enemyHealth, 'Ви перемогли Charmander!');

    // Уменьшение здоровья Blastoise
    blastoiseHealth -= damageToBlastoise;
    updateHealth(progressbarBlastoise, healthBlastoise, blastoiseHealth);
    checkVictory(blastoiseHealth, 'Ви перемогли Blastoise!');
}

// Функция для случайной атаки на врагов
function randomAttack() {
    const damage = Math.floor(Math.random() * 15) + 5;  // От 5 до 20
    const target = Math.random() < 0.5 ? 'enemy' : 'blastoise';  // Выбираем случайного противника

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

// Обновление прогресс-бара и текста здоровья
function updateHealth(progressbar, healthText, health) {
    const healthPercentage = (health / 100) * 100;
    progressbar.style.width = `${healthPercentage}%`;
    healthText.textContent = `${health} / 100`;
}

// Проверка на победу
function checkVictory(health, message) {
    if (health <= 0) {
        alert(message);
        resetGame();
    }
}

// Функция для сброса игры (восстановление здоровья)
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

// Добавляем обработчик событий на кнопки
btnKick.addEventListener('click', function() {
    attackBothEnemies();  // Атака одновременно на Charmander и Blastoise
});

btnRandomAttack.addEventListener('click', function() {
    randomAttack();  // Случайная атака на одного из врагов
});
