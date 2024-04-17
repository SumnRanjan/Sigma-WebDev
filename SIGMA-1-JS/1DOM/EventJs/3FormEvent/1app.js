// const form = document.querySelector('form');
// const input = document.querySelector('#catname');
// const list = document.querySelector('#cat');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const catName = input.value
//     const newli = document.createElement('li')
//     newli.innerText = catName
//     list.append(newli)
//     input.value = ""
// });

const form = document.querySelector('#tweetform')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const list = document.querySelector('#tweet');



form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const var1 = input1.value
    const var2 = input2.value
    const newli = document.createElement('li')
    newli.innerText = `${var1 } : ${var2}`
    list.append(newli)
    input1.value = ""
    input2.value = ""
})

list.addEventListener('click' , function(e) {
    e.target.nodeName === 'LI' && e.target.remove()
})