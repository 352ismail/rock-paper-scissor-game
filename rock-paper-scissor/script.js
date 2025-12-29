const container = document.querySelector(".container");
const winnerInfo = document.querySelector(".info");
const images = container.querySelectorAll("img");
const HumanWins = document.querySelector("#your-wins");
const CopmuterWins = document.querySelector("#computer-wins");
const newBtn = document.querySelector(".btn-new")
const ComputerSelectionDiv = document.querySelector(".computer-selection")
const ComputerSelectionImage = ComputerSelectionDiv.querySelector("img")
let humanSelected = "";
const options = ["scissor", "rock", "paper"];




humanSelected = SelectItem(humanSelected);



function computerSelection() {
  random = getRandomIntInclusive(0, 2);
  option =  options[random];
  ComputerSelectionImage.setAttribute("src",`images/${option}-normal.jpg`)
  return option;
}

newBtn.addEventListener("click", ()=> {
    humanSelected = "";
    images.forEach((image) => {
        currentLink = image.getAttribute("src");
        console.log(currentLink);
        updatedLink = currentLink.replace("-clicked", "-normal");
        image.setAttribute("src", updatedLink);
    })
    ComputerSelectionImage.setAttribute("src",`images/bot.jpg`)
    humanSelected = SelectItem(humanSelected);
})

function InfoParagraph(message) {
  winnerInfo.innerText = message;
}
function SelectItem(humanSelected) {
  images.forEach((image) => {
    image.addEventListener("click", () => {
      if (humanSelected) {
        return;
      }
      currentLink = image.getAttribute("src");
      console.log(currentLink);
      updatedLink = currentLink.replace("-normal", "-clicked");
      image.setAttribute("src", updatedLink);
      console.log(image.getAttribute("id"));
      humanSelected = image.getAttribute("id");
      ComputerSelected = computerSelection();

      console.log("Copmuter selected : ", ComputerSelected);
      winner = WhoWon(humanSelected, ComputerSelected);
      InfoParagraph(winner);
    });
  });
}

function WhoWon(humanSelected, computerSelected) {
  winner = FindWinner(humanSelected, computerSelected);
  if (winner == "draw") {
    return "This match is draw";
  } else if (winner === computerSelected) {
    IncrementComputerWins();
    return "Computer Wins";
  } else if (winner === humanSelected) {
    IncrementHumanWins();
    return "You win";
  }
}

function IncrementHumanWins() {
  currentNumber = parseInt(HumanWins.innerText);
  console.log("current Number in Humna wins =", currentNumber);
  currentNumber++;
  HumanWins.innerText = currentNumber;
}

function IncrementComputerWins() {
  currentNumber = parseInt(CopmuterWins.innerText);
  console.log("current Number in Computer wins =", currentNumber);
  currentNumber++;
  CopmuterWins.innerText = currentNumber;
}

function FindWinner(firstOption, sencondOption) {
  if (firstOption === "rock" && sencondOption === "rock") return "draw";
  else if (firstOption === "rock" && sencondOption === "paper")
    return sencondOption;
  else if (firstOption === "rock" && sencondOption === "scissor")
    return firstOption;
  else if (firstOption === "paper" && sencondOption === "rock")
    return firstOption;
  else if (firstOption === "paper" && sencondOption === "paper") return "draw";
  else if (firstOption === "paper" && sencondOption === "scissor")
    return sencondOption;
  else if (firstOption === "scissor" && sencondOption === "rock")
    return sencondOption;
  else if (firstOption === "scissor" && sencondOption === "paper")
    return sencondOption;
  else if (firstOption === "scissor" && sencondOption === "scissor")
    return "draw";
  else "wrong Input";
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
