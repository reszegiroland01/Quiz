const quiz = {
    questions: [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
            question: "Hány bolygó található a Naprendszerben?",
            options: {
                A: "7",
                B: "8",
                C: "9",
                D: "10"
            },
            correctAnswer: "B"
        },
        {
            id: 5,
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
            id: 6,
            question: "Melyik országban található a Machu Picchu?",
            options: {
                A: "Peru",
                B: "Mexikó",
                C: "Chile",
                D: "Argentína"
            },
            correctAnswer: "A"
        },
        {
            id: 7,
            question: "Ki írta a 'Harry Potter' könyvsorozatot?",
            options: {
                A: "J.R.R. Tolkien",
                B: "George R.R. Martin",
                C: "J.K. Rowling",
                D: "Suzanne Collins"
            },
            correctAnswer: "C"
        },
        {
            id: 8,
            question: "Mi a periódusos rendszer vegyjele az aranynak?",
            options: {
                A: "Ag",
                B: "Au",
                C: "Al",
                D: "Ar"
            },
            correctAnswer: "B"
        },
        {
            id: 9,
            question: "Hány fok van a körben?",
            options: {
                A: "90",
                B: "180",
                C: "270",
                D: "360"
            },
            correctAnswer: "D"
        },
        {
            id: 10,
            question: "Melyik a világ legmagasabb hegye?",
            options: {
                A: "Kilimandzsáró",
                B: "K2",
                C: "Mount Everest",
                D: "Denali"
            },
            correctAnswer: "C"
        }
    ]
};


function setUser(){
    localStorage.removeItem("user")
    let user = document.getElementById("name").value
    if(user===""){
        alert("Állíts be egy user nevet!")
    }
    else{
        let userData = {
            name: user,
            score:0,
        }
        localStorage.setItem("user",JSON.stringify(userData))
    
        window.location.href="../QUIZ/mode/index.html"
    }
    
}