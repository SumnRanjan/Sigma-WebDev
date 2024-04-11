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

// const goodMovie = movies.filter(movie => movie.score > 85)
// const goodTitles = goodMovie.map(m => m.title)

// // console.log(goodMovie)
// confirm.log(goodTitles)

// 4every

// const number = [1,2,3,4,5,6,7,8]

// number.every(score => score >= 5)

// //some
// const movies = [
//         {
//             title : 'Amadeus',
//             score: 99
//         },
//         {
//             title : 'Stand By Me',
//             score: 85
//         },
//         {
//             title : 'Parasite',
//             score: 95
//         },
//         {
//             title : 'Alien',
//             score: 90
//         }
//     ]
// movies.some (movie => movie.score > 95 )

//reduce

// const price = [9.99 , 1.50 , 19.99 , 30.50]

// // const total = price.reduce ((total , price) =>{
// //     return total + price;
// // })

// // console.log(total)

// const mini = price.reduce((min , price )=>{
//     if(price < min){
//         return price;
//     }
//     return min
// })

// console.log(mini);

// const movies = [
//         {
//             title : 'Amadeus',
//             score: 99
//         },
//         {
//             title : 'Stand By Me',
//             score: 85
//         },
//         {
//             title : 'Parasite',
//             score: 95
//         },
//         {
//             title : 'Alien',
//             score: 90
//         }
//     ]

//     const movi = movies.reduce((bestMovie , currMovies)=>{
//         if(currMovies.score > bestMovie.score){
//             return currMovies
//         }
//         return bestMovie
//     })

// console.log(movi);
// const even = [ 2,4,6,8]

// even.reduce((sum , num) => sum + num ,100)

// //destructing arry
// const score = [1000 , 85 , 66 , 78 , 78 , 96]

// const [gold , silver , bronze , ...every] = score

// console.log(gold)
// console.log(silver)
// console.log(every)

//destructing object

// const user = {
//   email: "harvey@gmail.com",
//   password: "sCoTt1948sMiTh",
//   firstName: "Harvey",
//   lastName: "Milk",
//   born: 1930,
//   died: 1978,
//   bio: "Harvey Bernard Milk was an American politician and the first .",
//   city: "San Francisco",
//   state: "California",
// };
// //const email = user.email
// const {email , firstName , lastName , bio  } = user;
// console.log(email)
// console.log(bio)

// const {born : birthyear , died : deathyear = "N?A"} = user;
// console.log(birthyear);
// console.log(deathyear);

// const user2 = {
//     email : 'sumanranjan@gmail.com',
//     firstName: "Hary",
//     lastName: "Milk",
//     born: 1987,
//     city : 'newyork',
//     state : 'oklahoma'
// }


// const {city , state , died = 'NA?'} = user2
// console.log(died)

//destructing para
// const user = {
//     email: "harvey@gmail.com",
//     password: "sCoTt1948sMiTh",
//     firstName: "Harvey",
//     lastName: "Milk",
//     born: 1930,
//     died: 1978,
//     bio: "Harvey Bernard Milk was an American politician and the first .",
//     city: "San Francisco",
//     state: "California",
//   };

// // function fullname (user){
// //     const {firstName , lastName} = user
// //     return `${firstName} ${lastName}`
// // }

// // console.log(fullname(user))

// function fullname({firstName , lastName }){
//     return `${firstName} ${lastName}`
// }


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

// movies.filter((movie) => movie.score >= 90)
movies.filter((score) => score >= 90)


// movies.map(movie =>{
//     return `${movie.title} ($(movie.title)) is rated ${movie.score}`
// })

movies.map(({title , score }) =>{
    return `${title} (${score})`
})

