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

//scope

// const bird = "hey"

// function heHi(){
//     const bird = "hw"
//     console.log(bird);
// }
// console.log(bird)
// heHi();

for(let i = 0 ; i < 2 ; i++){
    var msg = "oye" // when we we use var msg is avalible out of the scope
}
// let and const are block scope
console.log(msg)