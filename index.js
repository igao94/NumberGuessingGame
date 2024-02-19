const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Enter a number between ${minNum} - ${maxNum}:`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert(`Please enter a valid number!`);
  } else if (guess < minNum || guess > maxNum) {
    window.alert(`Please enter a valid number!`);
  } else {
    attempts++;

    if (attempts === 1) {
      window.alert(`CORRECT! It took you ${attempts} attempt!`);
      running = false;
    } else if (guess > answer) {
      window.alert(`TOO HIGH! TRY AGAIN!`);
    } else if (guess < answer) {
      window.alert(`TOO LOW! TRY AGAIN`);
    } else {
      window.alert(`CORRECT! It took you ${attempts} attempts!`);
      running = false;
    }
  }
}
