function getComputerChoice()
{
    x=Math.floor(Math.random()*3)
    if (x==0){
        return "Paper"
    }
    else if (x==1){
        return "Rock"
    }
    return "Scissor"
}
console.log(getComputerChoice())