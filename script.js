'use strict';
/*
// selecting & Manipulating elements

// console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '✌️ correct number! ';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '15';
console.log(document.querySelector('.number').textContent);

console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = '12';
console.log(document.querySelector('.score').textContent);

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);


document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  document.querySelector('.message').textContent = '✌️ correct number! ';
});


*/

// handling click events

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ no number! ';

    displayMessage('⛔ no number! ');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✌️ correct number! ';
    displayMessage('✌️ correct number! ');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // my experiment
    document.querySelector('.guess').value = secretNumber;
    document.querySelector('.score').textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 too high! ' : '📉 too low! ';
      displayMessage(guess > secretNumber ? '📈 too high! ' : '📉 too low! ');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😂 You lost the Game! ';
      displayMessage('😂 You lost the Game! ');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
// when guess is too high

  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 too high! ';
      // score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂 You lost the Game! ';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low

  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 too low! ';
      // score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂 You lost the Game! ';
      document.querySelector('.score').textContent = 0;
    }
  }
   */
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀 
*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing... ';
  displayMessage('Start guessing... ');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
