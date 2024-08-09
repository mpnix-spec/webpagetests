function submitQuiz() {
    const correctAnswers = {
        q1: "C",
        q2: "C",
        q3: "D",
        q4: "B",
        q5: "A",
        q6: "B",
        q7: "D",
        q8: "B",
        q9: "A",
        q10: "D"
    };

    let score = 0;

    for (const [question, answer] of Object.entries(correctAnswers)) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answer) {
            score++;
        }
    }

    document.getElementById("result").innerText = `You scored ${score} out of 10.`;
}
