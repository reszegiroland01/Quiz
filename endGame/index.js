let leaderBoard = JSON.parse(localStorage.getItem("leaderBoard"))

function endGame(){
    // if(!(currentQuestion < quiz.questions.length-1)){
        let userData = JSON.parse(localStorage.getItem("user"))
        // userData.score = currentScore
      
        document.getElementById("cards").innerHTML = ""
        document.getElementById("cards").innerHTML = `
        <div class="flex flex-col items-center gap-8 px-2">
            <p class="md:text-[50px] text-[28px] font-bold mt-[20px]">Játék vége!</p>
            <p class="md:text-[50px] text-[28px] font-bold ">${userData.name} elért pontok: ${userData.score}</p>
            <button class="text-[18px] font-semibold bg-slate-800 text-white px-8 py-4 rounded-xl " onclick="newGame()">Újra játszok</button>
            
            <p class="md:text-[50px] text-[28px] font-bold m-5">Leader Board</p>
            <div class="flex flex-col gap-4 justify-center items-center border border-gray-700 md:w-1/4 w-full  rounded-2xl overflow-y-scroll max-h-[400px]">
                
                ${leaderBoard!==null && leaderBoard.map((item) =>
                    `
                    <div class="flex justify-between w-full h-[40px] px-8 items-center border-b-[1px] border-gray-700">
                        <p class="text-[20px] font-semibold h-full">${item.name}</p>
                        <p class="text-[20px] font-semibold ">${item.score}</p>
                    </div>`
                ).join('')}  
            </div>
        </div>`

        console.log(leaderBoard)

        console.log(userData.name)
    // }

// after this here we are calling both the function so it works
    start();
    stop();
}

endGame()

function newGame(){
    window.location.href = "../mode/index.html"
}