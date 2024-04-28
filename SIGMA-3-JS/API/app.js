//Not ar all imp to rememeber any of this code
// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("loaded!!")
//     const data = JSON.parse(this.responseText)
//     console.log(data.length)
// }

// req.onerror = function(){
//     console.log("Error!!")
//     console.log(this)
// }

// req.open("GET" , "https://catfact.ninja/fact")
// req.send();

//Fetch

fetch("htt ps://catfact.ninja/fact")
.then((res) => {
    console.log("RESOLVED!" , res)
})
.catch((e)=>{
    console.log("Error!" , e)
})