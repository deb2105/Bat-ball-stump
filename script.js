let winCount = 0;
let tieCount = 0;
let lossCount = 0;

function playGame(playerChoice) {
  const options = ['scissor', 'paper', 'stone'];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  let resultMessage = "";

  // Determine the outcome
  if (playerChoice === computerChoice) {
    resultMessage = `Tie! Both chose ${playerChoice}.`;
    tieCount++;
  } else if (
    (playerChoice === 'stone' && computerChoice === 'scissor') ||
    (playerChoice === 'scissor' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'stone')
  ) {
    winCount++;
    resultMessage = `You Win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    resultMessage = `You Lose! ${computerChoice} beats ${playerChoice}.`;
    lossCount++;
  }

  // Update scores
  document.getElementById('win').textContent = `Win: ${winCount}`;
  document.getElementById('tie').textContent = `Tie: ${tieCount}`;
  document.getElementById('loss').textContent = `Loss: ${lossCount}`;
  document.getElementById('result').textContent = resultMessage;

  // Add move to the log
  const logList = document.getElementById('log-list');
  const logItem = document.createElement('li');
  logItem.textContent = `Player: ${playerChoice}, Computer: ${computerChoice} - ${resultMessage}`;
  logList.appendChild(logItem);
}

function resetGame() {
  // Reset scores
  winCount = 0;
  tieCount = 0;
  lossCount = 0;

  // Update the score display
  document.getElementById('win').textContent = `Win: 0`;
  document.getElementById('tie').textContent = `Tie: 0`;
  document.getElementById('loss').textContent = `Loss: 0`;
  document.getElementById('result').textContent = "Game Reset!";

  // Clear the moves log
  const logList = document.getElementById('log-list');
  logList.innerHTML = ""; // Clear all log items
}
