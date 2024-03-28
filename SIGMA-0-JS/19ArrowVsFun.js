const button = document.querySelector("button")

console.log(this === window)

button.addEventListener("click", e => {
  console.log("Arrow this")
  console.log(this)
})

button.addEventListener("click", function (e) {
  console.log("function this")
  console.log(this)
})

