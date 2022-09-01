const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
    .map(score => {
        return '<li class="high-score">${score.name}</li>';
    })
    document.getElementById("finalscore").addEventListener("click", function () {
        window.location.href = "game.html";
    .join("");