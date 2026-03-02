let number=new String("");
let variables=[];
let variable=[];
let actions=[];
let sum=0;
function count(){
	action();
	sum=variables[0];
	for (var i=0; i <= actions.length; i++) {
		switch(Number(actions[i])){
			case 1:
				sum=sum+variables[i+1];
				break;
			case 2:
				sum=sum-variables[i+1];
				break;
			case 3:
				sum=sum*variables[i+1];
				break;
			case 4:
				sum=sum/variables[i+1];
				break;
			case 5:
				sum=Math.pow(sum,variables[i+1]);
				break;
		}
	}
	text.innerHTML=sum;
	for (var i = 0; i <= variables.length; i++) {
		variables.pop();
	}
	for (var i = 0; i <= actions.length; i++) {
		actions.pop();
	}
	variable.push(Number(sum));
}
function pressNumber(number){
	switch(number){
		case 1:
			variable.push("1");
			text.innerHTML+=1;
		break;
		case 2:
			variable.push("2");
			text.innerHTML+=2;
		break;
		case 3:
			variable.push("3");
			text.innerHTML+=3;
		break;
		case 4:
			variable.push("4");
			text.innerHTML+=4;
		break;
		case 5:
			variable.push("5");
			text.innerHTML+=5;
		break;
		case 6:
			variable.push("6");
			text.innerHTML+=6;
		break;
		case 7:
			variable.push("7");
			text.innerHTML+=7;
		break;
		case 8:
			variable.push("8");
			text.innerHTML+=8;
		break;
		case 9:
			variable.push("9");
			text.innerHTML+=9;
		break;
		case 0:
			variable.push("0");
			text.innerHTML+=0;
		break;
	}
}
function action(action){
	number=new String("");
	for (var i = 0; i <= variable.length - 1; i++) {
		number+=variable[i];
	}
	variables.push(Number(number));
	for (var i = 0; i <= variable.length; i++) {
		variable.pop()
	}
	switch(action){
		case 0:
		break;
		case 1:
			actions.push("1");
			text.innerHTML+="+";
		break;
		case 2:
			actions.push("2");
			text.innerHTML+="-";
		break;
		case 3:
			actions.push("3");
			text.innerHTML+="*";
		break;
		case 4:
			actions.push("4");
			text.innerHTML+="/";
		break;
		case 5:
			actions.push("5");
			text.innerHTML+="^";
		break;
	}
}
//bootstrap