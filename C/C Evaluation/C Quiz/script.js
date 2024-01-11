var currentQuestion = 0;
var score = 0;

var quiz = [
    {
        question: "C language is strongly associated with:",
        options: ["Linux", "Unix", "Windows"],
        answer: "Unix"
    },
    {
        question: "What does IDE stand for?",
        options: ["Integrating Development Kit", "Instantiated Development Kit", "Integrated Development Kit"],
        answer: "Integrated Development Kit"
    },
    {
        question: "Which of the following function is used to output/print text to the screen?",
        options: ["printf()", "print()", "println()"],
        answer: "printf()"
    },
    {
        question: "Which of the following is used to insert a backslash character?",
        options: ["//", "!--", "/", ],
        answer: "\\"
    },
    {
        question: "Which of the following is used to insert multi-line comments?",
        options: ["/*", "!--", "**"],
        answer: "/*"
    },
    {
        question: "Variable names must begin with letter or an underscore.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Which of the following is used as a format specifier of double?",
        options: ["%d", "%c", "%lf"],
        answer: "%lf"
    },
    {
        question: "Which of the following conversion is done automatically by the compiler when you assign a value of one type to another?",
        options: ["Implicit conversion", "Explicit Conversion", "Inverted Conversion"],
        answer: "Implicit conversion"
    },
    {
        question: "Which of the following is used to declare the variable such that it becomes unchangeable?",
        options: ["Variable", "Identifier", "Constant"],
        answer: "Constant"
    },
    {
        question: "Which of the following keyword is used to declare a boolean variable?",
        options: ["bool", "Boolean", "boolean"],
        answer: "bool"
    },
    {
        question: "Which of the following is called a ternary operator?",
        options: ["if statement", "short hand if else statement", "if else statement"],
        answer: "short hand if else statement"
    },
   
    {
        question: "Which of the following is used to specify a block of code to be executed, if a specified condition is true?",
        options: ["If", "Equals", "CodeBlock"],
        answer: "If"
    },
    {
        question: "Which of the following is used to replace many if else statements",
        options: ["For", "Ifs", "Switch"],
        answer: "Switch"
    },
    {
        question: "Which of the following can execute a block of code as long as a specified condition is reached.",
        options: ["Arrays", "Loops", "Cases"],
        answer: "Loops"
    },
    {
        question: "How many times the inner loop will be executed for each iteration of the outer loop.",
        options: ["One", "Two", "Three"],
        answer: "One"
    },
    {
        question: "Which of the following is used to jump out of the switch statement?",
        options: ["Jump", "break", "Switch"],
        answer: "break"
    },
    {
        question: "The elements of the array can be changed.",
        options: ["True", "False"],
        answer: "True"
    },
   
    {
        question: "The two dimensional array is also known as",
        options: ["Cookies", "Dimensional Array", "Matrix"],
        answer: "Matrix"
    },
   
    {
        question: "Strings are immutable.",
        options: ["True", "False"],
        answer: "False"
    },
   
    {
        question: "Which of the following is the escape character",
        options: ["//", "\\", "**"],
        answer: "\\"
    },
   
    {
        question: "Which of the following function is used to get the user input?",
        options: ["Printf()", "input()", "scanf()"],
        answer: "scanf()"
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
    "../../C Tutorial/page1.html",  // Redirect page for wrong answer to question 1
    "../../C Tutorial/page2.html",
    "../../C Tutorial/page3.html",
    "../../C Tutorial/page4.html",
    "../../C Tutorial/page5.html",
    "../../C Tutorial/page6.html",
    "../../C Tutorial/page7.html",
    "../../C Tutorial/page8.html",
    "../../C Tutorial/page9.html",
    "../../C Tutorial/page10.html",
    "../../C Tutorial/page11.html",
    "../../C Tutorial/page12.html",
    "../../C Tutorial/page13.html",
    "../../C Tutorial/page14.html",
    "../../C Tutorial/page15.html",
    "../../C Tutorial/page16.html",
    "../../C Tutorial/page17.html",
    "../../C Tutorial/page18.html",
    "../../C Tutorial/page19.html",
    "../../C Tutorial/page20.html", 
    "../../C Tutorial/page21.html"// Redirect page for wrong answer to question 3
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
