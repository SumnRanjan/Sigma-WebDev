// setTimeout(()=>{
//     document.body.style.backgroundColor ='red'
//     setTimeout(()=>{
//         document.body.style.backgroundColor ='blue'
//         setTimeout(()=>{
//             document.body.style.backgroundColor ='yellow'
//             setTimeout(()=>{
//                 document.body.style.backgroundColor ='orange'
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor ='pink'
//                 } , 1000)

//             } , 1000)

//         } , 1000)

//     } , 1000)

// } , 1000)

// document.body.style.backgroundColor ='orange'

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// delayedColorChange("red", 1000, () => {
//     delayedColorChange("orange", 1000, () => {
//         delayedColorChange("yellow", 1000, () => {
//             delayedColorChange("green", 1000, () => {
//                 delayedColorChange("blue", 1000, () => {
   
//                 })
//             })
//         })
//     })
// })

searchMoviesAPI('amadeus' , () =>{
    saveToMyDB(movies , () =>{
        //if it works , run this:
    } , () => {
        //if it doesn't work this
    })
} , () =>{
    //if API is down , or request fail
})
