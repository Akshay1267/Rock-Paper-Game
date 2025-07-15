let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoree = document.querySelector("#user-score");
const compScoree = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () => {
    console.log("Game is draw!");
    msg.innerText = "Game is draw, Play again!";
    msg.style.backgroundColor = "grey";  
}

const  showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScoree.innerText = userScore;
        msg.innerText = "You won!";
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        compScore++;
        compScoree.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("User clicked", userChoice);
    const compChoice = genCompchoice();
    console.log("Computer choice->", compChoice);

    if(userChoice == compChoice) {
       drawGame();
    }
    else {
        let userWin = true;
        if(userChoice == "rock") {
            userWin = compChoice == "paper" ? false : true;
        } 
    else if(userChoice == "paper") {
        userWin = compChoice == "scissors" ? false : true;
    } 
    else {
        userWin = compChoice == "rock" ? false:true;
    }
    showWinner(userWin);  
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    } );
});
