// const play1 = document.querySelector("#p1score");
// const play2 = document.querySelector("#p2score");
// const btn1 = document.querySelector("#p1Button");
// const btn2 = document.querySelector("#p2Button");
// const btn3 = document.querySelector("#reset");
// const select = document.querySelector("#playto");

// let winningScore = 3;
// let P1Score = 0;
// let P2Score = 0;
// let isGameOver = false;

// btn1.addEventListener("click", (e) => {
//   if (!isGameOver) {
//     P1Score += 1;
//     if (P1Score === winningScore) {
//       isGameOver = true;
//       play1.classList.add("has-text-success");
//       play2.classList.add("has-text-link");
//       btn1.disabled = true;
//       btn2.disabled = true;
//     }
//     play1.innerText = P1Score;
//   }
// });

// btn2.addEventListener("click", (e) => {
//   if (!isGameOver) {
//     P2Score += 1;
//     if (P2Score === winningScore) {
//       isGameOver = true;
//       play2.classList.add("has-text-success");
//       play1.classList.add("has-text-link");
//       btn1.disabled = true;
//       btn2.disabled = true;
//     }
//     play2.innerText = P2Score;
//   }
// });

// select.addEventListener("change", function () {
//   winningScore = parseInt(this.value);
//   reset();
// });

// btn3.addEventListener("click", reset);

// function reset() {
//   isGameOver = false;
//   P1Score = 0;
//   P2Score = 0;
//   play1.innerText = 0;
//   play2.innerText = 0;
//   play1.classList.remove("has-text-success", "has-text-link");
//   play2.classList.remove("has-text-success", "has-text-link");
//   btn1.disabled = false;
//   btn2.disabled = false;
// }

// // ---------------
// // btn2.addEventListener("click", (e) => {
// //   if (winningScore !== P2Score) {
// //     P2Score += 1;
// //     play2.innerText = P2Score;
// //   }
// // });

// // btn3.addEventListener("click", (e) => {
// //   play1.innerText = 0;
// //   play2.innerText = 0;
// // });

const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
      player.score += 1;
      if (player.score === winningScore) {
          isGameOver = true;
          player.display.classList.add('has-text-success');
          opponent.display.classList.add('has-text-danger');
          player.button.disabled = true;
          opponent.button.disabled = true;
      }
      player.display.textContent = player.score;
  }
}


p1.button.addEventListener('click', function () {
  updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
  updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
})

resetButton.addEventListener('click', reset)

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
      p.score = 0;
      p.display.textContent = 0;
      p.display.classList.remove('has-text-success', 'has-text-danger');
      p.button.disabled = false;
  }
}
