function createUser(name , age){
    return {name : name , age : age , human : true}
}

// const  user =  createUser("sally" , 25)
// console.log(user)


// const date = new Date()
// console.log(date.getUTCDate())


// function User (name , age){
//     this.name = name
//     this.age = age
//     this.human = true;
// }

// const  user =  new createUser("sally" , 25)
// console.log(user)

// const user1 = new User("suman", 21)
// console.log(user1)

class User {
    constructor(name , age){
        this.name = name;
        this.age = age;
        this.human = true;
    }


    PrintName(){
        console.log(this.name)
    }
}


const  user =  new User("sally" , 25)
const user1 = new User("suman", 21)
user.PrintName();
user1.PrintName()
-


new Date() // most impo
