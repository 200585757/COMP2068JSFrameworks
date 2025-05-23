const prompt = require('prompt');

prompt.start();

console.log('Choose ROCK, PAPER, or SCISSORS');

prompt.get(['userSelection'], function (err, result) {
  if (err) { return onErr(err); }
  const userSelection = result.userSelection.toUpperCase();

  // Generate computer selection based on Math.random()
  const randomNum = Math.random();
  let computerSelection = '';
  if (randomNum <= 0.34) {
    computerSelection = 'PAPER';
  } else if (randomNum <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  console.log('User Selection:', userSelection);
  console.log('Computer Selection:', computerSelection);

  // Determine the winner
  let outcome = '';
  if (userSelection === computerSelection) {
    outcome = "It's a tie";
  } else if ((userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
             (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
             (userSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
    outcome = 'User Wins';
  } else {
    outcome = 'Computer Wins';
  }

  console.log(outcome);
});

function onErr(err) {
  console.log(err);
  return 1;
}
