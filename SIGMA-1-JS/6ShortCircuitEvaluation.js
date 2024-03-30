
// function printTrue(){
//     console.log("true")
//     return true
// }

// function printFalse(){
//     console.log("False")
//     return false
// }

// printTrue() || printFalse()


// function printName (name){

//     // name = name || "Default"
//     // if(name == null){
//     //     name = "Default"; 
//     // }
//     console.log(name || "Default")
// }


// printName()


const person = {
    name : 'suman',
    address : {
        street : "main st"
    }

}

// if(person != null && person.address != null){
//     console.log(person.address.street);
// }

console.log(person && person.address && person.address.street)

