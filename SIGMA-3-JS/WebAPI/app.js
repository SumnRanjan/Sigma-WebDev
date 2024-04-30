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

// fetch("https://catfact.ninja/fact")
//     .then((res) => {
//         console.log("RESOLVED!", res)
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((e) => {
//         console.log("Error!", e)
//     })



// fetch("https://catfact.ninja/fact")
//     .then((res) => {
//         console.log("RESOLVED!", res)
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)
//         return fetch("https://catfact.ninja/facts")
//     })
//     .then((res) =>{
//         console.log("SECOND REQUEST!!!!")
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data)
//         return fetch("https://catfact.ninja/facts")
//     })
//     .catch((e) => {
//         console.log("Error!", e)
//     })


const load = async () =>{
    try{
        const res = await fetch("https://catfact.ninja/fact")
        const  data = await  res.json()
        console.log(data)
        const res1 = await fetch("https://catfact.ninja/facts")
        const  data1 = await  res1.json()
        console.log(data1)
    } catch (e){
        console.log("Error!!!" , e)
    }
}

load()