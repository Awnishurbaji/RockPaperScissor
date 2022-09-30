function getComputerChoice()
{
    x=Math.floor(Math.random()*3)
    if (x==0){
        return "paper"
    }
    else if (x==1){
        return "rock"
    }
    return "scissor"
}
function PlayOneRound(playerSelection,computerSelection)
{
    
if(playerSelection.toLowerCase()=='rock' && computerSelection=='paper'){
    console.log("Computer wins| Paper beats Rock ")
}
else if(playerSelection.toLowerCase()=='rock'&&computerSelection=='scissor'){
    console.log("Player wins | Rock beats Scissor")
}
else if (playerSelection.toLowerCase()=='paper'&& computerSelection=='scissor'){
    console.log("Computer wins | Scissor beats Paper")
}
else if (playerSelection.toLowerCase()=='paper'&& computerSelection=='rock'){
    console.log("Player wins | Paper beats Rock")
}
else if (playerSelection.toLowerCase()=='scissor'&& computerSelection=='paper'){
    console.log("Player wins | Scissor beats Paper")
}
else if (playerSelection.toLowerCase()=='scissor'&& computerSelection=='rock'){
    console.log("Computer wins | Rock beats Scissor")
}
else
 console.log("It is a Draw"+playerSelection+"Equalls"+computerSelection)
}
console.log(PlayOneRound("Rock",getComputerChoice()))