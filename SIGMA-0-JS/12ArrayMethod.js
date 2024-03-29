
//Array Method ----- 

const a = [1,2,3,4,5]
const b = [2,4,6,8,10]

a.forEach((number , index) =>{
  console.log(number + " " + index)
})

a.map(number =>{
  return number * 2;
})

console.log(a)

// const newA = a.map(number =>{
//   return number * 2;
// })

// console.log(newA)

// const newA = a.filter(number =>{
//   return number > 2;
// })

// console.log(newA)

// const newA = a.find(number =>{
//   return number > 2;
// })

// console.log(newA)

// const isTrue = a.some(number =>{
//   return number > 9;
// })

// console.log(isTrue)

// const isTrue = a.every(number =>{
//   return number > 0
// })

console.log(isTrue)


const sum = a.reduce((sum , number) =>{
  return sum + number;
},0)

console.log(sum)


const items =[
  {price : 10},
  {price : 10},
  {price : 10},
  {price : 10},
  {price : 10},
]

const total = items.reduce((sum , items) =>{
  return sum + items.price;
},0)

console.log(total)


const  isTrue = a.includes(2)
console.log(isTrue)