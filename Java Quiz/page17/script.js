function submitQuiz() {
    // Get the form element
    const quizForm = document.getElementById('quiz-form');

    // Get the values of the selected answers
    const q1 = quizForm.elements.q1.value;
    // Calculate the score
    let score = 0;
    if (q1 === 'c') {
        score++;
    }

    if (score != 1) {
        alert("Sorry! You have failed the quiz! You must score maximum score to move on to the next module");
        window.location.href = "../../Java Tutorial/page10/p17.html";
    }
    if (score == 1) {
        alert("Congrats! You won this Challenge");
        window.location.href = "../../Java Tutorial/page10/page10-1/p18.html";
    }
}