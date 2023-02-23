// $(function(){
    
// });

console.log("I'm Watching You Playing Here!");

let list_letters = [
    "Dog Days Are Over.",
    "Instagram: @skisifa1",
    "https://discord.gg/culda",
    "おれだって海賊になりたいんだよ！",
    "Yes, I am a criminal...",
    "Time is what determines security."
];

let letter = "Dog Days Are Over.";

let typer = document.getElementById("typer");

let counter = 0;
let timer = (letter.length+1)*2;


// 100*x=timer      =10*1=                       =1

setInterval(function(){
    timer--;
    if(counter >= letter.length){
        if (timer == 0) {
            counter=0;
            typer.innerHTML="";
            letter = list_letters[rn(0,list_letters.length-1)];
            timer = (letter.length+1)*2;
        }
    }
    else{
        if(timer > letter.length){
            typing(letter[counter]);
            counter++;
        }
    }
    
},100);




// typing("nadi skisifa");


function rn(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function typing(text){
    let new_el = document.createElement("span");
    new_el.setAttribute("class","holder");
    new_el.innerText = text;
    typer.appendChild(new_el);
}