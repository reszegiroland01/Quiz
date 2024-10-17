let time = 1001

function timeCounter() {
    
    if (time > 0) {
        time = time - 1;
        timer = setTimeout(() => timeCounter(), 10); // Újra beállítja az időzítőt
        
        setProgressbarWidth(time);
    } else {
        showOptions();
    }

    
}



function renderProgressBar(){
    let time = document.getElementById("time")
    let progressBar = `<div class="w-full bg-green-900 h-[20px]">
    <div id="progressBar" class="bg-red-900 h-[20px] transition-all duration-300" > </div>
    </div>`

    time.innerHTML = progressBar
    console.log("Szia")
    timeCounter()
}
renderProgressBar()

function setProgressbarWidth(time){
    let progressBar = document.getElementById("progressBar")
    let progressBarWidth = time / 10
    progressBar.style.width = progressBarWidth + "%"
    console.log(progressBarWidth)
}

