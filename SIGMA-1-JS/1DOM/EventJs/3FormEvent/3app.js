// const input = document.querySelector('input')
// const h1 = document.querySelector('h1')

// // input.addEventListener('change' , (e) =>{
// //     console.log("hey")
// // })

// input.addEventListener('input' , (e) =>{
//     h1.innerText = input.value
// })

//event bubbling
const btn = document.querySelector('#button');
const div1 = document.querySelector('#container');

btn.addEventListener('click', function(e) {
    div1.style.backgroundColor = makeRandomColor();
    e.stopImmediatePropagation()
});


div1.addEventListener('click' , function(){
    div1.classList.toggle('hide')
})

const  makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
