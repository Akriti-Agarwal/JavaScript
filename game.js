let boxes= document.querySelectorAll(".box");
let resetbutton= document.querySelector("#reset");
let announceresult= document.querySelector("#declare");
let newGame=document.querySelector("#new-game");
let messgbox= document.querySelector(".msg-container");


let turn0=true;
const winpatterns = 
    [[0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]];

    const disableboxes = () => {
        for(let box of boxes)
        {
            box.disabled = true;
        }
    }
boxes.forEach((box)=> {
    box.addEventListener("click", () => {
        console.log("box was marked");
        if(turn0)
        {
        box.innerText= "X";
        turn0=false;
        }
        else{
            box.innerText = "O";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();

    }
    );
}

);
const checkwinner = () => {
    for(let patterns of winpatterns)
    {
        // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
        let pos1= boxes[patterns[0]].innerText;
        let pos2= boxes[patterns[1]].innerText;
        let pos3= boxes[patterns[2]].innerText;
        if(pos1 !== "" && pos1 === pos2 && pos2 === pos3)
            {
                showWinner(pos1);
                return;
            }

       

    }
            
};
const showWinner = (winner) => {
    announceresult.innerText = `Congratulations, winner is ${winner}`;
    messgbox.classList.remove("hide");
};
const resetGame = () => {
    turn0 = true;

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    messgbox.classList.add("hide");
};

resetbutton.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
