// async function hello(){
    //it return a promise
// } 

// const sing = async () =>{
//     // throw new Error('UH OH')
//     throw "OH NO , Problem"
//     return 'LA LA LA LA'
// }

// sing()
//     .then((data)=>{
//         console.log("PROMISE RESOLVED WITH : " , data)
//     })
//     .catch(err =>{
//         console.log("OH NO , PROMISE REHECTED!");
//         console.log(err)
//     })

const login = async (username , password) =>{
    if(!username || !password) throw 'User Not Found'
    if(password === 'zxcvbnm') return 'welcome'
    throw 'invalid password'
}

login('asd' ,'zxcvbnm')
    .then(msg =>{
        console.log("logged in")
        console.log(msg)
    })
    .catch(err =>{
        console.log('Error !!')
        console.log(err)
    })