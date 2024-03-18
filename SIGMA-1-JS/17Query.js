const dataAttribute = document.querySelector('[data-test]')
const divwithClass = document.querySelectorAll(".div-class")
const input = document.querySelector("body > input[type = 'text']")

divwithClass.forEach(div => (div.style.color = "red"))
dataAttribute.style.color = "blue"

console.log(dataAttribute)
console.log(divwithClass)
console.log(input)

