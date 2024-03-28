// const grandParent = document.querySelector("#grand-parent")

// // grandParent.style.color = 'red'

// const parentone = grandParent.children[0]
// // const parenttwo = grandParent.children[1]
// const parenttwo = parentone.nextElementSibling

// const chlidone  = parentone.children[0]
// const childtwo = parentone.children[1]

// parentone.style.color = 'red'
// parenttwo.style.color = 'red'

// chlidone.style.color = 'red'

// -----

// const chlidone = document.querySelector('#child-one')

// chlidone.style.color = 'red'

// const parent1 = chlidone.parentElement  
// const grandParent = parent1.parentElement

// grandParent.style.color = 'red'


// -----

// const chlidone = document.querySelector('#child-one')
// const grandParent = chlidone.closest('.grand-parent')


// grandParent.style.color = 'green'

// ------
const grandParent = document.querySelector("#grand-parent")

const children = grandParent.querySelectorAll('.Child')
const parent = grandParent.querySelector('.red')

parent.style.color = 'blue'

children.forEach(Child => (Child.style.color ="red"))