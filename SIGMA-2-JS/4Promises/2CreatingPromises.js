// new Promise((resolve , reject) =>{
//     resolve()
// })

// create promises

// const fakeRequest = (url) =>{
//     return new Promise((resolve , reject)=>{
//         const rand = Math.random()
//         setTimeout(()=>{
//             if(rand < 0.7){
//                 resolve('YOUR FAKE DATA HERE !!');
//             }

//             reject('Request Error!')
//         }, 1000)
//     })
// }

// fakeRequest('/dog/1')
//     .then((data)=>{
//         console.log("DONE WITH REQUEST!!")
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log('OH NO !!')
//     })   


const delayColorChange = (color , delay) =>{
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve()
        } , delay)
    })
}

delayColorChange('red' , 1000)
    .then(()=> delayColorChange('orange' , 1000))
    .then(()=> delayColorChange('yellow' , 1000))
    .then(()=> delayColorChange('green' , 1000))
    .then(()=> delayColorChange('blue' , 1000))
    .then(()=> delayColorChange('black' , 1000))
    