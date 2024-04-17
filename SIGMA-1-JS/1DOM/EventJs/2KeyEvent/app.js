const btn = document.querySelector("button");
btn.addEventListener("click", (evt) => {
  console.log(evt);
  alert("Ja NA ");
});

const input = document.querySelector("input");
// input.addEventListener('keydown' , ()=>{
//     console.log('Key Down')
// })

// input.addEventListener('keyup' , ()=>{
//     console.log('Key Up')
// })

// input.addEventListener('keydown' , (e)=>{
//     console.log(e.key)
//     console.log(e.code)
// })

window.addEventListener("keydown", (e) => {
  // console.log(e.code)
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
        console.log("Ignore");
  }
});
