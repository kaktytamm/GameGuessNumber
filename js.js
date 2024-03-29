
// Значение игры
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector ('#game'),
    minNum = document.querySelector ('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector ('#guess-btn'),
    guessInput = document.querySelector ('#guess-input'),
    message = document.querySelector ('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    console.log(guess);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Введи число от ${min} до ${max}`, 'red');
    }
    
    if (guess === winningNum) {
        gameOver(true, `${winningNum} правильно! Ты выиграл!`);
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            gameOver(false, `Игра окончена, ты проиграл. Правильное число было  ${winningNum}`);
          }  else {
                guessInput.style.borderColor = 'red';

                guessInput.value = ' ';

                setMessage(`${guess} неправильно, ${guessesLeft} попытки(-а) осталось!`);
            }
        }
    
});

function gameOver(won, msg) {
    let color;
    won === true? color = 'green': color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    guessBtn.value = 'Попробовать снова';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min);

}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}