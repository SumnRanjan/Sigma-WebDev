const form = document.getElementById('quiz-form')
const answers = Array.from(document.querySelectorAll('.answer'))
const question = document.querySelectorAll('.question-item')
const alert = document.querySelector('#alert')

form.addEventListener("submit" , e =>{
    e.preventDefault() 

    question.forEach(question =>{
        question.classList.add('incorrect')
        question.classList.remove('correct')
    })



    const checkAns = answers.filter(answers => answers.checked)
    // console.log(checkAns)

    checkAns.forEach(answers =>{
        const isCorrect = answers.value === "true"
        const questionitem = answers.closest('.question-item')

        if(isCorrect){
            questionitem.classList.add('correct')
            questionitem.classList.remove('incorrect')
        } else{
            questionitem.classList.add("incorrect")
            questionitem.classList.remove("correct")
        }

        const allTrue = checkAns.every(answers => answers.value === "true")
        const allans = checkAns.length === question.length
        if(allTrue && allans){
            alert.classList.add("open")
            setTimeout(()=>{
                alert.classList.remove("open")
            },1000)
        }
    })
  
})

