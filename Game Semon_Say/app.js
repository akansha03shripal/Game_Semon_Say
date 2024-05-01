let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
 
let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started");
    started=true;
   levelUp();
   
   }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },500);
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;


    //choose random button
    let randomidx=Math.floor(Math.random()*3);
    let randomColor=btns[randomidx];
    let ranbtn=document.querySelector(`.${randomColor}`);
    // console.log(randomidx);
    // console.log(randomColor);
    // console.log(ranbtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);

  gameFlash(ranbtn);

}
function btnPress() {
 
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");

 
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}
function checkAns(idx){
   
    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        // console.log("same vaue");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game Over!<b>${level}</b> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.color="white";
        },250);
        reset();
    }
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    gameSeq=[];
    userseq=[];
    level=0;

}