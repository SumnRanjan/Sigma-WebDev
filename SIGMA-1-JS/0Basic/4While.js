// let i = 0;
// while(i < 5){
//     console.log(i)
//     i++
// }

const person = {
  name: "kyle",
  friend :{
    name : "joe",
    friend:{
        name: "sally"
    }
  }
}

let currentPerson = person
while(currentPerson.friend != null){
    if(currentPerson.name === "joe") break
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend  
}
