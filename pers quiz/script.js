// Get a reference to the quiz container
const quizContainer = document.getElementById('quiz-form');

// Get an array of all the question divs
const questionDivs = Array.from(document.querySelectorAll('#quiz-form > div'));

// Shuffle the array of question divs
shuffleArray(questionDivs);

// Append the shuffled questions to the quiz container
questionDivs.forEach(div => quizContainer.appendChild(div));

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

  
  

function submitQuiz() {
    // Shuffle the questions
    shuffleArray(questionDivs);
    // Get the form element
    const quizForm = document.getElementById('quiz-form');

    // Get the values of the selected answers
    const q1 = quizForm.elements.q1.value;
    const q2 = quizForm.elements.q2.value;
    const q3 = quizForm.elements.q3.value;
    const q4 = quizForm.elements.q4.value;
    const q5 = quizForm.elements.q5.value;
    const q6 = quizForm.elements.q6.value;
    const q7 = quizForm.elements.q7.value;
    const q8 = quizForm.elements.q8.value;
    const q9 = quizForm.elements.q9.value;
    const q10 = quizForm.elements.q10.value;
    const q11 = quizForm.elements.q11.value;
    const q12 = quizForm.elements.q12.value;
    const q13 = quizForm.elements.q13.value;
    const q14 = quizForm.elements.q14.value;
    const q15 = quizForm.elements.q15.value;
    // Calculate the score
    let java = 0;
    let python=0;
    let C=0;
    if (q1 === 'a') {
        java++;
    }
    else if(q1== 'b') {
        python++;
    }
    else{
        C++;
    }
    if (q2 === 'a') {
        java++;
    }
    else if(q2== 'b') {
        python++;
    }
    else{
        C++;
    }
    if (q3 === 'a') {
        java++;
    }
    else if(q3== 'b') {
        python++;
    }
    else{
        C++;
    }
    if (q4 === 'a') {
        python++;
    }
    else if(q4== 'b') {
        java++;
    }
    else{
        C++;
    }
    if (q5 === 'a') {
        python++;
    }
    else if(q5== 'b') {
        java++;
    }
    else{
        C++;
    }
    if (q6 === 'a') {
        python++;
    }
    else if(q6== 'b') {
        C++;
    }
    else{
        java++;
    }
    if (q7 === 'a') {
        python++;
    }
    else if(q7== 'b') {
        java++;
    }
    else{
        C++;
    }
    if (q8 === 'a') {
        C++;
    }
    else if(q8== 'b') {
        java++;
    }
    else{
        python++;
    }
    if (q9 === 'a') {
        python++;
    }
    else if(q9== 'b') {
        java++;
    }
    else{
        C++;
    }
    if (q10 === 'a') {
        python++;
    }
    else if(q10== 'b') {
        java++;
    }
    else{
        C++;
    }
    if (q11 === 'a') {
        python++;
    }
    else if(q11== 'b') {
        java++;
    }
    else{
        C++;
    }
    if (q12 === 'a') {
        python++;
    }
    else if(q12 == 'b') {
        java++;
    }
    else{
        C++;
    }
    if (q13 === 'a') {
        C++;
    }
    else if(q13 == 'b') {
        java++;
    }
    else{
        python++;
    }
    if (q14 === 'a') {
        java++;
    }
    else if(q14 == 'b') {
        C++;
    }
    else{
        python++;
    }
    if (q15 === 'a') {
        java++;
    }
    else if(q15 == 'b') {
        python++;
    }
    else{
        C++;
    }


		    // Determine the highest score
		    let maxScore = Math.max(java, python, C);
		    
		    // Display the result
		    if (maxScore === java) {
		        alert("The Language that suits you most is Java");
                window.location.href = "page2.html"
		    } else if (maxScore === python) {
		        alert("The Language that suits you most is Python");
                window.location.href = "page1.html"

		    } else if(maxScore === C) {
		        alert("The Language that suits you most is C");
                window.location.href = "page3.html"

		    }
            else{
                alert("Please answer the questions to proceed further");
            }
        
}
    


