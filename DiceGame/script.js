// BUTTON CLICK ANIMATION

const button=document.querySelectorAll("button");
var playing = true;

button.forEach(
	function(btn){
		btn.addEventListener('click',function(){
			btn.style.animationName="click";
			btn.style.animationDuration="0.1s";

			window.setTimeout(()=>{
				btn.style.animationName="none";
				btn.style.animationDuration="0";	
			},200);
		})
	}
)

const diceEl=document.querySelector(".dice");
diceEl.style.visibility="hidden";				//display:none removes the element


				/*------------------------------------- */
var activePlayer=1;
const winningScore=20;

function newGame(){

	document.querySelector(".score1").textContent=0;
	document.querySelector(".currentscore1").textContent=0;
	document.querySelector(".score2").textContent=0;
	document.querySelector(".currentscore2").textContent=0;
	playing=true;
	

	document.querySelector(`.player${activePlayer}`).classList.remove("winner")//added to partition
	activePlayer=1;
	document.querySelector(".player1").classList.add("active-overlay");

	return;
}

var changePlayers=function (){

	if(document.querySelector(`.score${activePlayer}`).textContent>=winningScore){
		//winner!!;
		//declare winner,,,remove dice,,disable buttons;

		diceEl.style.visibility="hidden";
		document.querySelector(`.player${activePlayer}`).classList.add("winner");
		document.querySelector(`.player${activePlayer}`).classList.remove("active-overlay");
		playing = false;
		return;
	}

	document.querySelector(".player1").classList.toggle("active-overlay");
	document.querySelector(".player2").classList.toggle("active-overlay");

	(activePlayer==1)?activePlayer=2:activePlayer=1;
	return;
}

var addScore=()=>{
	let tScoreEl=document.querySelector(`.score${activePlayer}`);
	let cScoreEl=document.querySelector(`.currentscore${activePlayer}`);
	tScoreEl.textContent = (Number)(cScoreEl.textContent)+(Number)(tScoreEl.textContent);
	cScoreEl.textContent="0";
	return;

}

function rollDice(){
	if(playing){
		var n= Math.trunc(6*(Math.random())+1); 	//dice roll;

	var link=`dice/dice-${n}.png`;
	diceEl.src=link;					//change dice image
	diceEl.style.visibility="visible";

	let cScore=document.querySelector(`.currentscore${activePlayer}`);

	if(n==1){
		//change active player
		changePlayers();	   //if n==1,, then current score set to 0 and Playerchange
		cScore.textContent="0";
		return;

	}

	//adding to current score
	cScore.textContent=(Number)(cScore.textContent)+n;

	}
	return;
}

function hold(){
	if(playing){
		addScore();
		changePlayers();
	}
}


				/*-------------------------------------------- */

const newGameEl=document.querySelector(".new-game");
const rollDiceEl=document.querySelector(".roll-dice");
const holdEl=document.querySelector(".hold");

newGameEl.addEventListener('click',newGame);

	rollDiceEl.addEventListener('click',rollDice);
	holdEl.addEventListener('click',hold);

