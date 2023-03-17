function play(){
    let audio=document.getElementById("audio");
    audio.play();
    audio.volume=0.7;
}
function play1(){
    let audio=document.getElementById("audio2");
    audio.play();
    audio.volume=0.7;
}

let music = new Audio("ting.mp3");
let turn="X";
let gameOver=false;
let o=new Audio("beep.wav");
let x=new Audio("beep1.wav");

// function to change turn
 const changeTurn= ()=>{

        return turn ==="X"?"O":"X";
 }

 // function to check winner
 const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector(".result").innerText=boxtext[e[0]].innerText+" Won. Press reset to play again";
            gameOver=true;
            document.querySelector('.container').style["pointer-events"]="none";
        }
    })
 }

 // function for game logic
 let boxes=document.getElementsByClassName("box");
 Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''){
                boxtext.innerText=turn;
                if(turn=='X') x.play();
                else if(turn='O') o.play();
                turn = changeTurn();
                checkWin();
                if(!gameOver)
                {
                    document.getElementsByClassName("result")[0].innerText="Turn for "+turn;
                }
    }
    })
 })

 reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false;
    document.querySelector(".result").innerText="Turn for "+turn;
    document.querySelector('.container').style["pointer-events"]= "all";
})
