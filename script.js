'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

const guessResultElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
let score = 20;
scoreElement.textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`${typeof guess}`);

  if (!guess) {
    document.querySelector('.error-message').textContent = 'Enter a number';
  } else if (guess === secretNumber) {
    document.querySelector('.error-message').textContent = '';
    guessResultElement.innerHTML =
      '<span class="right-guess">🎉 Correct Number!</span>';
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
