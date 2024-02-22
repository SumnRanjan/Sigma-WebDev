function nice(name) {
    console.log("Hey " + name + " you are nice")
    console.log("Hey " + name + " you are good!!")
    console.log("Hey " + name + " your tshirt is good")
    console.log("Hey " + name + " your course is good")
}

// nice("suman")
// nice("rudra")

function sum(a, b, c = 3) {
    // console.log(a+b)
    return a + b + c
}

// result1 = sum(3, 5)
// result2 = sum(31, 5)
// result3 = sum(3, 15, 1)

// console.log("Sum of a and b : ", result1)
// console.log("Sum of a and b : ", result2)
// console.log("Sum of a and b : ", result3)

const func1 = (x) => {
    console.log("I am a arrow function" , x)
}

func1(32)
func1(52)
func1(42)