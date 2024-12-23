console.log("Hello, Let's start");
let audioTurn = new Audio("ting.mp3");
let audioGameover = new Audio("gameover.mp3");

let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

const checkWin = () => {
    let text = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if (
            text[e[0]].innerText === text[e[1]].innerText &&
            text[e[1]].innerText === text[e[2]].innerText &&
            text[e[0]].innerText !== ""
        ) {
            document.querySelector('.info').innerText = text[e[0]].innerText + " Wins !!";
            gameover = true;
            audioGameover.play();
            alert(changeTurn() + " wins");
        }
    });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let text = element.querySelector('.text');
    element.addEventListener('click', () => {
        if (text.innerText === '') {
            text.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameover)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});
 
reset.addEventListener('click', ()=>{
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    gameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
})