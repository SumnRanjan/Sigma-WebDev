// const test=document.querySelector("[data-test]")

// // console.log(test.dataset.test)

// test.dataset.test = "5555"

const buttons = document.querySelectorAll("button")

buttons.forEach(button =>{
    button.addEventListener("click" , () => {
        // console.log(parseInt(button.dataset.clicks))
        const currentclicks = parseInt(button.dataset.clicks)
        button.dataset.clicks = currentclicks + 1;

    })
})