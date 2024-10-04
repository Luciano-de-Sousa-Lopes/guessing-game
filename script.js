'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const guessResultElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
let score = 20;
scoreElement.textContent = score;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.error-message').textContent = 'Enter a number';
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.error-message').textContent = '';
    guessResultElement.innerHTML =
      '<span class="right-guess">🎉 Correct Number!</span>';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').className = 'number winner';
  } else if (guess > secretNumber) {
    score--;
    if (score > 0) {
      guessResultElement.innerHTML =
        '<span class="wrong-guess">😞 Number too high!</span>';
    } else {
      guessResultElement.innerHTML =
        '<span class="wrong-guess">😞 You lost the game!</span>';
    }
  } else if (guess < secretNumber) {
    score--;
    if (score > 0) {
      guessResultElement.innerHTML =
        '<span class="wrong-guess">😞 Number too low!</span>';
    } else {
      guessResultElement.innerHTML =
        '<span class="wrong-guess">😞 You lost the game!</span>';
    }
  }
  scoreElement.textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').className = 'number';
});
