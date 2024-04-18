const play1 = document.querySelector("#p1score");
const play2 = document.querySelector("#p2score");
const btn1 = document.querySelector("#p1Button");
const btn2 = document.querySelector("#p2Button");
const btn3 = document.querySelector("#reset");
const select = document.querySelector("#playto");

let winningScore = 3;
let P1Score = 0;
let P2Score = 0;
let isGameOver = false;

btn1.addEventListener("click", (e) => {
  if (!isGameOver) {
    P1Score += 1;
    if (P1Score === winningScore) {
      isGameOver = true;
      play1.classList.add("has-text-success");
      play2.classList.add("has-text-link");
      btn1.disabled = true;
      btn2.disabled = true;
    }
    play1.innerText = P1Score;
  }
});

btn2.addEventListener("click", (e) => {
  if (!isGameOver) {
    P2Score += 1;
    if (P2Score === winningScore) {
      isGameOver = true;
      play2.classList.add("has-text-success");
      play1.classList.add("has-text-link");
      btn1.disabled = true;
      btn2.disabled = true;
    }
    play2.innerText = P2Score;
  }
});

select.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

btn3.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  P1Score = 0;
  P2Score = 0;
  play1.innerText = 0;
  play2.innerText = 0;
  play1.classList.remove("has-text-success", "has-text-link");
  play2.classList.remove("has-text-success", "has-text-link");
  btn1.disabled = false;
  btn2.disabled = false;
}

// ---------------
// btn2.addEventListener("click", (e) => {
//   if (winningScore !== P2Score) {
//     P2Score += 1;
//     play2.innerText = P2Score;
//   }
// });

// btn3.addEventListener("click", (e) => {
//   play1.innerText = 0;
//   play2.innerText = 0;
// });
