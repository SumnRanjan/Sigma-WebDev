const  btn = document.querySelector('.btn')
const h1 = document.querySelector('h1')

btn.addEventListener('click' , ()=>{
   
    const newColor = makeRandomColor()
    let sum1 = sum()

    document.body.style.backgroundColor = newColor
    h1.innerText = newColor;
    if(sum1 < 160){
        h1.style.color = 'blue'
    }else{
        h1.style.color = 'black'
    }
    
})

const makeRandomColor = () =>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r} , ${g} , ${b})`
}

const sum = () =>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const sum = r+g+b;
    console.log(sum)
    return sum
}