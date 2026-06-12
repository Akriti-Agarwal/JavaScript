let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll("area");
const message = document.querySelector(".text");
const userscore = document.querySelector("#mine");
const computerScore= document.querySelector("#computer");
const gencompchoice= () => {
    const options= ["rock","paper","scissor"];
    const choiced= Math.floor(Math.random() *3);
    return options[choiced];
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    });
});
const playgame = (userchoice) => {
const compchoice= gencompchoice();
    if(userchoice==compchoice)
    {
        drawgame();
    }
    else{
        let userwin= true;
        if(userchoice=="rock"){
            if(compchoice=="paper")
            {
                userwin=false;
            }
            else{
                userwin=true;
            }
        }
        else if(userchoice=="paper"){
            if(compchoice=="rock")
            {
                userwin=true;

            }
            else{
                userwin=false;

            }
        }
        else{
            if(compchoice=="rock")
            {
                userwin=false;

            }
            else{
                userwin=true;
            }
        }
        winnerdecided(userwin,userchoice,compchoice);

    }
    
    
}
const drawgame=() => {

   message.innerText = "Game was Draw.Play Again!";
   message.style.backgroundColor = "#743F74";
}
const winnerdecided = (userwin,userchoice,compchoice) => {
    if(userwin)
    {
        userScore++;
        userscore.innerText = userScore;
       
        message.innerText = `YAYY,YOU WIN! ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = "green";
        
    }
    else{
        compScore++;
        computerScore.innerText = compScore;
       
        message.innerText= `AWWW,YOU LOST! ${compchoice} beats ${userchoice}`;
        message.style.backgroundColor = "red";

    }
}

