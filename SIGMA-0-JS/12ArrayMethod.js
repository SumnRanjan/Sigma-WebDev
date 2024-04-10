
// //Array Method ----- 

// const a = [1,2,3,4,5]
// const b = [2,4,6,8,10]

// a.forEach((number , index) =>{
//   console.log(number + " " + index)
// })

// a.map(number =>{
//   return number * 2;
// })

// console.log(a)

// // const newA = a.map(number =>{
// //   return number * 2;
// // })

// // console.log(newA)

// // const newA = a.filter(number =>{
// //   return number > 2;
// // })

// // console.log(newA)

// // const newA = a.find(number =>{
// //   return number > 2;
// // })

// // console.log(newA)

// // const isTrue = a.some(number =>{
// //   return number > 9;
// // })

// // console.log(isTrue)

// // const isTrue = a.every(number =>{
// //   return number > 0
// // })

// console.log(isTrue)


// const sum = a.reduce((sum , number) =>{
//   return sum + number;
// },0)

// console.log(sum)


// const items =[
//   {price : 10},
//   {price : 10},
//   {price : 10},
//   {price : 10},
//   {price : 10},
// ]

// const total = items.reduce((sum , items) =>{
//   return sum + items.price;
// },0)

// console.log(total)


// const  isTrue = a.includes(2)
// console.log(isTrue)


// Arrow Mehtod && callback

// 1. forEach --
// const number = [1,2,3,4,5,6,7,8]

// number.forEach(function(el){
//     if(el % 2 == 0)
//     console.log(el)
// })

//new way for of loop
// for(let el of number){
//     console.log(el)
// }

// const movies = [
//     {
//         title : 'Amadeus',
//         score: 99
//     },
//     {
//         title : 'Stand By Me',
//         score: 85
//     },
//     {
//         title : 'Parasite',
//         score: 95
//     },
//     {
//         title : 'Alien',
//         score: 90
//     }
// ]

// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })



//2. Map - return new arry

// const number = [1,2,3,4,5,6,7,8]

// const double = number.map(function(num){
//     return num * 2;
// })

// const movies = [
//     {
//         title : 'Amadeus',
//         score: 99
//     },
//     {
//         title : 'Stand By Me',
//         score: 85
//     },
//     {
//         title : 'Parasite',
//         score: 95
//     },
//     {
//         title : 'Alien',
//         score: 90
//     }
// ]

// // const title = movies.map(function(movie){
// //     return movie.title.toLocaleUpperCase();
// // })

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score/10}`
// ))

// console.log(newMovies)

// 3. set timeout and setinterval

// setTimeout(() =>{
//     console.log("Hello");
// }, 2000)

// console.log("hi")

// const id = setInterval (() =>{
//     console.log(Math.random())
// },2000)

// clearInterval(id)

//4. filter change in new arry

// const number = [1,2,3,4,5,6,7,8]

// const id = number.filter(n => {
//     return n < 5
// })

// console.log(id)

const movies = [
    {
        title : 'Amadeus',
        score: 99
    },
    {
        title : 'Stand By Me',
        score: 85
    },
    {
        title : 'Parasite',
        score: 95
    },
    {
        title : 'Alien',
        score: 90
    }
]

const goodMovie = movies.filter(movie => movie.score > 85)
const goodTitles = goodMovie.map(m => m.title)

// console.log(goodMovie)
confirm.log(goodTitles)
