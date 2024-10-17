const quizData = {
    questions: [
        // Történelem kategória
        {
            id: 1,
            category: "Történelem",
            question: "Ki volt az Egyesült Államok első elnöke?",
            options: {
                A: "Abraham Lincoln",
                B: "Thomas Jefferson",
                C: "George Washington",
                D: "John Adams"
            },
            correctAnswer: "C"
        },
        {
            id: 2,
            category: "Történelem",
            question: "Mikor fedezte fel Kolumbusz Amerikát?",
            options: {
                A: "1492",
                B: "1485",
                C: "1498",
                D: "1500"
            },
            correctAnswer: "A"
        },
        {
            id: 3,
            category: "Történelem",
            question: "Melyik római császár volt hatalmon, amikor Róma leégett Kr. u. 64-ben?",
            options: {
                A: "Nero",
                B: "Augustus",
                C: "Caligula",
                D: "Claudius"
            },
            correctAnswer: "A"
        },
        {
            id: 4,
            category: "Történelem",
            question: "Melyik birodalom bukott el 1453-ban?",
            options: {
                A: "Akkád Birodalom",
                B: "Római Birodalom",
                C: "Bizánci Birodalom",
                D: "Oszmán Birodalom"
            },
            correctAnswer: "C"
        },
        {
            id: 5,
            category: "Történelem",
            question: "Melyik csatában győzte le Napóleon a szövetséges erőket 1815-ben?",
            options: {
                A: "Austerlitz",
                B: "Borogyino",
                C: "Lipcse",
                D: "Waterloo"
            },
            correctAnswer: "D"
        },
        {
            id: 6,
            category: "Történelem",
            question: "Mikor ért véget az első világháború?",
            options: {
                A: "1916",
                B: "1917",
                C: "1918",
                D: "1919"
            },
            correctAnswer: "C"
        },
        {
            id: 7,
            category: "Történelem",
            question: "Melyik híres egyiptomi fáraó sírját fedezték fel 1922-ben?",
            options: {
                A: "Tutanhamon",
                B: "Ramszesz",
                C: "Nofertiti",
                D: "II. Amenhotep"
            },
            correctAnswer: "A"
        },
        {
            id: 8,
            category: "Történelem",
            question: "Ki volt a Szovjetunió első vezetője?",
            options: {
                A: "Josef Sztálin",
                B: "Leonyid Brezsnyev",
                C: "Vlagyimir Lenin",
                D: "Nikita Hruscsov"
            },
            correctAnswer: "C"
        },
        {
            id: 9,
            category: "Történelem",
            question: "Melyik forradalom zajlott Franciaországban 1789-ben?",
            options: {
                A: "Francia forradalom",
                B: "Orosz forradalom",
                C: "Amerikai forradalom",
                D: "Ipari forradalom"
            },
            correctAnswer: "A"
        },
        {
            id: 10,
            category: "Történelem",
            question: "Melyik nép építette a Machu Picchut?",
            options: {
                A: "Inka",
                B: "Maja",
                C: "Azték",
                D: "Olmék"
            },
            correctAnswer: "A"
        },

        // Földrajz kategória
        {
            id: 11,
            category: "Földrajz",
            question: "Mi a világ legnagyobb óceánja?",
            options: {
                A: "Atlanti-óceán",
                B: "Indiai-óceán",
                C: "Jeges-tenger",
                D: "Csendes-óceán"
            },
            correctAnswer: "D"
        },
        {
            id: 12,
            category: "Földrajz",
            question: "Melyik hegységben található a Mount Everest?",
            options: {
                A: "Andok",
                B: "Kordillerák",
                C: "Himalája",
                D: "Alpok"
            },
            correctAnswer: "C"
        },
        {
            id: 13,
            category: "Földrajz",
            question: "Melyik ország fővárosa Berlin?",
            options: {
                A: "Franciaország",
                B: "Spanyolország",
                C: "Németország",
                D: "Olaszország"
            },
            correctAnswer: "C"
        },
        {
            id: 14,
            category: "Földrajz",
            question: "Melyik sivatag a legnagyobb a világon?",
            options: {
                A: "Szahara",
                B: "Arab-sivatag",
                C: "Gobi-sivatag",
                D: "Kalahári-sivatag"
            },
            correctAnswer: "A"
        },
        {
            id: 15,
            category: "Földrajz",
            question: "Hány kontinens található a Földön?",
            options: {
                A: "5",
                B: "6",
                C: "7",
                D: "8"
            },
            correctAnswer: "C"
        },
        {
            id: 16,
            category: "Földrajz",
            question: "Melyik országban található a Taj Mahal?",
            options: {
                A: "Irán",
                B: "Pakisztán",
                C: "India",
                D: "Nepál"
            },
            correctAnswer: "C"
        },
        {
            id: 17,
            category: "Földrajz",
            question: "Melyik kontinens a legkisebb?",
            options: {
                A: "Európa",
                B: "Afrika",
                C: "Ausztrália",
                D: "Antarktisz"
            },
            correctAnswer: "C"
        },
        {
            id: 18,
            category: "Földrajz",
            question: "Melyik országban található a legnagyobb esőerdő?",
            options: {
                A: "Kongó",
                B: "Brazília",
                C: "Indonézia",
                D: "Peru"
            },
            correctAnswer: "B"
        },
        {
            id: 19,
            category: "Földrajz",
            question: "Melyik a Föld leghosszabb folyója?",
            options: {
                A: "Nílus",
                B: "Amazonas",
                C: "Mississippi",
                D: "Volga"
            },
            correctAnswer: "A"
        },
        {
            id: 20,
            category: "Földrajz",
            question: "Melyik országban található a Machu Picchu?",
            options: {
                A: "Peru",
                B: "Mexikó",
                C: "Chile",
                D: "Argentína"
            },
            correctAnswer: "A"
        },

        // Technológia kategória
        {
            id: 21,
            category: "Technológia",
            question: "Melyik évben jelent meg az első iPhone?",
            options: {
                A: "2005",
                B: "2007",
                C: "2009",
                D: "2010"
            },
            correctAnswer: "B"
        },
        {
            id: 22,
            category: "Technológia",
            question: "Mi a Python programozási nyelv szimbóluma?",
            options: {
                A: "Kígyó",
                B: "Delfin",
                C: "Macska",
                D: "Teknős"
            },
            correctAnswer: "A"
        },
        {
            id: 23,
            category: "Technológia",
            question: "Melyik cég fejlesztette ki a Windows operációs rendszert?",
            options: {
                A: "Apple",
                B: "Google",
                C: "Microsoft",
                D: "IBM"
            },
            correctAnswer: "C"
        },
        {
            id: 24,
            category: "Technológia",
            question: "Mi a vegyjele az aranynak a periódusos rendszerben?",
            options: {
                A: "Ag",
                B: "Au",
                C: "Al",
                D: "Ar"
            },
            correctAnswer: "B"
        },
        {
            id: 25,
            category: "Technológia",
            question: "Melyik cég gyártotta az első kereskedelmi laptopot?",
            options: {
                A: "Apple",
                B: "IBM",
                C: "Compaq",
                D: "HP"
            },
            correctAnswer: "B"
        },
        {
            id: 26,
            category: "Technológia",
            question: "Mi volt az első teljesen elektromos autómodell?",
            options: {
                A: "Nissan Leaf",
                B: "Tesla Roadster",
                C: "Chevrolet Bolt",
                D: "BMW i3"
            },
            correctAnswer: "B"
        },
        {
            id: 27,
            category: "Technológia",
            question: "Melyik cég fejlesztette ki az Android operációs rendszert?",
            options: {
                A: "Microsoft",
                B: "Apple",
                C: "Google",
                D: "Samsung"
            },
            correctAnswer: "C"
        },
        {
            id: 28,
            category: "Technológia",
            question: "Ki az alapítója a SpaceX vállalatnak?",
            options: {
                A: "Jeff Bezos",
                B: "Richard Branson",
                C: "Elon Musk",
                D: "Mark Zuckerberg"
            },
            correctAnswer: "C"
        },
        {
            id: 29,
            category: "Technológia",
            question: "Melyik volt az első sikeres internetes keresőmotor?",
            options: {
                A: "Yahoo",
                B: "Google",
                C: "AltaVista",
                D: "Bing"
            },
            correctAnswer: "C"
        },
        {
            id: 30,
            category: "Technológia",
            question: "Melyik évben alapították a Facebookot?",
            options: {
                A: "2004",
                B: "2006",
                C: "2008",
                D: "2010"
            },
            correctAnswer: "A"
        },
        {
            id: 31,
            category: "Történelem",
            question: "Ki volt a híres fáraó, aki megrendelésére épült a Nagy Piramis?",
            options: { A: "Kheopsz", B: "Tutankhamon", C: "Ramszesz", D: "Hatshepsut" },
            correctAnswer: "A"
          },
          {
            id: 32,
            category: "Történelem",
            question: "Melyik országban történt a Tiananmen téri tüntetés 1989-ben?",
            options: { A: "Tajvan", B: "Japán", C: "Kína", D: "Dél-Korea" },
            correctAnswer: "C"
          },
          {
            id: 33,
            category: "Történelem",
            question: "Ki volt az Orosz Birodalom utolsó cárja?",
            options: { A: "Nikita Hruscsov", B: "II. Miklós", C: "IV. Péter", D: "Katalin" },
            correctAnswer: "B"
          },
          {
            id: 34,
            category: "Történelem",
            question: "Mi volt a neve a híres politikai mozgalomnak, amelyet Mahatma Gandhi vezetett Indiában?",
            options: { A: "Szatjagraha", B: "Társadalmi igazságosság", C: "Sokkal több", D: "Brit gyarmati törvény" },
            correctAnswer: "A"
          },
          {
            id: 35,
            category: "Történelem",
            question: "Ki volt a híres francia forradalmár, aki meggyilkolta II. Lajos francia királyt?",
            options: { A: "Robespierre", B: "Danton", C: "Marat", D: "Napóleon" },
            correctAnswer: "C"
          },
          {
            id: 36,
            category: "Történelem",
            question: "Melyik évben indult a második világháború?",
            options: { A: "1938", B: "1939", C: "1940", D: "1941" },
            correctAnswer: "B"
          },
          {
            id: 37,
            category: "Történelem",
            question: "Ki volt a híres brit miniszterelnök a második világháború alatt?",
            options: { A: "Clement Attlee", B: "Winston Churchill", C: "Neville Chamberlain", D: "Margaret Thatcher" },
            correctAnswer: "B"
          },
          {
            id: 38,
            category: "Történelem",
            question: "Mi volt a neve annak a híres perzsa háborúnak, amely 480-ban zajlott?",
            options: { A: "Marathóni csata", B: "Thermopülei csata", C: "Salaminai csata", D: "Platái csata" },
            correctAnswer: "B"
          },
          {
            id: 39,
            category: "Történelem",
            question: "Milyen évben tartották az első holdraszállást?",
            options: { A: "1967", B: "1969", C: "1971", D: "1973" },
            correctAnswer: "B"
          },
          {
            id: 40,
            category: "Történelem",
            question: "Melyik országban zajlott a Római Birodalom bukása?",
            options: { A: "Görögország", B: "Franciaország", C: "Olaszország", D: "Németország" },
            correctAnswer: "C"
          },
          // Földrajz kategória
          {
            id: 41,
            category: "Földrajz",
            question: "Melyik a legnagyobb kontinens a világon?",
            options: { A: "Ázsia", B: "Afrika", C: "Észak-Amerika", D: "Európa" },
            correctAnswer: "A"
          },
          {
            id: 42,
            category: "Földrajz",
            question: "Mi a legmagasabb vízesés a világon?",
            options: { A: "Niagara-vízesés", B: "Angel-vízesés", C: "Iguazu-vízesés", D: "Victoria-vízesés" },
            correctAnswer: "B"
          },
          {
            id: 43,
            category: "Földrajz",
            question: "Hány tagállama van az Egyesült Államoknak?",
            options: { A: "48", B: "50", C: "52", D: "54" },
            correctAnswer: "B"
          },
          {
            id: 44,
            category: "Földrajz",
            question: "Melyik város az Egyesült Államok fővárosa?",
            options: { A: "New York", B: "Washington, D.C.", C: "Los Angeles", D: "Chicago" },
            correctAnswer: "B"
          },
          {
            id: 45,
            category: "Földrajz",
            question: "Melyik állam található a legnagyobb területen az Egyesült Államokban?",
            options: { A: "Kalifornia", B: "Texas", C: "Alaszka", D: "Florida" },
            correctAnswer: "C"
          },
          {
            id: 46,
            category: "Földrajz",
            question: "Mi a világ legnagyobb városa terület szerint?",
            options: { A: "Tokió", B: "Peking", C: "Mumbai", D: "New York" },
            correctAnswer: "A"
          },
          {
            id: 47,
            category: "Földrajz",
            question: "Melyik állam a legnagyobb az Egyesült Királyságban?",
            options: { A: "Skócia", B: "Wales", C: "Anglia", D: "Észak-Írország" },
            correctAnswer: "A"
          },
          {
            id: 48,
            category: "Földrajz",
            question: "Melyik földrajzi terület található a legmagasabb tengerszint feletti magasságban?",
            options: { A: "Himalája", B: "Andok", C: "Rocky Mountains", D: "Alpok" },
            correctAnswer: "A"
          },
          {
            id: 49,
            category: "Földrajz",
            question: "Mi a legnagyobb tó a világon?",
            options: { A: "Tanganika-tó", B: "Viktória-tó", C: "Bajkal-tó", D: "Kaszpi-tenger" },
            correctAnswer: "D"
          },
          {
            id: 50,
            category: "Földrajz",
            question: "Melyik országban található a Giza-i piramis?",
            options: { A: "Irán", B: "Egyiptom", C: "Törökország", D: "Görögország" },
            correctAnswer: "B"
          },
          // Technológia kategória
          {
            id: 51,
            category: "Technológia",
            question: "Mi a HTML jelentése?",
            options: { A: "Hypertext Markup Language", B: "High-Level Markup Language", C: "Hyperlink and Text Markup Language", D: "Hypertext Multi Language" },
            correctAnswer: "A"
          },
          {
            id: 52,
            category: "Technológia",
            question: "Ki találta fel a telefont?",
            options: { A: "Thomas Edison", B: "Alexander Graham Bell", C: "Nikola Tesla", D: "Albert Einstein" },
            correctAnswer: "B"
          },
          {
            "id": 53,
            "category": "Történelem",
            "question": "Ki volt az első római császár?",
            "options": {
              "A": "Julius Caesar",
              "B": "Augustus",
              "C": "Nero",
              "D": "Caligula"
            },
            "correctAnswer": "B"
          },
          {
            "id": 54,
            "category": "Történelem",
            "question": "Melyik híres tengeri csatában szenvedett vereséget Napóleon a brit flottától?",
            "options": {
              "A": "Trafalgar",
              "B": "Waterloo",
              "C": "Lepanto",
              "D": "Sztálingrád"
            },
            "correctAnswer": "A"
          },
          {
            "id": 55,
            "category": "Történelem",
            "question": "Melyik évben ért véget az első világháború?",
            "options": {
              "A": "1916",
              "B": "1917",
              "C": "1918",
              "D": "1919"
            },
            "correctAnswer": "C"
          },
          {
            "id": 56,
            "category": "Földrajz",
            "question": "Melyik folyó a leghosszabb a világon?",
            "options": {
              "A": "Amazonas",
              "B": "Nílus",
              "C": "Mississippi",
              "D": "Jangce"
            },
            "correctAnswer": "B"
          },
          {
            "id": 57,
            "category": "Földrajz",
            "question": "Melyik ország területén található a Kilimandzsáró?",
            "options": {
              "A": "Dél-Afrika",
              "B": "Kenya",
              "C": "Tanzánia",
              "D": "Uganda"
            },
            "correctAnswer": "C"
          },
          {
            "id": 58,
            "category": "Földrajz",
            "question": "Melyik a legnagyobb sivatag a Földön?",
            "options": {
              "A": "Góbisivatag",
              "B": "Szahel",
              "C": "Sarkvidéki sivatag",
              "D": "Szahara"
            },
            "correctAnswer": "C"
          },
          {
            "id": 59,
            "category": "Technológia",
            "question": "Ki találta fel az első modern számítógépet?",
            "options": {
              "A": "Charles Babbage",
              "B": "Alan Turing",
              "C": "John von Neumann",
              "D": "Steve Jobs"
            },
            "correctAnswer": "A"
          },
          {
            "id": 60,
            "category": "Technológia",
            "question": "Melyik cég készítette az első iPhone-t?",
            "options": {
              "A": "Samsung",
              "B": "Nokia",
              "C": "Apple",
              "D": "Google"
            },
            "correctAnswer": "C"
          },
          {
            "id": 61,
            "category": "Technológia",
            "question": "Melyik évben jelent meg az első Windows operációs rendszer?",
            "options": {
              "A": "1985",
              "B": "1990",
              "C": "1995",
              "D": "2000"
            },
            "correctAnswer": "A"
          }
    ]
};

let category 
let mode
let maxQuestionLengthSlider = 0
let maxQuestionsLength = 0
let difficultyTime = 0
let difficultyTitle = ""

function getCategory(){
    let categories = []
    quizData.questions.forEach((question)=>{
        if(!(categories.includes(question.category))){
            categories.push(question.category)
        }
    })
    categories.push("Kevert")
    categories.push("Új kvíz")
    return categories

}
getCategory()

let categories = getCategory()

function renderCategory(){
    let categoryCard = ""
    
    categories.forEach((categoryItem)=>{
        categoryCard += `<div onclick="setCategory('${categoryItem}')" class="${category===categoryItem?"bg-slate-400":"bg-slate-200"} flex flex-col shadow-md items-center justify-center rounded-md text-[30px] font-semibold px-20 py-10 hover:cursor-pointer hover:bg-slate-300 hover:shadow-2xl transition-all duration-300">
            <img class="w-[200px]" src="../assets/${categoryItem}.png"> 
            <p>${categoryItem}</p>
            </div>`
    })
    
    document.getElementById("category").innerHTML=categoryCard
    
}
renderCategory()


function setCategory(innerCategory){
    let sliderContainer = document.getElementById("buttonContainer")
    if(innerCategory==="Új kvíz"){
        maxQuestionLengthSlider = 25
    }
    category = innerCategory
    // startGame(category)
    quizData.questions.forEach((question)=>{
        if(category === question.category){
            maxQuestionLengthSlider ++
        }
    })
    sliderContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    renderCategory()
    renderSlide()
    renderButton()
    renderDifficultyButton()
}


function renderSlide(){
    let input
    if(category === "Kevert"){
        input = `
        <div class="flex gap-2 items-center">
            <p class="text-[25px] font-semibold">Kérdések száma:</p>
            <p id="questionNumber" class="text-[25px] font-semibold"></p>
        </div>
        <input type="range" min="5" max="${quizData.questions.length}" class="slider" id="myRange" oninput="selectQuestionsCountChange()" value=5></input>
        ` 
    }
    else{
        input = `
        <div class="flex gap-2 items-center">
            <p class="text-[25px] font-semibold">Kérdések száma:</p>
            <p id="questionNumber" class="text-[25px] font-semibold"></p>
        </div>
        <input type="range" min="5" max="${maxQuestionLengthSlider}" class="slider" id="myRange" oninput="selectQuestionsCountChange()" value=5></input>
        
        ` 
    }
   
    document.getElementById("slidecontainer").innerHTML = input
    document.getElementById("questionNumber").innerHTML = "5"
}

function renderDifficultyButton(){
    let buttonTitles = [{
        title: "Könnyű",
        time: 2000
    },
    {
        title: "Haladó",
        time: 1500
    },
    {
        title: "Nehéz",
        time: 1000
    }]

    let buttons = `<p class="text-[25px] font-semibold">Válassz nehézséget:</p>`
    buttons += `<div class="flex gap-2">`
    
    buttonTitles.forEach((button)=>{
        buttons += `<button class="${button.title === difficultyTitle?"bg-slate-800 text-white":"border-slate-800 text-slate-800"}  text-[18px] font-semibold border  px-8 py-4 rounded-xl" onclick="setDifficultyTime(${button.time},'${button.title}')">${button.title}</button>`
    })
    buttons += `</div>`
    document.getElementById("difficultyContainer").innerHTML=buttons
    

}

function setDifficultyTime(time,title){
    difficultyTime = time
    difficultyTitle = title

    console.log(title)
    console.log(time)
    renderDifficultyButton()
}

function selectQuestionsCountChange(){
    let inputValue = document.getElementById("myRange").value
    maxQuestionsLength = inputValue
    document.getElementById("questionNumber").innerHTML = inputValue
    
}

function renderButton(){
    let button = `<button class="text-[18px] font-semibold bg-slate-800 text-white px-8 py-4 rounded-xl " onclick="startGame()">Játék indítása</button>`
    document.getElementById("buttonContainer").innerHTML=button
}

function startGame(){
    if(difficultyTitle==="" && difficultyTime === 0){
        alert("Válassz nehézségi szintet!")
    }
    else{
        localStorage.setItem("difficultyTitle",difficultyTitle)
        localStorage.setItem("difficultyTime",difficultyTime.toString())

        

        if(maxQuestionsLength === 0){
            maxQuestionsLength = 5
        }
    
        let quiz = {
            questions:[],
        }
        
        if(localStorage.getItem("user")===null){
            let userData = {
                name: "user",
                score:0,
            }
            localStorage.setItem("user",JSON.stringify(userData))
        }
        if(category === "Kevert"){
            
            for (let index = 0; index < maxQuestionsLength; index++) {
                let randomNumber = Math.floor(Math.random() * quizData.questions.length);
                let randomQuestion = quizData.questions[randomNumber]
    
                quiz.questions.push(randomQuestion)
            
            }
            localStorage.setItem("quiz", JSON.stringify(quiz));
            window.location.href = "../game/index.html";
        }
        
        if(category === "Új kvíz"){
            return window.location.href="../newQuiz/index.html"
        }
        else {
            // Filter questions by category
            const filteredQuestions = quizData.questions.filter(question => question.category === category);
    
            // Ensure maxQuestionsLength does not exceed available questions
            maxQuestionsLength = Math.min(maxQuestionsLength, filteredQuestions.length);
    
            for (let index = 0; index < maxQuestionsLength; index++) {
                let question = filteredQuestions[index]; // Get question by index from filtered list
                quiz.questions.push(question);
            }
        }
            
            localStorage.setItem("quiz",JSON.stringify(quiz))
            window.location.href="../game/index.html"
    }

    }
    


