let userScore=0
let compScore=0;
const msg = document.querySelector("#msg");
let choices= document.querySelectorAll( ".choice");
let userScorePara=document.querySelector("#User-score");
let compScorePara=document.querySelector("#comp-score");




let genCompChoice=()=>{
let options=["rock","paper","scissor"];

let indx=Math.floor(Math.random()*3);
return options[indx];
}

let Drawgame=()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "blue";
}

let showwinner=(userwin,userChoice,compChoice)=>{
    
    if(userwin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
    compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


let playgame=(userChoice)=>{

    console.log("userChoice is =",userChoice);
    let compChoice=genCompChoice();
    console.log("compChoice is =",compChoice);

    if(userChoice===compChoice)
    {
        Drawgame();
    }
    else{
        let userwin =true;
        if(userChoice==="rock")
        {
            userwin = compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper")
        {
            userwin = compChoice==="scissor" ? false:true;
        }
        else {
            userwin = compChoice==="rock" ? false:true;
        }
        showwinner(userwin,userChoice,compChoice);
    }

    
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log("choice was Clicked" ,userChoice);
        playgame(userChoice);

    })

})