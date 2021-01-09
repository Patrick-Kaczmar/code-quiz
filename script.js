var main = document.querySelector("main");

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



function begin () {
    startbtn.style.display = "none"
    var clickCount = 5
    var prepTimer = setInterval(function() {
        countDown.textContent = "starting quiz in " + clickCount
        if (clickCount === 0) {
            clearInterval(prepTimer)
            countDown.style.display = "none"
        }
        clickCount--
    }, 1000)
}

startbtn.addEventListener("click", begin)

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
        question: "How do you incriment a for loop by 1",
        answerIndex: 0,
        choices: [
            "i++",
            "1+1",
            "i--",
            "++i"
        ]
    },
    {
        question: "Which tag would you use to add a javascript file to your html",
        answerIndex: 1,
        choices: [
            "<stlye>",
            "<script>",
            "<link>",
            "<meta>"
        ]
    },
    {
        question: "Which of the following uses conditional statements exclusively",
        answerIndex: 2,
        choices: [
            "for loops",
            "functions",
            "if statements",
            "intervals"
        ]
    },
];