let playerABtn = document.getElementById("player1-btn");
let playerBBtn = document.getElementById("player2-btn");
let player1health = document.getElementById("player1-health");
let player2health = document.getElementById("player2-health");
const result = document.getElementById("result");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
const resetBtn = document.getElementById("reset-btn")

let playerA = {
  health: 100,
  roundsWon: 0,
};

let playerB = {
  health: 100,
  roundsWon: 0,
};

// let player1starthealth = 100;
// let player2starthealth = 100;

// let roundswon = 0;

function getRandomElementFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

playerABtn.addEventListener("click", () => {
  const myArray = [10, 20, 30, 40, 50];
  const randomElement = getRandomElementFromArray(myArray);
  player2health.innerText = "Health: " + (playerB.health -= randomElement);
  playerABtn.disabled = true;
  playerBBtn.disabled = false;
  if (playerB.health <= 0) {
    playerA.health = 100;
    playerB.health = 100;
    player2health.innerText = `Health: ${playerB.health}`;
    player1health.innerText = `Health: ${playerA.health}`;

    playerA.roundsWon++;
    result1.innerText = `Rounds won: ${playerA.roundsWon}`;
    alert("Player A winner");
  }
  if (playerA.roundsWon + playerB.roundsWon === 5) {
    if (playerA.roundsWon < playerB.roundsWon) {
    //   alert("Player B is the final Winner");
      result.innerText = `Congratulations! Player B is the final Winner🎉🎉`

      playerBBtn.disabled = true;
      playerABtn.disabled = true;
    } else {
    //   alert("Player A is the final Winner");
      result.innerText = `Congratulations! Player A is the final Winner🎉🎉`

      playerBBtn.disabled = true;
      playerABtn.disabled = true;
    }
  }
});

playerBBtn.addEventListener("click", () => {
  const myArray = [10, 20, 30, 40, 50];
  const randomElement = getRandomElementFromArray(myArray);
  player1health.innerText = "Health: " + (playerA.health -= randomElement);
  playerBBtn.disabled = true;
  playerABtn.disabled = false;
  if (playerA.health <= 0) {
    playerA.health = 100;
    playerB.health = 100;
    player1health.innerText = `Health: ${playerA.health}`;
    player2health.innerText = `Health: ${playerB.health}`;

    playerB.roundsWon++;
    result2.innerText = `Rounds won: ${playerB.roundsWon}`;
    alert("Player B winner");
  }
  if (playerA.roundsWon + playerB.roundsWon === 5) {
    if (playerA.roundsWon < playerB.roundsWon) {
    //   alert("Player B is the final Winner");
      result.innerText = `Congratulations! Player B is the final Winner🎉🎉`

      playerBBtn.disabled = true;
      playerABtn.disabled = true;
    } else {
    //   alert("Player A is the final Winner");
      result.innerText = `Congratulations! Player A is the final Winner🎉🎉`
      playerBBtn.disabled = true;
      playerABtn.disabled = true;
    }
  }
});

resetBtn.addEventListener("click", () => {
    playerA.health = 100;
    playerB.health = 100;
    player1health.innerText = `Health: ${playerA.health}`;
    player2health.innerText = `Health: ${playerB.health}`;
    result1.innerText = `Rounds won: 0`;
    result2.innerText = `Rounds won: 0`;
    playerBBtn.disabled = false;
    playerABtn.disabled = false;
    result.innerText = "";
    playerA.roundsWon = 0;
    playerB.roundsWon = 0;

})


