let max = parseInt(prompt("Enter the max number "));
while (!max) {
  max = parseInt(prompt("Enter the max number "));
}

const targetSum = Math.floor(Math.random() * max) + 1;
console.log(targetSum);

let guess = parseInt(prompt("Enter the first guess "));
let attempt = 1;

while (parseInt(guess) !== targetSum) {
  if (guess === "q") break;
  attempt++;
  if (guess > targetSum) {
    guess = prompt("Too high ! Enter a new guess ");
  } else {
    guess = prompt("Too low ! Enter a new guess ");
  }
}

if (guess === "q") {
  console.log("You Quit");
} else {
  console.log(`you take ${attempt} to guess`);
}
