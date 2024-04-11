// function nice(name) {
//     console.log("Hey " + name + " you are nice")
//     console.log("Hey " + name + " you are good!!")
//     console.log("Hey " + name + " your tshirt is good")
//     console.log("Hey " + name + " your course is good")
// }

// // nice("suman")
// // nice("rudra")

// function sum(a, b, c = 3) {
//     // console.log(a+b)
//     return a + b + c
// }

// // result1 = sum(3, 5)
// // result2 = sum(31, 5)
// // result3 = sum(3, 15, 1)

// // console.log("Sum of a and b : ", result1)
// // console.log("Sum of a and b : ", result2)
// // console.log("Sum of a and b : ", result3)

// // const func1 = (x) => {
// //     console.log("I am a arrow function" , x)
// // }

// // func1(32)
// // func1(52)
// // func1(42)

// // something new
// function PrintVariable(variable) {
//     console.log(variable);
// }

// function func(x) {
//     x("hello world");
// }

// func(PrintVariable); //passing the function

// //
// function sumcallback(a, b, callback) {
//     callback(a + b);
// }

// function handleSum(sum) {
//     console.log(sum);
// }

// sumcallback(1, 2, handleSum);

// // anonymous function
// function printName(name, callback) {
//     callback("hello " + name)
// }

// printName("suman", function (variable) {
//     console.log(variable)
// })

// //arrow function
// function sum(a, b) {
//     return a + b;
// }

// let sumArrow = (a, b) => {
//     return a + b;
// }
// //same as sumArrow if there is only one arguement we can pass arrow function like sumArrow1
// let sumArrow1 = (a, b) =>  a + b;

// console.log(sumArrow(3,4))
// console.log(sumArrow1(3,4))
// console.log(sum(1, 2))

// // function PrintName(name){
// //     console.log(name)
// // }

// // let Printname = name =>{
// //     console.log(name);
// // }

// // PrintName("suman")
// // Printname("sunaina")

// function PrintHi(name){
//     return "HI " + name;
// }

// let PrintHiArrow = name => "Hi " + name

// console.log(PrintHi("suman"))
// console.log(PrintHiArrow("sunaina"))

// function hi(){
//     console.log('hi')
// }

// let hiArrow = () => {
//     console.log("hi")
// }

// hi();
// hiArrow();

// function func1(x, callback){
//     callback(x);
// }

// func1(10 , (variable) => {
//     console.log(variable)
// })

// //  scoping

// function sayHi(name){
//     let result = "Hi " + name
//     console.log(result)
// }

// let name = "suman"

// sayHi(name);

//-------------------------------Function---------------------------------------------

// grumpus() // it will work ?

// function grumpus(){
//     console.log("hi")
//     console.log("hi")
//     console.log("hi")
// }

// grumpus()

//single argument
// function sayHi(name){
//     console.log(`Hi ${name}`)
// }

// sayHi('Harry')

//2 Argument

// function repeat(str, number){
//     let result = '';
//     for(let i = 0 ; i<number ; i++){
//         result = result+str;
//     }
//     console.log(result)
// }

// repeat('hi' , 3)

//return type

// function sum(num1 , num2){
//     return num1+num2;
// }

// console.log(sum(2,5))

//scope----------------------------------------

// const bird = "hey"

// function heHi(){
//     const bird = "hw"
//     console.log(bird);
// }
// console.log(bird)
// heHi();

// for(let i = 0 ; i < 2 ; i++){
//     var msg = "oye" // when we we use var msg is avalible out of the scope
// }
// // let and const are block scope
// console.log(msg)

//  Lexical Scope

// function bankRobbery(){
//     const heroes = ['Spiderman' , 'Ironman' , 'Black Panther' , 'Wolverine']
//     function cryForHelp(){
//         for(let hero of heroes){
//             console.log(`PLEASE HELP US , ${hero.toUpperCase()}` );
//         }
//     }
//     cryForHelp();
// }

// bankRobbery()

//Function expression

// function add(x, y) {
//   return x + y;
// }

// console.log(add(10 , 20))

// const Add = function add(x, y) {
//     return x + y;
//   }

// let add = Add(40,50)

// console.log(add)

// --Higher Order function

// function callTwice(func){
//   func();
//   func()
// }

// function rollDie(){
//   const roll = Math.floor(Math.random() * 6) + 1
//   console.log(roll)
// }

// callTwice(rollDie)

// function makeMysteryFun(){
//   const rand = Math.random();
//   if(rand > 0.5) {
//     return function(){
//       console.log("CONGRAT ,  I AM A GOOD FUNCTION !")
//       console.log("YOU WIN TEN RUPEE")
//     }
//   } else{
//     return function (){
//       alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
//       alert("STOP TRYING TO CLOSE THIS WINDOW")
//       alert("STOP TRYING TO CLOSE THIS WINDOW")
//       alert("STOP TRYING TO CLOSE THIS WINDOW")
//       alert("STOP TRYING TO CLOSE THIS WINDOW")
//     }
//   }
// }

// // -------------
// function makeBetween(min , max )
// {
//     return function (num){
//         return num >= min && num <= num;
//     }
// }

// const adult = makeBetween(1 ,20)

// Method and function
// every method is function  but every function is not method
// // short hand
// const myMath = {
//     PI : 3.14,
//     square (num){
//         return num * num
//     },
//     cube (num){
//         return num ** 3
//     }
// }

// console.log(myMath.square(8))
// console.log(myMath["cube"](4))

//this keyword

// const cat = {
//     name : 'Blue Steele',
//     color : 'grey',
//     breed : 'scottish fold',
//     meow (){
//         console.log(`${this.name} Say Meow`)
//     }
// }

// console.log(cat.meow())

// Try and catch

// try {
//     hello.toUpperCase()
// } catch{
//     console.log("error")
// }

// console.log("After")

// function yell (msg){
//     try{
//         console.log(msg.toUpperCase().repeat(3))
//     } catch(e){
//         console.log("PLS PASS A VAILD STRING")
//     }
// }

// yell(456)

//Arrow Function --------

// const add = (x, y) => {
//   return x + y
// }

// console.log(add(5,5))

// const square = x => {
//     return x * x
// }

// console.log(square(6))

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

// console.log(rollDie())

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )
// console.log(rollDie())

// const add = (a,b) => a + b
// console.log(add(4,4))

//arrow function with this

// const person ={
//     firstname : 'suman',
//     lastname : 'ranjan',
//     //this will not work give undefine
//     fullname: () => {
//         return `${this.firstname } ${this.lastname}`
//     },
//     shoutName: function(){
//         setTimeout( () => {
//             console.log(this.fullname())
//         }, 3000);
//     }
// }

// console.log(person.shoutName())

//Default Parameters always second

// function rollDie(numSide = 6){
//     return Math.floor(Math.random() * numSide) + 1
// }

// console.log(rollDie())

// function greet(person , msg = "Hey There"){
//     console.log(`${msg} , ${person}`)
// }

// greet("sumn")

//Spread ...

// console.log(Math.max(13,1,66,45));

// const nums = [10 , 55 , 625 , 45 , 62]
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));

// console.log(..."hello")

// const cats = ['blue' , 'scout' , 'rocket']
// const dogs = ['sumit' , 'love']

// console.log([...cats , ...dogs , 'speed']) // copy ary in new arry

// spread object

// const feline = {legs : 4, family : 'Felidae'}
// const canine = {isFurry : true , family : 'love'}

// // console.log({...feline , color : 'black'})

// const catDog ={ ...canine , ...feline}
// const catDog1 ={  ...feline , ...canine}
// console.log(catDog)
// console.log(catDog1)

// const s = { ...[1, 2, 3] };
// console.log(s);

// const dataFrame = {
//   email: "sumna@gmail.com",
//   password: "rfgb",
//   username: "rjf",
// };

// const newuser = { ...dataFrame, id: 2345, isAdmin: false };
// console.log(newuser)


//agrument hold everythings to it
//rest

// function sum(...nums){
//   return nums.reduce((total , el)=> total + el)
// }

// console.log(sum(2,5,6,5,6))


// function race(gold , silver , ...every){
//     console.log(`Gold medal goes tp : ${gold}`);
//     console.log(`Gold medal goes tp : ${silver}`);
//     console.log(`Gold medal goes tp : ${every}`);
// }
// race('suman' , 'ted' , 'tiny' , 'su')
