// console.log("Hey i am a LOOp");

// For looop ki bateee.......

// let a = 1;

// for (let i = 0; i < 100; i++) {
//     console.log(a + i);
// }

// let obj = {
//     name: "suman",
//     role: "student",
//     company: "code ai"
// }

// for (const key in obj) {
//     const element = obj[key];
//     console.log(key , element);
// }

// for (const key in obj) {
//     console.log(key);
// }

// for (const c of "Harry") {
//     console.log(c)
// }

// While ki bateee Darling.....

// let i = 1;
// while(i<6){
//     console.log(i)
//     i++;
// }

// let i = 10;
// do {
//     console.log(i)
//     i++;
// } while (i<6);

// For loop --

// const love = [1 ,4 ,3]
// for(let i = 0 ; i < love.length ; i++){
//     console.log( i , love[i])
// }

// Nested for loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is : ${i}`)
//     for(let j = 1 ; j <=3 ; j++){
//         console.log(`    j  is : ${j}`)
//     }
// }

// const l = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for(let  i = 0 ; i < l.length ; i++){
//     const row = l[i]
//     for(let j = 0 ; j < row.length ; j++){
//         console.log(row[j])
//     }
// }

//while loop

// let l = 0
// while( l <= 10){
//     l++;
//     console.log(l)
// }

// const s = "sim"
// let guess = prompt("enter")

// while (guess !== s){
//     guess = prompt("enter")
// }
// console.log('congo')

//break

// let s = prompt("enter something")
// while (true){
//     s = prompt(s)
//     if(s.toLowerCase() === "stop") break;

// }
// console.log("You Win")

// for of looop

// const substring = [
//   "cringe",
//   "books",
//   "hacked",
//   "funny",
//   "pics",
//   "soccer",
//   "love",
// ];

// for (let i = 0; i < substring.length; i++) {
//   console.log(`visit reddit.com/r/${substring[i]}`);
// }

// // now for of loop

// for (let sub of substring) {
//   console.log(`visit reddit.com/r/${sub}`);
// }


// const l = [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ];

//     for(let row of l){
//         for(let student of row){
//             console.log(student)
//         }
//     }


// for (let char of  "hello"){
//     console.log(char)
// }



const test = {
    suman : 10,
    sunaina : 20,
    sumit : 30,
    kim : 40,
    nadia : 5,
    suraj : 14,
    love : 100,
    rudra : 55
}

// for in loop
// for(let person in test){
//     console.log(`${person} scored ${test[person]}`)
// }


// //convert into arry
// console.log(Object.keys(test))
// console.log(Object.values(test))
// console.log(Object.entries(test))

let total = 0
for(let score of Object.values(test) ){
    total = total + score
}

console.log(total)