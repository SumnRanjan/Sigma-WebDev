const play1 = document.querySelector("#p1score");
const play2 = document.querySelector("#p2score");
const btn1 = document.querySelector("#p1Button");
const btn2 = document.querySelector("#p2Button");
const btn3 = document.querySelector("#reset");

let winningScore = 5;
let P1Score = 0;
let P2Score = 0;
let isGameOver = false
btn1.addEventListener("click", (e) => {
    if(!isGameOver){
        P1Score += 1;   
        if (winningScore === P1Score) {
            isGameOver = true
        }
        play1.innerText = P1Score;
    } 
});

btn2.addEventListener("click", (e) => {
    if(!isGameOver){
        P2Score += 1;   
        if (winningScore === P2Score) {
            isGameOver = true
        }
        play2.innerText = P2Score;
    } 
});



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
