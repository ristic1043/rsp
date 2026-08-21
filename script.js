let HumanScore = 0;
   let ComputerScore = 0;

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

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
btnRock.addEventListener("click", () =>{
    let HumanChoice = getHumanChoice("Rock");
    PlayRound(HumanChoice, getComputerChoice());
});
btnPaper.addEventListener("click",()=>{
    let HumanChoice = getHumanChoice("Paper");
     PlayRound(HumanChoice, getComputerChoice());
});

btnScissors.addEventListener("click",()=>{
let HumanChoice = getHumanChoice("Scissors");
 PlayRound(HumanChoice, getComputerChoice());
});


function getHumanChoice(HumanGet){
return HumanGet;
}







function PlayRound(HumanGet, ComputerGet){
    let RW=0;
if(HumanGet=='Rock' && ComputerGet=='Scissors' ||HumanGet=='Paper' && ComputerGet=='Rock' || HumanGet=='Scissors' && ComputerGet=='Paper'){
     HumanScore+=1;
    console.log(`YOU WIN!!! ${HumanGet} beats ${ComputerGet}`); 
}
else if(HumanGet==ComputerGet){
    HumanScore+=0;
    ComputerScore+=0;
    console.log("TIE!!! nobody wins");
}
else{
    ComputerScore+=1;
    
     console.log(`YOU LOSE!!! ${ComputerGet} beats ${HumanGet}`); 
}

}



