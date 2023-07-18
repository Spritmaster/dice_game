// ozgaruvchilar
let diceSt=document.querySelector(".dice")
let rollDice=document.querySelector(".btn--roll")
let play1=document.querySelector(".player--0")
let play2=document.querySelector(".player--1")
let play1Score=document.querySelector("#current--0")
let hold=document.querySelector(".btn--hold")
let replay=document.querySelector(".btn--new")
let p1=document.getElementById("score--0")
let p2=document.getElementById("score--1")
let p1chan=document.getElementById("current--0")
let p2chan=document.getElementById("current--1")

// ozgaruvchilar end

// 
diceSt.style.display="none"
let activePlayer=0
let score=0
let totalScore=[0,0]
let gameOver=true
// 
// 
let ranStone=()=>{
   return Math.ceil(Math.random()*6 )
}
// 
// toshox=zgarishi
rollDice.addEventListener("click", ()=>{
   if(gameOver){
    diceSt.style.display="flex"
    let imgRan = ranStone()
    diceSt.src=`dice-${imgRan}.png`
   score+=imgRan
 if(imgRan !=1){
   document.getElementById(`current--${activePlayer}`).textContent=score
 }
 else if(imgRan==1){
  plusNum()
 }

   }
})
// 
//hold
hold.addEventListener("click",()=>{
 if(gameOver){
    totalScore[activePlayer]+=score
    document.getElementById(`score--${activePlayer}`).textContent=totalScore[activePlayer]


if(totalScore[activePlayer]>=10){
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
    gameOver=false
}
else{
   plusNum()
}
 }
})
replay.addEventListener("click",()=>{
overFun()
})
// kerakli funksiyalar
function plusNum(){
    document.getElementById(`current--${activePlayer}`).textContent=0
    activePlayer = activePlayer==0?1:0
    score=0
    play1.classList.toggle("player--active")
    play2.classList.toggle("player--active")
}

function overFun(){
    gameOver=true
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner")
    score=0
    p1.textContent=0
    p2.textContent=0
    p1chan.textContent=0
    p2chan.textContent=0
}