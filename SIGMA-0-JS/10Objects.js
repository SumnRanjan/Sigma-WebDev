// let person = { 
//     name: "suman", 
//     age: 19, 
//     favNo: 69,

//     // sayHi: function(){
//     //     console.log("Hi")
//     // },
//     sayHi1(){
//         console.log("Hii")
//     },
//     property : "value"
//  };
// console.log(person);
// console.log(person.name);
// // person.sayHi()
// person.sayHi1()


//Cw --
// let car = {
//     Make : "Thar",
//     Model : "XV200",
//     isUsed : true,

//     makeNoise(){
//         console.log("Vroom")
//     }
// }
// // const Pro = "Make"
// // console.log(car[Pro])

// console.log(car.Make)
// car.makeNoise()


//object inside object --
// let person = {
//     name : "suman",
//     hobbies: ["weight Lifting" ,"programing"],
//     address:{
//         street: "123 PB",
//         city: "somewhere"
//     }
// }

// console.log(person.hobbies[0])
// console.log(person.address.city)


//Cw --

let Book = {
    Title : "Wings Of Fire",
    Author : {
        name : "APJ Abdul Kalam",
        age : 65
    }
}

console.log(Book.Title)
console.log(Book.Author.name)

Book.Title = "New Title"
Book.Author.name = "New Name"

console.log(Book.Title)
console.log(Book.Author.name)