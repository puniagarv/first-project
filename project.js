var cluter = "";
var score = 60;
var ran = 0;
var hit = 0;
var timer = 60;

function getNewhit()
{   
    hit = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hit;
}
function makeBubble()
{
     for(var i = 1; i <= 160 ;i++)
     {   
          ran = Math.floor(Math.random()*i);
     
          cluter+=`<div class="bubble">${ran}</div>`;
     }
     
     document.querySelector("#pbtm").innerHTML = cluter;
}

function setTimer()
{   
   var timeint = setInterval(function()
   {  if(timer > 0)
      {
         timer--;
         document.querySelector("#time").textContent = timer;
      }
      else
      {   
           clearInterval(timeint);
          document.querySelector("#pbtm").innerHTML = `<h1> score : ${score}</h1>`;
      }
   },1000)
}

function setScore()
{   
     score+=10;
   document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(detail)
{
   var numberhit = Number(detail.target.textContent);
   if(numberhit==hit)
   { 
     setTimer();
     getNewhit();
     makeBubble();
     setScore();
   }    
})


makeBubble();
setTimer();
getNewhit();

