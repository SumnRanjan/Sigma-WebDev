// axios.get("https://catfact.ninja/facts")
// .then((res)=>{
//     console.log("Response" , res)
// }) 
// .catch((e)=>{
//     console.log("Error!!" , e)
// })

// const { default: axios } = require("axios")

// const { default: axios}  = require("axios")


// const getCat = async (id)=>{
//     try{
//         const res = await axios.get(`https://catfact.ninja/fact${id}`)
//         console.log(res.data)
//     } catch(e){
//         console.log("error" , e)
//     }
// }

// getCat('s')

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const getJoke = async () =>{
    const addNewJokes = await getDadJoke()
    const newLi = document.createElement('li')
    newLi.append(addNewJokes)
    jokes.append(newLi)
}

const getDadJoke = async () =>{
    try{
        const config = {headers : { Accept : 'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/" , config)
        return res.data.joke
    } catch(e){
        return "NO Jokes :("
        
    }
    
}

button.addEventListener('click' , getJoke)