function submitQuiz() {
    // Get the form element
    const quizForm = document.getElementById('quiz-form');

    // Get the values of the selected answers
    const q1 = quizForm.elements.q1.value;
    const q2 = quizForm.elements.q2.value;

    // Calculate the score
    let score = 0;
    if (q1 === 'a') {
        score++;
    }
    if (q2 === 'c') {
        score++;
    }

    if (score != 2) {
        alert("Sorry! You have failed the quiz! You must score maximum score to move on to the next module");
        window.location.href = "../../Python Tutorial/page1/index.html";
    }
    if (score == 2) {
        alert("Congrats! You won this Challenge");
        window.location.href = "../../Python Tutorial/page2/index.html";
    }
}
