var main = document.querySelector("main");

var footer = document.querySelector("footer");

var body = document.querySelector("body");

var form = document.querySelector("#form");

var score = document.querySelector("#score");

var subBtn = document.querySelector("#subBtn");

var scoreMsg = document.querySelector("#scoreMsg");

var showScore = document.querySelector("#showScore");

var clearScore = document.querySelector("#clearScore");

var startbtn = document.createElement("button");
main.appendChild(startbtn);
startbtn.textContent = "CLICK HERE TO START THE QUIZ!";
startbtn.style.backgroundColor = "rgb(146 255 101)";
startbtn.style.marginLeft = "260px";
startbtn.style.fontSize = "30px";
startbtn.style.borderRadius = "20px";
startbtn.style.cursor = "pointer";


var countDown = document.createElement("h1");
main.appendChild(countDown);
countDown.style.textAlign = "center";
countDown.style.fontSize = "60px";

var questionIndex = 0;

var timer = 60;

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
            "++1"
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

renderScore();

function begin () {

    startbtn.style.display = "none";

    var clickCount = 5;

    var prepTimer = setInterval(function() {
        countDown.textContent = "starting quiz in " + clickCount;
        if (clickCount === 0) {
            clearInterval(prepTimer);
            countDown.textContent = "";
            showTimer()
        };
        clickCount--
        console.log("seconds until quiz starts " + clickCount);
    }, 1000);
};

function showTimer() {
    var startTimer = setInterval(function() {
        countDown.textContent = timer;
        if (timer <= 0 || questionIndex > questionArr.length - 1) {
            clearInterval(startTimer);
            main.textContent = "";
        footer.textContent = "";
            highScore()
        }
        timer--
    }, 1000)
    nextQuestion();
}

function nextQuestion() {

    if (questionIndex > questionArr.length - 1) {
        main.textContent = "";
        footer.textContent = "";
        highScore()
        return
    }

    footer.textContent = "";

    var h1 = document.createElement("h1");
    footer.appendChild(h1);

    h1.textContent = questionArr[questionIndex].question;
    
    var ol = document.createElement("ol");
    footer.appendChild(ol);


    for (i = 0; i < questionArr[i].choices.length; i++) {
        var li = document.createElement("li");
        ol.appendChild(li);
        var choice = document.createElement("button");
        choice.setAttribute("data-index", i);
        li.appendChild(choice);
        choice.style.fontSize = "30px";
        choice.style.borderRadius = "20px";
        choice.style.margin = "15px";
        choice.style.backgroundColor = "rgb(66 178 245)";
        choice.style.cursor = "pointer";
        choice.textContent = questionArr[questionIndex].choices[i];


        choice.addEventListener("click", function(event) {
            var element = event.target;
            console.log(element);
            var btnIndex = element.getAttribute("data-index");
            console.log(btnIndex);
            if (parseInt(btnIndex) !== questionArr[questionIndex].answerIndex) {
                timer += -10
                questionIndex++
                nextQuestion()
            } else {
                questionIndex++
                nextQuestion()
            }
        });
    }
}

function highScore () {
    if (timer < 0) {
        timer = 0
    }
    form.style.display = "block";
    scoreMsg.textContent = "Submit your initials to save your score of " + timer;

    subBtn.addEventListener("click", function(event) {
        event.preventDefault();
        var userName = document.querySelector("#userName").value;
        if (userName == "") {
            alert("Please enter your initials in the input field");
        }else {
            localStorage.setItem("userScore", userName + ": " + (timer + 1))
            location.reload()
        }
    });
}

function renderScore () {
    if (localStorage.getItem("userScore") !== null) {
        showScore.textContent = localStorage.getItem("userScore");
    } else {
        showScore.textContent = "0"
    }
}

function clear() {
    showScore.textContent = "0"
    localStorage.clear()
}

startbtn.addEventListener("click", begin);
clearScore.addEventListener("click", clear);