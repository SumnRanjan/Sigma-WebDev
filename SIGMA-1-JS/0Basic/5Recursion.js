// for(let i = 1 ; i<=10 ; i++){
//     console.log(i)
// }

// function printNumber(number){
//     if(number > 10) return
//     console.log(number)
//     printNumber(number + 1)
// }

// printNumber(1)


// let sum = 0
// for(let i = 1 ; i <= 10 ; i++){
//     sum = sum + i;
// }
// console.log(sum)

// function sumNumber(number){
//     if(number <= 0) return 0
//     return number + sumNumber(number - 1)
// }

// console.log(sumNumber(10));


const person = {
    name: "kyle",
    friend :{
      name : "joe",
      friend:{
          name: "sally"
      }
    }
  }

  function printName(currentPerson){
    if(currentPerson == null) return
    console.log(currentPerson.name)
    printName(currentPerson.friend)
  }




  printName(person) 