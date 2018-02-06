/*
	* made by :Amir Amjad
	* date : 4/02/2018
*/
/*
	* b1 mean ==> butoon 1  ...
	* winning combos array => its have the wining combos
	* winCombo => for check function if they become true 
	  that mean the winner is found
	* steps => its counter for  every time you click a button 
	  will add by 1
*/
//		first will be the variebles		//
var b1 = document.getElementById("b1"), 
	b2 = document.getElementById("b2"), 
	b3 = document.getElementById("b3"), 
	b4 = document.getElementById("b4"), 
	b5 = document.getElementById("b5"), 
	b6 = document.getElementById("b6"), 
	b7 = document.getElementById("b7"), 
	b8 = document.getElementById("b8"), 
	b9 = document.getElementById("b9");
var winningCombos 	= new Array(
	[b1, b2, b3],
	[b4, b5, b6],
	[b7, b8, b9],
	[b1, b4, b7],
	[b2, b5, b8],
	[b3, b6, b9],
	[b1, b5, b9],
	[b3, b5, b7]);
var winCombo = new Array(false, false, false) ;	
var ceilsArray = new Array(false, false, false, false, false, false, false, false, false);
var steps = 1, playerSign;
var p1 = {
	name:"player1" ,
	playerSign: 'url(" style/img/x.png ")',	
	};
var p2 = {
	name:"player2" ,
	playerSign: 'url(" style/img/o.png ")',	
	};		

//		next will  be the functions that will calls in the code leatter		//
/*
	* playerSign => player sign X or O 

*/
function buttonClicked(ceil, clickedButton){
	var playerSign = getPlayerSign() ;
	if (ceil) {
		alert("its all ready used") ;
	} else {
		clickedButton.style.backgroundImage = playerSign ;
		ceil = true ;
		check(playerSign);
		steps++ ;
	}
};
function getWinner(playerSign){
	var winner  ;
	winner= (playerSign === p1.playerSign)? p1.name:p2.name ;
	alert (winner) ;
	location.reload() ;
};
function getPlayerSign(){
	var playerSign = (steps%2 !== 0)?playerSign = p1.playerSign : playerSign = p2.playerSign ;
	return playerSign ;
};
function check(playerSign) {
	for(var i = 0; i < winningCombos.length; i++) {	
		for (var j = 0; j < winningCombos[i].length ; j++) {
			if (winningCombos[i][j].style.backgroundImage === playerSign) {
				winCombo[j] = true ;
				if (winCombo[0]&&winCombo[1]&&winCombo[2]) {
					getWinner(playerSign) ;
				}
			}else if(steps === 9 ){
				alert("no one win ");
				location.reload();
			}
			else{
				winCombo[0] = false ;
				winCombo[1] = false ;
				winCombo[2] = false ;
				break;
			}		
		}
	}

};	
//		the events 		//

b1.onclick = function(){
	buttonClicked(ceilsArray[0], b1) ;
};
b2.onclick = function(){
	buttonClicked(ceilsArray[1], b2) ;
};
b3.onclick = function(){
	buttonClicked(ceilsArray[2], b3) ;
};
b4.onclick = function(){
	buttonClicked(ceilsArray[3], b4) ;
};
b5.onclick = function(){
	buttonClicked(ceilsArray[4], b5) ;
};
b6.onclick = function(){
	buttonClicked(ceilsArray[5], b6) ;
};
b7.onclick = function(){
	buttonClicked(ceilsArray[6], b7) ;
};
b8.onclick = function(){
	buttonClicked(ceilsArray[7], b8) ;
};
b9.onclick = function(){
	buttonClicked(ceilsArray[8], b9) ;
};