var timer =60;
var score =0;
var newHit;

function setScore(){
    score += 10;
    document.querySelector("#scoreVal").innerHTML=score;
}

function makeBubble(){
    var clutter = "";
for(var i=0;i<119;i++){
     var rn =Math.floor(Math.random()*10);
    clutter +=  `<div class="bubble">${rn}</div>`;
}

document.querySelector("#panelBottom").innerHTML=clutter;
}

function runTimer(){
   var timeInt= setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerVal").innerHTML=timer;
        }
        else{
            clearInterval(timeInt); 
            document.querySelector("#panelBottom").innerHTML=`<div>
            <h1 id="GM">Game Over</h1>
            <h1 id="GM1">Score is ${score}</h1>
            <button id ="btn">Restart</button>
            </div>`;
            document.querySelector("#btn").addEventListener("click",function(){
                score=0;
                document.querySelector("#scoreVal").innerHTML=score;
                timer=60;
                document.querySelector("#panelBottom").innerHTML = "";

                // Start the timer again
                runTimer();
                makeBubble();
                getNewHit();
            });

        }
        
    },1000);

}

function getNewHit(){
     newHit = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").innerHTML=newHit;
}

document.querySelector("#panelBottom").addEventListener("click",function(details){
        var bub =Number(details.target.textContent);
        if(newHit ===bub){
           setScore();
           makeBubble();
           getNewHit();
        }
    });



makeBubble();
runTimer();
getNewHit();




