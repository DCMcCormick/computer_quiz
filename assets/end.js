const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
const MAX_HIGHSCORES = 3;
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value,
  };
  highScores.push(score);

  highScores.sort((a, b) => b.score - a.score);
  //only saves top three scores
  highScores.splice(3);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.href = "./highscores.html";
};

document.getElementById("playAgainBtn").addEventListener("click", function () {
  window.location.href = "game.html";
});
