const board = document.getElementById("board");

const dots = 4;      // 4x4 dots => 3x3 boxes

let currentPlayer = 1;
let score1 = 0;
let score2 = 0;

let hLines = Array(dots)
    .fill()
    .map(() => Array(dots - 1).fill(false));

let vLines = Array(dots - 1)
    .fill()
    .map(() => Array(dots).fill(false));

let boxes = Array(dots - 1)
    .fill()
    .map(() => Array(dots - 1).fill(0));

const boxElements = [];

function createBoard() {

    for(let i=0;i<2*dots-1;i++){

        for(let j=0;j<2*dots-1;j++){

            if(i%2===0 && j%2===0){
                const dot=document.createElement("div");
                dot.className="dot";
                board.appendChild(dot);
            }

            else if(i%2===0 && j%2===1){
                let row=i/2;
                let col=Math.floor(j/2);

                const line=document.createElement("div");
                line.className="h-line";

                line.addEventListener("click",()=>{
                    if(hLines[row][col]) return;

                    hLines[row][col]=true;
                    line.classList.add(
                        currentPlayer===1 ? "active1":"active2"
                    );

                    let madeBox=checkBoxes();

                    if(!madeBox){
                        switchPlayer();
                    }
                });

                board.appendChild(line);
            }

            else if(i%2===1 && j%2===0){
                let row=Math.floor(i/2);
                let col=j/2;

                const line=document.createElement("div");
                line.className="v-line";

                line.addEventListener("click",()=>{
                    if(vLines[row][col]) return;

                    vLines[row][col]=true;
                    line.classList.add(
                        currentPlayer===1 ? "active1":"active2"
                    );

                    let madeBox=checkBoxes();

                    if(!madeBox){
                        switchPlayer();
                    }
                });

                board.appendChild(line);
            }

            else{
                const box=document.createElement("div");
                box.className="box";

                let row=Math.floor(i/2);
                let col=Math.floor(j/2);

                if(!boxElements[row])
                    boxElements[row]=[];

                boxElements[row][col]=box;

                board.appendChild(box);
            }
        }
    }
}

function checkBoxes(){

    let completed=false;

    for(let i=0;i<dots-1;i++){

        for(let j=0;j<dots-1;j++){

            if(boxes[i][j]!==0)
                continue;

            if(
                hLines[i][j] &&
                hLines[i+1][j] &&
                vLines[i][j] &&
                vLines[i][j+1]
            ){

                boxes[i][j]=currentPlayer;

                boxElements[i][j].classList.add(
                    currentPlayer===1 ? "box1":"box2"
                );

                if(currentPlayer===1){
                    score1++;
                    document.getElementById("score1").innerText=score1;
                }
                else{
                    score2++;
                    document.getElementById("score2").innerText=score2;
                }

                completed=true;
            }
        }
    }

    return completed;
}

function switchPlayer(){

    currentPlayer = currentPlayer===1 ? 2 : 1;

    document.getElementById("turn").innerText =
        `Player ${currentPlayer}'s Turn`;
}

createBoard();
