let HumanScore = 0;
   let ComputerScore = 0;

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const RW =document.querySelector("#RW");
const hS=document.querySelector("#hS");
const cS=document.querySelector("#cS");
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


 hS.textContent=`Human score ${HumanScore}`;
cS.textContent=`Robot score ${ComputerScore}`



function PlayRound(HumanGet, ComputerGet){
   
if(HumanGet=='Rock' && ComputerGet=='Scissors' ||HumanGet=='Paper' && ComputerGet=='Rock' || HumanGet=='Scissors' && ComputerGet=='Paper'){
     HumanScore+=1;
    

    console.log(`YOU WIN!!! ${HumanGet} beats ${ComputerGet}`); 
    RW.textContent=`YOU WIN!!! ${HumanGet} beats ${ComputerGet}`;
     hS.textContent=`Human score ${HumanScore}`;
cS.textContent=`Robot score ${ComputerScore}`
if(HumanScore==5){
    alert("Human won");
     window.location.reload();
}
}
else if(HumanGet==ComputerGet){
    HumanScore+=0;
    ComputerScore+=0;
    console.log("TIE!!! nobody wins");
    RW.textContent="TIE!!! nobody wins"
     hS.textContent=`Human score ${HumanScore}`;
cS.textContent=`Robot score ${ComputerScore}`
}
else{
    ComputerScore+=1;
    
     console.log(`YOU LOSE!!! ${ComputerGet} beats ${HumanGet}`); 
     RW.textContent=`YOU LOSE!!! ${ComputerGet} beats ${HumanGet}`;
 hS.textContent=`Human score ${HumanScore}`;
cS.textContent=`Robot score ${ComputerScore}`
if(ComputerScore==5){
    alert("Computer won");
     window.location.reload();
}
    }





}



