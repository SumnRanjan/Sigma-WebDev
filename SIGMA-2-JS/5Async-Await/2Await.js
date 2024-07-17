// const delayColorChange = (color , delay) =>{
//     return new Promise((resolve , reject) =>{
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color
//             resolve()
//         } , delay)
//     })
// }

// async function rainbow(){
//     await delayColorChange('red' , 1000)
//     await delayColorChange('orange' , 1000)
//     await delayColorChange('yellow' , 1000)
//     await delayColorChange('green' , 1000)
//     await delayColorChange('blue' , 1000)
//     await delayColorChange('indigo' , 1000)
//     return 'ALL DONE'
// }

// // rainbow().then(() =>console.log("END OF RAINBOW" ))

// async function printRainbow(){
//     await rainbow();
//     console.log("END OF RAINBOW")
// }

// printRainbow()

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)       
    })
}

async function makeTwoRequest(){ 
    try{
        let data1 = await fakeRequestPromise('/page1')
        console.log(data1)
        let data2 = await fakeRequestPromise('/page2')
        console.log(data2)
    } catch(e){
        console.log("Caught an error")
        console.log("error is : " , e)
    }

}