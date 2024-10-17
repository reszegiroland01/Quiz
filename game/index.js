let timeFromLocalstorage = Number(localStorage.getItem("difficultyTime"))
let title = localStorage.getItem("difficultyTitle")
let quiz = JSON.parse(localStorage.getItem("quiz"))


let currentQuestion = 0
let time = timeFromLocalstorage
let timer;


function checkUser(){
    let user = JSON.parse(localStorage.getItem("user"))
    if(!user.name){
        alert("Adj meg nevet")
        window.location.href = "../index.html"
    }
}

function renderProgressBar(){
    let time = document.getElementById("time")
    
    let progressBar = `
    <div class="flex flex-col gap-2">
        <p class="md:text-[25px] text-[18px]  text-gray-700">${title}</p>
        <div class="w-full  h-[20px] border border-slate-700 rounded-xl ">
            <div id="progressBar" class="h-[18px]  rounded-xl " > </div>
        </div>
        <div><p class="text-[24px] font-semibold text-gray-700">${currentQuestion+1}/${quiz.questions.length}</p></div>
    </div>
    `

    time.innerHTML = progressBar
    timeCounter()
}

function setProgressbarWidth(time){
    let progressBar = document.getElementById("progressBar")
    let progressBarWidth = (time/timeFromLocalstorage)*100
    
    progressBar.style.width = progressBarWidth + "%"
    console.log(progressBarWidth)
}

function renderQuestions(){
    
    clearTimeout(timer);
    document.getElementById("cards").innerHTML = ""
    
    let card = `
    
        <div class="flex flex-col gap-28">
            <p id="time" class=" w-full h-[20px]"></p>

            <div>    
                <div class="flex items-center my-2 md:my-0">
                    <p class="md:text-[50px] text-[28px] md:w-[1000px] w-full font-bold">${quiz.questions[currentQuestion].question}</p>
                </div>
            
            
                <div class="flex flex-col gap-4">
                `
                    for(const [key, value] of Object.entries(quiz.questions[currentQuestion].options)) {
                        card += `<button  id="${key}" onclick="answer('${key}')" class="flex items-center cursor-pointer bg-slate-200 px-6 py-2 rounded-xl md:w-[1000px] w-full gap-5 shadow-md hover:bg-slate-400">
                        <div class="flex justify-center items-center font-bold text-[20px] bg-orange-400 w-[45px] h-[45px] rounded-full text-white"><p>${key}</p></div>
                        <p class="text-[18px]  font-semibold">${value}</p>
                        </button>`
                    }
                `   
                </div>
            </div>    
        </div>
    
    `

    document.getElementById("cards").innerHTML = card 
    
    time = Number(localStorage.getItem("difficultyTime")); // Visszaállítja az időt
    renderProgressBar()
    timer =  timeCounter(); // Új időzítő

    
}
renderQuestions()
let currentScore = 0


function answer(selectedAnswer){
    if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
            currentScore = currentScore + 1
    }
    showOptions()
        
}
const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 100); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  for stopping the confetti 

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};









function showOptions(){
    let progressBar = document.getElementById("progressBar")
    if(progressBar.classList.contains("bg-orange-600")){
        progressBar.classList.remove("bg-orange-600")
    }
    if(progressBar.classList.contains("bg-red-600")){
        progressBar.classList.remove("bg-red-600")
    }
    clearTimeout(timer);
    let target = document.getElementById(`${quiz.questions[currentQuestion].correctAnswer}`)
    target.classList.remove("bg-slate-200")    
    target.classList.add("bg-green-500")
    
    let keys = Object.keys(quiz.questions[currentQuestion].options)
    
    keys.map((key) => {
        if(key !== quiz.questions[currentQuestion].correctAnswer){
            let target = document.getElementById(`${key}`)
            target.classList.add("bg-red-500")
        }
    })

    if(currentQuestion < quiz.questions.length-1){
        time = Number(localStorage.getItem("difficultyTime"))
        currentQuestion = currentQuestion + 1
        setTimeout(renderQuestions, 1000)
    }
    else {

        
        // Leaderboard mentése
        let leaderBoard = JSON.parse(localStorage.getItem("leaderBoard")) ?? []
        let user = JSON.parse(localStorage.getItem("user"))

        // Ha a user adat sikeresen betöltődött
        if(user) {
            user.score = currentScore
            localStorage.setItem("user",JSON.stringify(user))
            leaderBoard.push(user)
            localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard))
            console.log(leaderBoard)
        } else {
            console.log("User data is null or undefined in localStorage.")
        }


        window.location.href="../endGame/index.html"
    }
}




// function timeCounter() {
//     let timep = document.getElementById("time");
//     if (time > 0) {
//         time = time - 1;
//         timer = setTimeout(() => timeCounter(), 1000); // Újra beállítja az időzítőt
//         timep.innerHTML = time;
//         timerColor(time);
//     } else {
//         showOptions();
//     }
// }



function timeCounter() {
    
    if (time > 0) {
        time = time - 1; 
        timer = setTimeout(() => timeCounter(), 10); // Újra beállítja az időzítőt
        setProgressbarWidth(time);
        timerColor(time)
    } else {
        showOptions();
        

    }
    
}

function timerColor(time){
    let progressBar = document.getElementById("progressBar")
    time = (time/timeFromLocalstorage)*100
    
    if(time <= 100 && time >= 70 )
    {
        progressBar.classList.add("bg-green-500")
        
    }

    if(time <= 60 && time >= 40 )
    {
        progressBar.classList.remove("bg-green-500")
        progressBar.classList.add("bg-orange-600")
    }

    if(time <= 30 && time >= 0 )
    {
        progressBar.classList.remove("bg-orange-600")
        progressBar.classList.add("bg-red-600")
    }
    if(time === 0){
        
        showOptions()
    }

}




