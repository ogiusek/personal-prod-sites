var lists = [
	[],
	[],
	[]
];
var fromTo=[];
let count;
let lastMove = null;
Main(5);
function Main(number){
	count = number;
	for (var i = Number(count); i > 0; i--) {
		lists[0].push(i);
	}
	Write();
}
function Write(){
	$('.one, .two, .three, .four, .five').hide();
	if(lists[0].find(element => element == 1)){
		$('.oneStick .one').show();
	}else if(lists[1].find(element => element == 1)){
		$('.twoStick .one').show();
	}else if(lists[2].find(element => element == 1)){
		$('.threeStick .one').show();
	}
	if(lists[0].find(element => element == 2)){
		$('.oneStick .two').show();
	}else if(lists[1].find(element => element == 2)){
		$('.twoStick .two').show();
	}else if(lists[2].find(element => element == 2)){
		$('.threeStick .two').show();
	}
	if(lists[0].find(element => element == 3)){
		$('.oneStick .three').show();
	}else if(lists[1].find(element => element == 3)){
		$('.twoStick .three').show();
	}else if(lists[2].find(element => element == 3)){
		$('.threeStick .three').show();
	}
	if(lists[0].find(element => element == 4)){
		$('.oneStick .four').show();
	}else if(lists[1].find(element => element == 4)){
		$('.twoStick .four').show();
	}else if(lists[2].find(element => element == 4)){
		$('.threeStick .four').show();
	}
	if(lists[0].find(element => element == 5)){
		$('.oneStick .five').show();
	}else if(lists[1].find(element => element == 5)){
		$('.twoStick .five').show();
	}else if(lists[2].find(element => element == 5)){
		$('.threeStick .five').show();
	}
}
function GetReplaceValue(value){
	switch(Number(value)){
		case 0:
			$('.oneB').toggleClass('pressed');
			break;
		case 1:
			$('.twoB').toggleClass('pressed');
			break;
		case 2:
			$('.threeB').toggleClass('pressed');
			break;
	}
	fromTo.push(value);
	if(fromTo.length >= 2){
		for (var i = 0; i < 2; i++) {
			switch(fromTo[i]){
				case 0:
					$('.oneB').toggleClass('pressed');
					break;
				case 1:
					$('.twoB').toggleClass('pressed');
					break;
				case 2:
					$('.threeB').toggleClass('pressed');
					break;
			}
		}
		ReplaceCheck(fromTo[0], fromTo[1]);
		fromTo.pop();
		fromTo.pop();
		Write();
	}
}
function ReplaceCheck(from,to){
	if(lists[from].length > 0){
		if(lists[to].length == 0){
			Replace(from,to);
		} else if(lists[from][lists[from].length - 1] < lists[to][lists[to].length - 1]) {
			Replace(from,to);
		}
	}
}
function Replace(from, to){
	lists[to].push(lists[from].pop());
}
function Ai(puck, toStick){
	// get values
	let fromStick;
	let fromPosition;
	let lastStick;
	let canToStick = false;
	fromStick = find(puck);
	if(lists[toStick].length == 0){
		canToStick = true;
	}else if(lists[toStick][lists[toStick].length - 1] > puck){
		canToStick = true;
	}
	for (var i = 0; i < lists.length; i++) {
		if(fromStick != i && toStick != i){
			lastStick=i;
			break;
		}
	}
	// check
	if(fromStick == toStick){
		if(puck > 1){
			Ai(puck - 1, fromStick);
		}else{
			alert("Zrobione!");
		}
	}else if(canToStick && lastValue(fromStick) == puck){
		Replace(fromStick, toStick);
		Write();
	}else if(lastValue(fromStick) != puck){
		if(puck > 1){
			Ai(puck - 1, lastStick);
		}else{
			alert("Zrobione!");
		}
	}else if(lastValue(fromStick) == puck && !canToStick){
		if(puck > 1){
			Ai(puck - 1, lastStick);
		}else{
			alert("Zrobione!");
		}
	}
}
function lastValue(posistion){
	return lists[posistion][lists[posistion].length - 1];
}
function find(puck){
	for (var i = 0; i < lists.length; i++) {
		for (var j = 0; j < lists[i].length; j++) {
			if(lists[i][j] == puck){
				return i;
			}			
		}
	}
}