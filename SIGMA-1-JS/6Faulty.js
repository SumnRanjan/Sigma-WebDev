let random = Math.random()

let a = prompt("Enter the number")
let c = prompt("Enter operation")
let b = prompt("Enter the number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random > 0.1){
    //perform the correct calulation
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(` ${a} ${c} ${b}`)}`)
}

else{
    c = obj[c]
    alert(`The result is ${eval(` ${a} ${c} ${b}`)}`)
}