function submitQuiz() {

    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "Delhi") score++;
    if (q2 && q2.value === "4") score++;
    if (q3 && q3.value === "Python") score++;

    document.getElementById("result").innerText =
        "Your Score: " + score + " / 3";
}
