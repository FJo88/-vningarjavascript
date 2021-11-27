let parent1 = document.querySelector("#dice1");
let parent2 = document.querySelector("#dice2");
let parent3 = document.querySelector("#dice3");
let parent4 = document.querySelector("#dice4");
let parent5 = document.querySelector("#dice5");

let outPut = document.querySelector("#output");

let rollDice = document.querySelector("#rolldice");
let highestScore = 0;
document.body.style.background = "lightblue";

rollDice.addEventListener("click", () => {
  parent1.lastChild.remove();
  parent2.lastChild.remove();
  parent3.lastChild.remove();
  parent4.lastChild.remove();
  parent5.lastChild.remove();

  let dice1 = document.createElement("p");
  let dice1Value = roll();
  dice1.textContent = dice1Value;
  let dice2 = document.createElement("p");
  let dice2Value = roll();
  dice2.textContent = dice2Value;
  let dice3 = document.createElement("p");
  let dice3Value = roll();
  dice3.textContent = dice3Value;
  let dice4 = document.createElement("p");
  let dice4Value = roll();
  dice4.textContent = dice4Value;
  let dice5 = document.createElement("p");
  let dice5Value = roll();
  dice5.textContent = dice5Value;
  let newScore = dice1Value + dice2Value + dice3Value + dice4Value + dice5Value;
  
  parent1.appendChild(dice1);
  parent2.appendChild(dice2);
  parent3.appendChild(dice3);
  parent4.appendChild(dice4);
  parent5.appendChild(dice5);

  if (newScore > highestScore) highestScore = newScore;
  createHighest(highestScore);
});

let roll = () => {
  let number = Math.floor(Math.random() * 6) + 1;
  return number;
};

let createHighest = (input) => {
  outPut.textContent = "";
  let scoreLabel = document.createElement("h2");
  scoreLabel.textContent = "Högsta sammanlagda poäng";
  let highscore = document.createElement("h3");
  highscore.textContent = input;
  outPut.appendChild(scoreLabel);
  outPut.appendChild(highscore);
};
