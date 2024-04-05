document.addEventListener("DOMContentLoaded", () => {

const choices = ["Pedra", "Papel", "Tesoura"];
let playerScore = 0;
let computerScore = 0;


    const choicesContainer = document.getElementById("choices");
  
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    const resetButton = document.getElementById("resetButton");

    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => playGame(choice));
        choicesContainer.appendChild(button);
    });

    resetButton.addEventListener("click", resetGame);

    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const winner = determineWinner(playerChoice, computerChoice);
        updateScore(winner);
        resultElement.textContent = `Você escolheu: ${playerChoice}. Joana escolheu: ${computerChoice}. ${winner}`;
        scoreElement.textContent = `Placar: Você ${playerScore} x ${computerScore} Joana`;
        if (playerScore === 10 || computerScore === 10) {
            resultElement.textContent += playerScore === 10 ? " Você ganhou o jogo!" : " Joana ganhou o jogo!";

            resetButton.style.display = "block";
            choicesContainer.style.display = "none";
          
        }
    }

    function determineWinner(player, computer) {
        if (player === computer) return "Empate!";
        if (
            (player === "Pedra" && computer === "Tesoura") ||
            (player === "Papel" && computer === "Pedra") ||
            (player === "Tesoura" && computer === "Papel")
        ) {
            return "Você venceu!";
        } else {
            return "Joana venceu!";
        }
    }

    function updateScore(winner) {
        if (winner === "Você venceu!") {
            playerScore++;
        } else if (winner === "Joana venceu!") {
            computerScore++;
        }
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        resultElement.textContent = "";
        scoreElement.textContent = "";
        resetButton.style.display = "none";
        choicesContainer.style.display = "block";

    }
   animateTitle();


  function animateTitle() {
      const title = document.getElementById('animatedTitle');
      const text = title.innerText;
      title.innerHTML = '';
      for (let i = 0; i < text.length; i++) {
          let letter = document.createElement('span');
          letter.innerText = text[i];
          letter.style.setProperty('--i', i);
          title.appendChild(letter);
      }
  }

  

  });