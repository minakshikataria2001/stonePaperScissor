let userScore = 0;
let compScore =0;
let userSB = document.getElementById("userScore");
let compSB = document.getElementById("compScore");
// console.log(userSB.innerText);
// console.log(compSB.innerText);
msg - document.getElementById("msg");
// let userTurn = true;
let choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    const options =["rock","paper","scissor"];
    let num = Math.floor(Math.random()*3);
    // console.log("num",num);
    return options[num];
    // let  compChoice = options[num];
    // console.log("computer",compChoice);  
}

const playGame=(userChoice)=>{
    // user choice
    // console.log("user",userChoice);
    let compchoice = genCompChoice();
    if(userChoice === "rock"){
        if(compchoice==="rock"){
            msg.innerText = "Computer choice is rock.Its draw!";
        }
        else if(compchoice==="paper"){
            msg.innerText = "Computer choice is paper.Computer wins!";
            compScore++;
            compSB.innerText= compScore;

        }
        else {
            msg.innerText = "Computer choice is scissor.you wins!";
            userScore++;
            userSB.innerText= userScore;
        }
    }
    if(userChoice === "paper"){
        if(compchoice==="rock"){
            msg.innerText = "Computer choice is rock.you win!";
            userScore++;
            userSB.innerText= userScore;
        }
        else if(compchoice==="paper"){
            msg.innerText = "Computer   choice is paper.its draw!";
           

        }
        else {
            msg.innerText = "Computer choice is scissor.computer  wins!";
            compScore++;
            compSB.innerText= compScore;
           
        }
    }

    if(userChoice === "scissor"){
        if(compchoice==="rock"){
            msg.innerText = "Computer choice is rock.computer wins!";
            compScore++;
            compSB.innerText= compScore;
           
          
        }
        else if(compchoice==="paper"){
            msg.innerText = "Computer choice is paper.you win";
            userScore++;
            userSB.innerText= userScore;
           

        }
        else {
            msg.innerText = "Computer choice is scissor.its draw!";
           
        }
    }

}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    let userChoice = choice.getAttribute("id");
    // console.log("clicked",choiceId);
    
    playGame(userChoice);
  })        
})