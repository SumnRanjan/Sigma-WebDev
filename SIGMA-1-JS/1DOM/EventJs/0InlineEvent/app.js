// const button = document.querySelector('#v2')

// button.onclick = function (){
//     console.log('You click me')
//     console.log('I hope it worked')
// }

// function scream(){
//     console.log('AAAAAAAAAAAHHHH')
//     console.log('Love the way u lie')
// }

// button.onmouseenter = scream;

// document.querySelector('h1').onclick = function(){
//     alert('why you clicked me BKL')
// }

// addEventListener -- used most of time

const button = document.querySelector("#v3");

// button.addEventListener('dblclick' , function(){
//     alert('You clicked')
// })
button.addEventListener("mousedown", function () {
  alert("You clicked");
});



function twist() {
  console.log("Twist");
}

function shout() {
  console.log("Shout");
}

const btn = document.querySelector("#tas");
// btn.onclick = twist
// btn.onclick = shout

btn.addEventListener("click", twist , {once : true}); //run onetime once true;
btn.addEventListener("click", shout);
