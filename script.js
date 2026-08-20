let HumanScore = 0;
   let ComputerScore = 0;


function getComputerChoice(){
let number=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let ComputerGet;
if(number==1){
    ComputerGet='Rock'}

    if(number==2){
    ComputerGet='Paper'}
    
    
    if(number==3){
    ComputerGet='Scissors'}

    return ComputerGet;
}


function getHumanChoice(){
let HumanGet = prompt("input Rock Paper or Scissors");
HumanGet=HumanGet.charAt(0).toUpperCase() + HumanGet.slice(1).toLowerCase();
return HumanGet;
}



function PlayRound(HumanGet, ComputerGet){
    let RW=0;
if(HumanGet=='Rock' && ComputerGet=='Scissors' ||HumanGet=='Paper' && ComputerGet=='Rock' || HumanGet=='Scissors' && ComputerGet=='Paper'){
     HumanScore+=1;
     RW+=1;
}
else if(HumanGet==ComputerGet){
    HumanScore+=0;
    ComputerScore+=0;
}
else{
    ComputerScore+=1;
    RW-=1
}

if(RW==1){
    console.log(`YOU WIN!!! ${HumanGet} beats ${ComputerGet}`); 
}
if(RW==-1){
   console.log(`YOU LOSE!!! ${ComputerGet} beats ${HumanGet}`); 
}
if(RW==0){
    console.log("TIE!!! nobody wins");
}

}


function PlayGame(){
    HumanScore = 0;
   ComputerScore = 0;
    for(let i=0;i<5;i++){
PlayRound(getHumanChoice(), getComputerChoice());
    }

if(HumanScore>ComputerScore){
console.log("human wins");
}
else{
    console.log("computerWins");
}
}
PlayGame();

