let cAudio = new Audio('voices/correct.mp3');
let time=0;
let timeLimit=0;
let questions=0;
let goodAnswers=0;
let badAnswers=0;
let goodAnswer=0;
	let sum;
	let n1;
	let n2;

nextQuestion();
setInterval(() => {
    time++;
    clock.innerHTML="czas: "+time+"s";
}, 1000);

function nextQuestion(){
	questions++;
	topQuestionNumber.innerHTML="Pytanie nr"+questions;
	questionNumber.innerHTML="Pytanie: "+questions;
	makeQuestion();
	makeWrongAnswers();
}
function makeQuestion() {
	n1=Math.floor(Math.random()*25);
	n2=Math.floor(Math.random()*25);
	switch(Math.floor(Math.random()*3)){
		case 0:
			sum=n1+n2;
			question.innerHTML="Ile równa się "+n1+"+"+n2;
			break;
		case 1:
			sum=n1-n2;
			question.innerHTML="Ile równa się "+n1+"-"+n2;
			break;
		case 2:
			sum=n1*n2;
			question.innerHTML="Ile równa się "+n1+"*"+n2;
			break;
		case 3:
			sum=n1/n2;
			question.innerHTML="Ile równa się "+n1+"/"+n2;
			break;
	}
	switch(Math.floor(Math.random()*4)){
		case 0:
			firstOption.innerHTML=sum;
			goodAnswer=0;
		break;
		case 1:
			secondOption.innerHTML=sum;
			goodAnswer=1;
		break;
		case 2:
			thirdOption.innerHTML=sum;
			goodAnswer=2;
		break;
		case 3:
			fourthOption.innerHTML=sum;
			goodAnswer=3;
		break;
	}
}
function makeWrongAnswers(){
	let options=[];
	options.push(sum);
	let wrongNumber=function(){
		do{
			let noRepeat=true;
			// let wrongSum=Math.floor(Math.random()*10);
			switch(Math.floor(Math.random()*5)){
				case 0:
					wrongSum=n1+n2;
				break;
				case 1:
					wrongSum=n1-n2;				
				break;
				case 2:
					wrongSum=n1*n2;
				break;
				case 3:
					wrongSum=sum+Math.floor(Math.random()*5);
				break;
				case 4:
					wrongSum=sum+Math.floor(Math.random()*5);
				break;
			}

			for(var i=0; i<=options.length; i++){if(options[i]==wrongSum){noRepeat=false;}}
			if(noRepeat){options.push(wrongSum); return wrongSum;}
		}while(true);
	}
	if (goodAnswer!=0){firstOption.innerHTML=wrongNumber();}
	if (goodAnswer!=1){secondOption.innerHTML=wrongNumber();}
	if (goodAnswer!=2){thirdOption.innerHTML=wrongNumber();}
	if (goodAnswer!=3){fourthOption.innerHTML=wrongNumber();}
}
function check(answer){
	if(answer==goodAnswer && timeLimit==0){
		cAudio.play();
		goodAnswers++;
		allGoodAnswers.innerHTML="Poprawne odpowiedzi: "+goodAnswers;
		timeOnQuestion.innerHTML="Czas na pytanie: ~"+parseInt(time/questions);
		switch(answer){
			case 0:
				$('.fiOption').toggleClass('correct');
				setTimeout(() => {$('.fiOption').toggleClass('correct');}, 1000);
			break;
			case 1:
				$('.seOption').toggleClass('correct');
				setTimeout(() => {$('.seOption').toggleClass('correct');}, 1000);
			break;
			case 2:
				$('.thOption').toggleClass('correct');
				setTimeout(() => {$('.thOption').toggleClass('correct');}, 1000);
			break;
			case 3:
				$('.foOption').toggleClass('correct');
				setTimeout(()=>{$('.foOption').toggleClass('correct');}, 1000);
			break;
		}
		timeLimit++;
		setTimeout(()=>{timeLimit--;nextQuestion();}, 1000);
	}else if (timeLimit==0){
		cAudio.pause();
		var audio = new Audio('voices/bad.mp3');
		audio.play();
		badAnswers++;
		allBadAnswers.innerHTML="Złe odpowiedzi: "+badAnswers;
		timeOnQuestion.innerHTML="Czas na pytanie: "+parseInt(time/questions);
		switch(answer){
			case 0:
				$('.fiOption').toggleClass('bad');
				setTimeout(() => {$('.fiOption').toggleClass('bad');}, 1000);
			break;
			case 1:
				$('.seOption').toggleClass('bad');
				setTimeout(() => {$('.seOption').toggleClass('bad');}, 1000);
			break;
			case 2:
				$('.thOption').toggleClass('bad');
				setTimeout(() => {$('.thOption').toggleClass('bad');}, 1000);
			break;
			case 3:
				$('.foOption').toggleClass('bad');
				setTimeout(() => {$('.foOption').toggleClass('bad');}, 1000);
			break;
		}
		switch(goodAnswer){
			case 0:
				$('.fiOption').toggleClass('correct');
				setTimeout(() => {$('.fiOption').toggleClass('correct');}, 1000);
			break;
			case 1:
				$('.seOption').toggleClass('correct');
				setTimeout(() => {$('.seOption').toggleClass('correct');}, 1000);
			break;
			case 2:
				$('.thOption').toggleClass('correct');
				setTimeout(() => {$('.thOption').toggleClass('correct');}, 1000);
			break;
			case 3:
				$('.foOption').toggleClass('correct');
				setTimeout(()=>{$('.foOption').toggleClass('correct');}, 1000);
			break;
		}
		timeLimit++;
		setTimeout(()=>{timeLimit--;nextQuestion();}, 1000);
	}
}
/*let usedNumbers=[];
function noRepeatRandom(length){
	let rNumber;
	let check=false;
	do{
		rNumber=Math.floor(Math.random()*(length-1);
		for (var j = 0; j < usedNumbers.length; j++){
			if(rNumber==usedNumbers[j]){
				check=true;
				j = usedNumbers.length;
			}else{check=false}
		}
	}while(check);
	usedNumbers.push(rNumber);
	return rNumber;
}*/