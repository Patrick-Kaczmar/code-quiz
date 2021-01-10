var main = document.querySelector("main");

var footer = document.querySelector("footer");

var startbtn = document.createElement("button");
main.appendChild(startbtn);
startbtn.textContent = "CLICK HERE TO START THE QUIZ!"
startbtn.style.backgroundColor = "rgb(146 255 101)"
startbtn.style.marginLeft = "260px"
startbtn.style.fontSize = "30px"
startbtn.style.borderRadius = "20px"
startbtn.style.cursor = "pointer"


var countDown = document.createElement("h1")
main.appendChild(countDown)
countDown.style.textAlign = "center"
countDown.style.fontSize = "60px"

var questionIndex = 0

var questionArr = [
    {
        question: "what does the prompt command do?",
        answerIndex: 2,
        choices: [
            "logs information to the console",
            "creates a variable",
            "asks the user for input",
            "creates a function"
        ]
    },
    {
        question: "What type of value can a variable hold?",
        answerIndex: 3,
        choices: [
            "numbers",
            "strings",
            "objects",
            "all the above"
        ]
    },
    {
        question: "How do you incriment a for loop by 1?",
        answerIndex: 0,
        choices: [
            "i++",
            "1+1",
            "i--",
            "++i"
        ]
    },
    {
        question: "Which tag would you use to add a javascript file to your html?",
        answerIndex: 1,
        choices: [
            "<stlye>",
            "<script>",
            "<link>",
            "<meta>"
        ]
    },
    {
        question: "Which of the following uses conditional statements exclusively?",
        answerIndex: 2,
        choices: [
            "for loops",
            "functions",
            "if statements",
            "intervals"
        ]
    },
];


function begin () {

    startbtn.style.display = "none"

    var clickCount = 5

    var prepTimer = setInterval(function() {
        countDown.textContent = "starting quiz in " + clickCount
        if (clickCount === 0) {
            clearInterval(prepTimer)
            countDown.textContent = ""
            showTimer()
        }
        clickCount--
        console.log("seconds until quiz starts " + clickCount)
    }, 1000)
}

function showTimer() {
    var timer = 60
    var startTimer = setInterval(function() {
        countDown.textContent = timer
        nextQuestion()
        if (timer === 0) {
            clearInterval(startTimer)
        }
        timer--
    }, 1000)
}

function nextQuestion() {
    footer.textContent = ""

    var h1 = document.createElement("h1")
    footer.appendChild(h1)

    h1.textContent = questionArr[questionIndex].question
    
    var ol = document.createElement("ol")
    footer.appendChild(ol)

    for (i = 0; i < questionArr[i].choices.length; i++) {
        var li = document.createElement("li")
        ol.appendChild(li)
        li.textContent = questionArr[questionIndex].choices[i]
        
        
        li.addEventListener("click", function() {
            questionIndex++
            nextQuestion()
        })
    }
}

// console.log(questionArr[0].choices.length)

startbtn.addEventListener("click", begin)