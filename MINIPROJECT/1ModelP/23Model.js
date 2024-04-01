const modal = document.querySelector('#modal')
const open = document.querySelector('#open-model-btn')
const close = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

open.addEventListener('click' , () =>{
    modal.classList.add('open')
    overlay.classList.add('open')
})


close.addEventListener('click' , closeModel) //same as bellow code

// close.addEventListener('click' , () =>{
//     closeModel()
//     // modal.classList.remove('open')
//     // overlay.classList.remove('open')
// })

overlay.addEventListener('click' , () =>{
    closeModel()
    // modal.classList.remove('open')
    // overlay.classList.remove('open')
})

function closeModel(){
    modal.classList.remove('open')
    overlay.classList.remove('open')
}