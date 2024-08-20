'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message')['textContent'] = 'Hello, world!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 25;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const button = document.querySelector('.check');
const highscore = [];
let score = 20;

button.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // the game first check if the score is less than 1
  if (score < 1) {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = `Game Over`;
    button.disabled = true; // Disable button when game over
    return; // Exit the function early
  }

  //then it checks if there is a number
  if (!guess) {
    document.querySelector('.message').textContent = `❌ No Number!`;
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = `✅ Correct Number!`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector(
      '.label-highscore'
    ).textContent = `🥇 Highscore: ${score} `;
    button.style.display = 'none';
  } else if (guess > secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = `Too high`;
  } else if (guess < secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = ` Too low`;
  }
});

//reset the game
const resetGame = document.querySelector('.again');

resetGame.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  button.disabled = false;
  button.style.display = 'block';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
