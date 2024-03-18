console.log(document.getElementById("div-Id"))

const divWithId = document.getElementById("div-Id")
divWithId.style.color = "red"


const divWithClass = document.getElementsByClassName("div-class")
console.log(divWithClass)

const divWithClassArry = Array.from(divWithClass)
// divWithClassArry.forEach(div => (div.style.color = "green"))

divWithClass[0].style.color = "blue"