// var newGame=''
// newGame=`<button class="playA">Play Again</button>`
function time(){
    var realTime=10

    var timerVal=document.querySelector("#time")
    var timeInt=setInterval(function(){
        if(realTime>0)
        {
            realTime--;
            timerVal.innerHTML=realTime  
        }
        else{
            clearInterval(timeInt);
            checkVal.innerHTML=''
            checkVal.innerHTML=`Game Over <br> final score : ${ogScore} `
            checkVal.style.fontSize='3vw'
            checkVal.style.display='flex'
            checkVal.style.justifyContent='center'
            checkVal.style.alignItems='center'
            hitVal.innerHTML='0'
            newGame.addEventListener("click",function(dets){
                console.log(dets.target)
            })
        }
           
    },1000)    
}

var ogScore=0
function score(){
    ogScore+=10
    document.querySelector("#sc").innerHTML=ogScore
}
var hitVal=document.querySelector("#hit")
checkVal=document.querySelector(".bottom")
function hit(){
    rn=Number(Math.floor(Math.random()*10))
    hitVal.innerHTML=rn
    checkVal.addEventListener("click",function(dets){
        if(Number(dets.target.textContent)===rn){
            score();
            hit();
            makeBubble();
        }
    })
}

function makeBubble(){
    var data=''
    for(var i=0;i<=151;i++){
        var value=Number(Math.floor(Math.random()*10))
        data=data+`<div id="bubble"><h2>${value}</h2></div>`
    }
    document.querySelector(".bottom").innerHTML=data;
}


makeBubble();
time();
hit();