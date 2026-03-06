
/**
 * Generates the quiz buttons and functionality given the question set.
 * @param {{
 *   question: string,
 *   answers: Record<string, string>,
 *   correctAnswer: string,
 *   code?: string,
 *   level?: string, 
 * }[]} questions the question set for the quiz
 * 
 * @param {HTMLElement} quizContainer the container that displays the quiz questions
 * @param {HTMLElement} resultsContainer the container that displays the Correct or Wrong text
 * @param {HTMLButtonElement} submitButton button to check current answer
 * @param {HTMLButtonElement} nextButton button to go to next question
 * @param {HTMLButtonElement} previousButton button to go to previous question
 */
function generateQuiz(questions, quizContainer, resultsContainer, submitButton, nextButton, previousButton) {
    let i = 0;
    const correct = new Audio("assets/correct.mp3")
    function showResults(userAnswer) {

        if (questions[i].correctAnswer === userAnswer) {
            resultsContainer.innerHTML =
                '<div class="correct">Correct!</div>';
            correct.play() 
        } else {
            resultsContainer.innerHTML =
                '<div class="wrong">Wrong!, correct answer is: '
                + questions[i].correctAnswer + '</div>';
        }
    }

    function setQuestion() {

        let answers = [];

        for (letter in questions[i].answers) {
            answers.push(
                '<label>'
                + '<input type="radio" name="answerInput" value="' + letter + '">'
                + letter + ": "
                + questions[i].answers[letter]
                + '</label>'
            )
        }

        const code = questions[i].code ? `<div class="code">
        ${questions[i].code
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
        }</div>` : "";
        const level = questions[i].level ? `<div class="level">${questions[i].level}</div>` : "";

        const question = questions[i].question
                            .replaceAll("&", "&amp;")
                            .replaceAll("<", "&lt;")
                            .replaceAll(">", "&gt;")

        resultsContainer.innerHTML = "";

        quizContainer.innerHTML =
            '<div>'
            + '<div class="question">' + question + '</div>'
            + code
            + '<div class="answers">' + answers.join("") + '</div>'
            + '<div class="qnum">' + (i + 1) + "/" + questions.length + '</div>'
            + level
            + '</div>';
    }

    setQuestion();

    nextButton.addEventListener("click", function () {
        if (i + 1 >= questions.length) {
            alert("You have reached the last question!")
            return;
        }
        i++;
        setQuestion();
    })

    previousButton.addEventListener("click", function () {
        if (i === 0) return;
        i--;
        setQuestion();
    })

    submitButton.addEventListener("click", function () {
        const selected = document.querySelector('input[name="answerInput"]:checked')

        if (!selected) {
            alert("Please select an answer choice!");
            return;
        }

        showResults(selected.value);
    })
}

function shuffleQuestions(questions) {
    const shuffled = [...questions];
    let currentIndex = shuffled.length;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[currentIndex],
        ]
    }
    return shuffled;
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const quizType = urlParams.get('type');
    document.getElementById('type').textContent = quizType

    let questions = []; 
    console.log(questions)
    for(q in window.questions){
        let tags = window.questions[q].tags; 

        if(tags.includes(quizType) || quizType === "All"){
            questions.push(window.questions[q]); 
        }
    }
    if (questions.length === 0) {
        this.alert("404 - Topic Type Not Found! :(");
        window.location.href = "index.html";
    } else {
        questions = shuffleQuestions(questions);
    }

    this.document.title = "UIL - Training " + quizType; 

    const quizContainer = this.document.getElementById("quizContainer");
    const submitButton = this.document.getElementById("submitButton");
    const nextButton = this.document.getElementById("nextButton");
    const previousButton = this.document.getElementById("previousButton");
    const resultsContainer = this.document.getElementById("resultsContainer");

    generateQuiz(questions, quizContainer, resultsContainer, submitButton, nextButton, previousButton);

}
