'use strict';

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function getElement(selector) {
  return document.querySelector(selector);
}

function setElementValue(el, property, valueToSet) {
  if (property === 'textContent') {
    el.textContent = valueToSet;
  } else if (property === 'innerHTML') {
    el.innerHTML = valueToSet;
  } else {
    el.value = valueToSet;
  }
}

let secretNumber = generateSecretNumber();
const numberEl = getElement('.number');
setElementValue(numberEl, 'textContent', secretNumber);

const guessResultEl = getElement('.message');

const scoreEl = getElement('.score');
let score = 20;
setElementValue(scoreEl, 'textContent', score);
scoreEl.textContent = score;
let highScore = 0;

const highScoreEl = getElement('.highscore');
setElementValue(highScoreEl, '.textContent', highScore);

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

    setElementValue(
      guessResultEl,
      'innerHTML',
      '<span class="right-guess">🎉 Correct Number!</span>'
    );

    document.querySelector('body').style.backgroundColor = 'cornflowerblue';
    document.querySelector('.number').className = 'number winner';
  } else if (guess > secretNumber) {
    score--;

    if (score > 0) {
      setElementValue(
        guessResultEl,
        'innerHTML',
        '<span class="wrong-guess">😞 Number too high!</span>'
      );
    } else {
      setElementValue(
        guessResultEl,
        'innerHTML',
        '<span class="wrong-guess">😞 You lost the game!</span>'
      );
    }
  } else if (guess < secretNumber) {
    score--;
    if (score > 0) {
      setElementValue(
        guessResultEl,
        'innerHTML',
        '<span class="wrong-guess">😞 Number too low!</span>'
      );
    } else {
      setElementValue(
        guessResultEl,
        'innerHTML',
        '<span class="wrong-guess">😞 You lost the game!</span>'
      );
    }
  }

  setElementValue(scoreEl, 'textContent', score);
});

// ON CLICK EVENT RUN THIS CODE
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = generateSecretNumber();

  scoreEl;
  setElementValue(scoreEl, 'textContent', score);

  const messageEl = getElement('.message');
  setElementValue(messageEl, '.textContent', 'Start guessing...');

  const el = getElement('.number');
  setElementValue(el, 'textContent', '?');

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.number').className = 'number';
});
