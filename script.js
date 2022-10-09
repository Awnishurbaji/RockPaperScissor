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
    return "Computer"
}
else if(playerSelection.toLowerCase()=='rock'&&computerSelection=='scissor'){
    console.log("Player wins | Rock beats Scissor")
    return "Player"
}
else if (playerSelection.toLowerCase()=='paper'&& computerSelection=='scissor'){
    console.log("Computer wins | Scissor beats Paper")
    return "Computer"
}
else if (playerSelection.toLowerCase()=='paper'&& computerSelection=='rock'){
    console.log("Player wins | Paper beats Rock")
    return "Player"
}
else if (playerSelection.toLowerCase()=='scissor'&& computerSelection=='paper'){
    console.log("Player wins | Scissor beats Paper")
    return "Player"
}
else if (playerSelection.toLowerCase()=='scissor'&& computerSelection=='rock'){
    console.log("Computer wins | Rock beats Scissor")
    return "Computer"

}
else
 console.log("It is a Draw"+playerSelection+"Equalls"+computerSelection)
 return "Draw"
}
console.log(PlayOneRound("Rock",getComputerChoice()))
function game (playerSelection)
{
    const computerSelection =getComputerChoice()
    const str=PlayOneRound(playerSelection,computerSelection);
    const div=document.createElement('div')
    div.textContent=str;
    alert(str)
    if(str=="Player"){
        PlayerCount +=1
      }
      else
      ComputerCount+=1
    if(PlayerCount >=5)
    {
    alert("The Winner is the Player, He Won 5 Rounds")
    PlayerCount=0
    ComputerCount=0
    }
    else if (ComputerCount>= 5)
    alert("The Winner is the Computer, He Won 5 Rounds")
    PlayerCount=0
    ComputerCount=0

}


    /* 
    let PlayerCount=0
    let ComputerCount=0
    str=''
    for (let i=0 ; i<5 ; i++)
    {
        const computerSelection =getComputerChoice()
        window.addEventListener('click',(btn)=>{
            const playerSelection=btn.innerText
            str=PlayOneRound(playerSelection,computerSelection)
        }
        )
      if(str=="Player"){
        PlayerCount +=1
      }
      else
      ComputerCount+=1
    }
    if(PlayerCount>ComputerCount)
    console.log("The Winner is the Player, He Won "+PlayerCount+" Rounds")
    else
    console.log("The Winner is the Computer, He Won "+ComputerCount+" Rounds")
    */

    let PlayerCount=0
    let ComputerCount=0