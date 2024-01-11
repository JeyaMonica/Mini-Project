var currentQuestion = 0;
var score = 0;

var quiz = [
    {
        question: "Do you know the installation of java",
        options: ["Yes", "No"],
        answer: "Yes"
    },
    {
        question: "The name of the java file must match which of the following?",
        options: ["Class Name", "File Name", "Folder Name"],
        answer: "Class Name"
    },
    {
        question: "Which of the following methods inserts a new line at the end of the output?",
        options: ["print()", "println()", "printLine()"],
        answer: "print()"
    },
    {
        question: "Multi-line comments starts with ",
        options: ["**", "//", "/*"],
        answer: "/*"
    },
    {
        question: "A value to the variable can be assigned through which of the following?",
        options: ["=", "==", "==="],
        answer: "=="
    },
    {
        question: "All variables are identified by a unique name such names are called?",
        options: ["Function Names", "Identifiers", "Keywords"],
        answer: "Identifiers"
    },
    {
        question: "Data types such as string, arrays, classes comes under the catagory of",
        options: ["Primitive Data Types", "Non-primitive data type"],
        answer: "Non-primitive data type"
    },
    {
        question: "Which of the following is done by manually placing the type in paranthesis in front of the value?",
        options: ["Narrowing Casting", "Widening Casting"],
        answer: "Narrowing Casting"
    },
    {
        question: "How many groups of operators are there in java?",
        options: ["4", "5", "6"],
        answer: "5"
    },
    {
        question: "Which of the following methods is used to convert lower case string to upper case string?",
        options: ["ToUpperCase()", "touppercase", "toUpperCase"],
        answer: "toUpperCase"
    },
    {
        question: "The Math.abs() method takes how many parameters?",
        options: ["One", "Two", "Three"],
        answer: "One"
    },
    {
        question: "The boolean type is declared using the keyword ",
        options: ["Bool", "Boolean", "boolean"],
        answer: "boolean"
    },
    {
        question: "Which of the following block is specified if the first condition is false?",
        options: ["else", "else if", "finally"],
        answer: "else if"
    },
    {
        question: "Which of the following keyword specifies some code to run if there is no case match?",
        options: ["break", "catch", "default"],
        answer: "default"
    },
    {
        question: "If the variable used in the condition is not incremented what happens?",
        options: ["Infinite loop occurs", "Error occurs", "Exception occurs"],
        answer: "Infinite loop occurs"
    },
    {
        question: "The for loop contains how many statements in its condition?",
        options: ["One", "Two", "Three"],
        answer: "Three"
    },
    {
        question: "Which of the following statement is used to break one iteration and continue with the next one?",
        options: ["Resume", "Continue", "Skip"],
        answer: "Continue"
    },
    {
        question: "Java arrays starts with the index:",
        options: ["[0]", "[1]", "[-1]"],
        answer: "[0]"
    },

    {
        question: "Which of the following spcifies that the method belongs to the main class and not the object of the main class?",
        options: ["void", "class", "static"],
        answer: "static"
    },

    {
        question: "The parameter passed to the method is called?",
        options: ["Parameter passed", "Argument", "Function"],
        answer: "Argument"
    },

    {
        question: "Multiple methods can have the same name as long as the number and/or type of parameters are different.",
        options: ["True", "False"],
        answer: "True"
    },

    {
        question: "In case of of for statements, variables declared in the statements itself are also available inside",
        options: ["Function Scope", "Method scope", "Block scope"],
        answer: "Block scope"
    },

    {
        question: "Every recursive function should have a condition that stops the function from calling itself such function is called?",
        options: ["Stopping condition", "Halting condition", "Pausing condition"],
        answer: "Halting condition"
    }


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
    "../../Java Tutorial/page1/p1.html",  // Redirect page for wrong answer to question 1
    "../../Java Tutorial/page1/p2.html",  // Redirect page for wrong answer to question 2
    "../../Java Tutorial/page3/p3.html",
    "../../Java Tutorial/page4/p5.html",
    "./../Java Tutorial/page5/p6.html",
    "../../Java Tutorial/page6/p9.html",
    "../../Java Tutorial/page7/p10.html",
    "../../Java Tutorial/page8/p15.html",
    "../../Java Tutorial/page9/p16.html",
    "../../Java Tutorial/page9/p16.html",
    "../../Java Tutorial/page11/p21.html",
    "../../Java Tutorial/page12/p23.html",
    "../../Java Tutorial/page13/p24.html",
    "../../Java Tutorial/page14/p26.html",
    "../../Java Tutorial/page15/p27.html",
    "../../Java Tutorial/page16/p28.html",
    "../../Java Tutorial/page17/p30.html",
    "../../Java Tutorial/page18/p31.html",
    "../../Java Tutorial/page19/p34.html",
    "../../Java Tutorial/page20/p35.html",
    "../../Java Tutorial/page21/p36.html", 
    "../../Java Tutorial/page22/p37.html",
    "../../Java Tutorial/page23/p38.html", 
    // Redirect page for wrong answer to question 3
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
