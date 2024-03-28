const btn = document.querySelector('[data-btn]')

const input = document.querySelector('[data-input-text]')



// input.addEventListener("change" , () =>{
//     console.log("changed")
// })

// input.addEventListener("input" , () =>{
//     console.log("input")
// })

// input.addEventListener("input" , e =>{
//     console.log(e.target.value === "")
// })


// function printclick(){
//     console.log("clicked")
// }

    
// btn.addEventListener("click" , printclick)

// btn.addEventListener('click' , ()=>{
//     console.log("clicked")
// })

// btn.addEventListener('click' , ()=>{
//     console.log("clicked2")
// })

// btn.removeEventListener("click" , printclick)

// btn.addEventListener("click" , e =>{
//     console.log(e);
// })

const form = document.querySelector('[data-form]')

form.addEventListener("submit" , e=> {
    e.preventDefault()
    console.log("submitted form")
})

const link = document.querySelector("a")

// link.addEventListener("click" , e=>{
//     e.preventDefault()
//     console.log("link")
// })

// link.addEventListener("mouseenter" , e=>{
//     e.preventDefault()
//     console.log("enter")
// })

// link.addEventListener("mouseleave" , e=>{
//     e.preventDefault()
//     console.log("leave")
// })

// link.addEventListener("focus" , e=>{
//     e.preventDefault()
//     console.log("focus")
// })

// link.addEventListener("blur" , e=>{
//     e.preventDefault()
//     console.log("blur")
// })


window.addEventListener("resize" , () =>{ console.log('resize')})