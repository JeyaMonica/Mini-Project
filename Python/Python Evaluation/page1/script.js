var currentQuestion = 0;
var score = 0;

var quiz = [
    {
        question: "Python has a simple syntax similar to the language of?",
        options: ["Japanese", "English", "French"],
        answer: "English"
    },
    {
        question: "Do you know how to install python?",
        options: ["Yes", "No"],
        answer: "Yes"
    },
    {
        question: "Python comments start with the following symbol",
        options: ["//", "#", "!--"],
        answer: "#"
    },
    {
        question: "Which of the following is used explain the code?",
        options: ["Argument", "Comments", "Parameter"],
        answer: "Comments"
    },
    {
        question: "Which of the following is not a type of case in python?",
        options: ["Snake case", "Pascal case", "Lemon case"],
        answer: "Lemon case"
    },
    {
        question: "Which of the following is not a catagory of data type in python?",
        options: ["Numeric Type", "None Type", "String type"],
        answer: "String type"
    },
    {
        question: "Which of the following function is used to make a random number?",
        options: ["int()", "random()", "float()"],
        answer: "random()"
    },
    {
        question: "Which of the following is used to specify a type on to a variable?",
        options: ["Random", "Casting", "Type Setting"],
        answer: "Casting"
    },
    {
        question: "Which of the following is used to display a string literal?",
        options: ["println()", "Print()", "print()"],
        answer: "print()"
    },
    {
        question: "Which of the following function is used to evaluate any value and return true or false?",
        options: ["bool()", "Bool()", "trueFalse()"],
        answer: "bool()"
    },
    {
        question: "Which of the following function is used to evaluate any value operator that is used to return the remainder while mathematical operation?",
        options: ["**", "%", "//"],
        answer: "%"
    },
    {
        question: "Which of the following function is used to specify the index of the first item of the list?",
        options: ["index[1]", "index[0]", "Index[0]"],
        answer: "index[0]"
    },
    {
        question: "Which of the following is used to store items in ordered, changeable and allow duplicate values?",
        options: ["Tuples", "Lists", "Array"],
        answer: "Tuples"
    },
    {
        question: "Can sets have two items with the same value?",
        options: ["Yes", "No", ],
        answer: "No"
    },
    {
        question: "Which of the following is used to store the key:value pairs?",
        options: ["Dictionaries", "Tuples", "Array"],
        answer: "Dictionaries"
    },
    {
        question: "Which keyword is a logical operator,and is used to combine conditional statements?",
        options: ["Or", "Not", "And"],
        answer: "And"
    },
    {
        question: "Which of the following can execute a set of statements as long as a condition is true?",
        options: ["While loop", "Break statement", "Else statement"],
        answer: "While loop"
    },
    {
        question: "Which of the following can stop the loop before it has looped through all the items?",
        options: ["Break statement", "Pause statement", "Stop statement"],
        answer: "Break statement"
    },
    {
        question: "Function definition can be used without any content by",
        options: ["pause statement", "empty statement", "pass statement"],
        answer: "pause statement"
    },
];

function showQuestion() {
    var question = quiz[currentQuestion];
    $("#question").text(question.question);
    
    var optionsHtml = "";
    for (var i = 0; i < question.options.length; i++) {
        optionsHtml += '<button class="btn btn-default optionBtn">' + question.options[i] + '</button>';
    }
    $("#options").html(optionsHtml);
}
var redirectPages = [
    "../../Python Tutorial/page1/index.html",  // Redirect page for wrong answer to question 1
    "../../Python Tutorial/page2/index.html",  // Redirect page for wrong answer to question 2
    "../../Python Tutorial/page4/index.html",
    "../../Python Tutorial/page5/index.html",  
    "../../Python Tutorial/page6/index.html",  
    "../../Python Tutorial/page7/index.html",  
    "../../Python Tutorial/page8/index.html",  
    "../../Python Tutorial/page9/index.html",  
    "../../Python Tutorial/page10/index.html",  
    "../../Python Tutorial/page11/index.html", 
    "../../Python Tutorial/page12/index.html",  
    "../../Python Tutorial/page13/index.html",  
    "../../Python Tutorial/page14/index.html",
    "../../Python Tutorial/page15/index.html",
    "../../Python Tutorial/page16/index.html",
    "../../Python Tutorial/page17/index.html", 
    "../../Python Tutorial/page18/index.html", 
    "../../Python Tutorial/page19/index.html",  // Redirect page for wrong answer to question 3
];

function checkAnswer(answer) {
    var question = quiz[currentQuestion];
    if (answer === question.answer) {
        score++;
        $("#scoreValue").text(score);
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            showQuestion();
            Swal.fire({
                title: "Correct!",
                text: "You answered correctly.",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        } else {
            // Redirect to the final score page
            window.location.href = "final_score.html";
        }
    } else {
        // Redirect to the corresponding wrong answer page
        var redirectPage = redirectPages[currentQuestion];
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You answered incorrectly!'
        }).then(() => {
            window.location.href = redirectPage;
        });
    }
}




$(document).ready(function() {
    showQuestion();

    $(document).on("click", ".optionBtn", function() {
        var selectedAnswer = $(this).text();
        checkAnswer(selectedAnswer);
    });

    $("#nextBtn").click(function() {
        checkAnswer("");
    });
});
