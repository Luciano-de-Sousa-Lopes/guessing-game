'use strict';

let score = 20;
let highScore = 0;
let secretNumber = generateSecretNumber();
const numberEl = getElement('.number');
const guessResultEl = getElement('.message');
const scoreEl = getElement('.score');
const highScoreEl = getElement('.highscore');
const bodyEl = getElement('body');
const checkButtomEl = getElement('.check');
const guessEl = getElement('.guess');
const errorMessageEl = getElement('.error-message');
const againButtomEl = getElement('.again');

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

function setElementStyle(el, styleProperty, styleValue) {
  if (styleProperty === 'backgroundColor') {
    el.style.backgroundColor = styleValue;
  }
}

function setClassName(el, classValue) {
  el.className = classValue;
}

function getElementValue(el, property) {
  if (property === 'value') {
    return Number(el.value);
  }
}

function init() {
  setElementValue(highScoreEl, 'textContent', highScore);
  setElementValue(scoreEl, 'textContent', score);
  setElementValue(scoreEl, 'textContent', score);
}

init();

checkButtomEl.addEventListener('click', function () {
  const guess = getElementValue(guessEl, 'value');
  setElementValue(errorMessageEl, 'textContent', '');

  if (!guess) {
    setElementValue(errorMessageEl, 'textContent', 'Enter a number');
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      setElementValue(highScoreEl, 'textContent', highScore);
    }

    setElementValue(numberEl, 'textContent', secretNumber);

    setElementValue(
      guessResultEl,
      'innerHTML',
      '<span class="right-guess">🎉 Correct Number!</span>'
    );

    setElementStyle(bodyEl, 'backgroundColor', 'cornflowerblue');
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

// Reset the game
againButtomEl.addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();
  setElementValue(scoreEl, 'textContent', score);
  setElementValue(guessResultEl, 'textContent', 'Start guessing...');

  setElementValue(numberEl, 'textContent', '?');
  setElementValue(guessEl, 'textContent', '');
  setElementStyle(bodyEl, 'backgroundColor', 'black');
  setElementValue(highScoreEl, 'textContent', highScore);
  setElementValue(guessEl, 'value', '');

  setClassName(numberEl, 'number');
});
