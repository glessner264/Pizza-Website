onload = init;
var currentScore = 0;

function init(){
	randomizeLocation();
	document.getElementById("random").onclick = function(){heroClick();}
	
	
}

function randomizeLocation(){
	
document.getElementById("random").style.left = Math.random()*99 + "1";
document.getElementById("random").style.top = Math.random()*99 + "1";	
	
}
function addScore()
{
var x=document.getElementById("score")
x.innerHTML=Math.floor((Math.random()*99)+1);
}

function heroClick(){
	randomizeLocation();
	addScore();
	
	
	
}