


    let cpuScore=0;
    let playerScore=0;
function play(choice){
    

    let comAnsChoices = ["Rock","Paper","Scissors"];
    let comAns=(comAnsChoices[Math.floor(Math.random() * 3)]);
    let winner = "";
   
    document.getElementById("statement1").innerHTML = `You: ${choice}`;
    document.getElementById("statement2").innerHTML = `CPU: ${comAns}`;
    console.log("CPU Answer:"+comAns);

 
    if(comAns == "Rock" && choice=="Paper")
    {
        winner = "Player";
    }
    else if(comAns == "Rock" && choice=="Scissors")
    {
        winner = "CPU";
    }
    else if(comAns == "Paper" && choice=="Rock")
    {
        winner = "CPU";
    }
    else if(comAns == "Paper" && choice=="Scissors")
    {
        winner = "Player";
    }
    else if(comAns == "Scissors" && choice=="Rock")
    {
        winner = "Player";
    }
    else if(comAns == "Scissors" && choice=="Paper")
    {
        winner = "CPU";
    }
    else if(comAns==choice)
    {
        winner="Draw";
    }
    
    if(winner=="Player" || winner=="CPU"){//showing winner
        document.getElementById("end").innerHTML = `${winner} Wins!`;
    }
    else{
        document.getElementById("end").innerHTML = `Its a Draw`;
    }

    if(winner=="Player"){
        playerScore++;
    }
    else if(winner=="CPU"){
        cpuScore++;
    }
    document.getElementById("labels1").innerHTML = `${playerScore}`;//scores
    document.getElementById("labels2").innerHTML = `${cpuScore}`;

    return winner

}
function main(choice){
    let victor = play(choice);//winner of match
    console.log(victor);
}


//const input = prompt("What's your name?");

/*

if(comAns == "Rock" && choice=="Rock")
{
    winner = "";

}
else if(comAns == "Rock" && choice=="Paper")
{
    winner = "";
}
else if(comAns == "Rock" && choice=="Scissors")
{
    winner = "";
}
else if(comAns == "Paper" && choice=="Rock")
{
    winner = "";
}
else if(comAns == "Paper" && choice=="Paper")
{
    winner = "";
}
else if(comAns == "Paper" && choice=="Scissors")
{
    winner = "";
}
else if(comAns == "Scissors" && choice=="Rock")
{
    winner = "";
}
else if(comAns == "Scissors" && choice=="Paper")
{
    winner = "";
}
else if(comAns == "Scissors" && choice=="Scissors")
{
    winner = "";
}

*/