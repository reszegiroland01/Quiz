//objektum

let newQuiz = {
    questions:[
        // {
        //     // id: 1,
        //     // question: "Ki volt az Egyesült Államok első elnöke?",
        //     // options: {
        //     //     A: "Abraham Lincoln",
        //     //     B: "Thomas Jefferson",
        //     //     C: "George Washington",
        //     //     D: "John Adams"
        //     // },
        //     // correctAnswer: "C"


        // }

    ]
}

function addNewQuiz(){
    let question = document.getElementById("question").value
    let firstAnswer = document.getElementById("firstAnswer").value
    let secondAnswer = document.getElementById("secondAnswer").value
    let thirdAnswer = document.getElementById("thirdAnswer").value
    let fourthAnswer = document.getElementById("fourthAnswer").value
    let correctAnswer = document.getElementById("correctAnswer").value

    if(question !== "" && firstAnswer !== "" && secondAnswer !== "" && thirdAnswer !== "" && fourthAnswer !== "" && correctAnswer !== ""){
        let newObject = {
            id: newQuiz.questions.length,
            question: question,
            options:{
                A: firstAnswer,
                B: secondAnswer,
                C: thirdAnswer,
                D: fourthAnswer
            },
            correctAnswer: correctAnswer
        }
    
        newQuiz.questions.push(newObject)
    
        document.getElementById("question").value = ""
        document.getElementById("firstAnswer").value = ""
        document.getElementById("secondAnswer").value = ""
        document.getElementById("thirdAnswer").value = ""
        document.getElementById("fourthAnswer").value = ""
        document.getElementById("correctAnswer").value = ""
    }
    else{
        alert("Töltsd ki a mezőket!")
    }

    console.log(newQuiz)
}

 

function startGame(){
    let question = document.getElementById("question").value
    let firstAnswer = document.getElementById("firstAnswer").value
    let secondAnswer = document.getElementById("secondAnswer").value
    let thirdAnswer = document.getElementById("thirdAnswer").value
    let fourthAnswer = document.getElementById("fourthAnswer").value
    let correctAnswer = document.getElementById("correctAnswer").value
    if(question !== "" || firstAnswer !== "" || secondAnswer !== "" || thirdAnswer !== "" || fourthAnswer !== "" || correctAnswer !== "")
    {
        let newObject = {
            id: newQuiz.questions.length,
            question: question,
            options:{
                A: firstAnswer,
                B: secondAnswer,
                C: thirdAnswer,
                D: fourthAnswer
            },
            correctAnswer: correctAnswer
        }
        newQuiz.questions.push(newObject)
        localStorage.setItem("quiz",JSON.stringify(newQuiz))
        window.location.href="../game/index.html"
    }
    if(newQuiz.questions.length === 0){
        alert("Üres te kutya")
    }
    else{
        localStorage.setItem("quiz",JSON.stringify(newQuiz))
        window.location.href="../game/index.html"
    }
    
}

