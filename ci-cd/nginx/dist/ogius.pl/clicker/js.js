let time=0;
let money=0;
let presses=0;
let basePressProfit=3;
let baseTimeProfit=0.5;
let pressProfitMultiplier=1;
let timeProfitMultiplier=1;
let pressProfit=basePressProfit;
let timeProfit=baseTimeProfit;
let boughtItems=[];
clicks.innerHTML="kliknięcia: "+presses+"/"+pressProfit;
setInterval(() => {
    time++;
    clock.innerHTML="czas: "+time+"s/"+timeProfit;
    money+=timeProfit;
    cash.innerHTML="pieniądze: "+money;
}, 1000);
function count(){
    presses++;
    money+=pressProfit;
    clicks.innerHTML="kliknięcia: "+presses+"/"+pressProfit;
    cash.innerHTML="pieniądze: "+money;
}
function changeProfit(number,cost,color,item){
    let didBought=false;
    for (var i = 0; i < boughtItems.length; i++) {
        if(boughtItems[i]==item){didBought=true;}
    }
    let bAudio = new Audio('voices/buyItem.mp3');
    let wAudio = new Audio('voices/wrong.mp3');
    if(money>=cost && !didBought){
        bAudio.play();
        boughtItems.push(item);
        $(color).toggleClass('bought');
        money-=cost;
        if (item[0]=='t'){
            timeProfit+=number*timeProfitMultiplier;
            clock.innerHTML="czas: "+time+"s/"+timeProfit;
        }else{
            pressProfit+=number*pressProfitMultiplier;
            clicks.innerHTML="kliknięcia: "+presses+"/"+pressProfit;
        }
        cash.innerHTML="pieniądze: "+money;
    }else if(!didBought){alert("nie stać cie"); wAudio.play();}else{wAudio.play();}
}
function hideShop(){$('.upgrades, section button').toggleClass('hide');}